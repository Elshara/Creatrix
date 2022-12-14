using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngleSharp.Html.Parser;
using Jackett.Common.Models;
using Jackett.Common.Models.IndexerConfig;
using Jackett.Common.Services.Interfaces;
using Jackett.Common.Utils;
using Jackett.Common.Utils.Clients;
using Newtonsoft.Json.Linq;
using NLog;

namespace Jackett.Common.Indexers
{
    [ExcludeFromCodeCoverage]
    public class FunFile : BaseWebIndexer
    {
        private string LoginUrl => SiteLink + "takelogin.php";
        private string SearchUrl => SiteLink + "browse.php";

        private new ConfigurationDataBasicLogin configData => (ConfigurationDataBasicLogin)base.configData;

        public FunFile(IIndexerConfigurationService configService, WebClient w, Logger l, IProtectionService ps,
            ICacheService cs)
            : base(id: "funfile",
                   name: "FunFile",
                   description: "A general tracker",
                   link: "https://www.funfile.org/",
                   caps: new TorznabCapabilities
                   {
                       TvSearchParams = new List<TvSearchParam>
                       {
                           TvSearchParam.Q, TvSearchParam.Season, TvSearchParam.Ep, TvSearchParam.ImdbId, TvSearchParam.Genre
                       },
                       MovieSearchParams = new List<MovieSearchParam>
                       {
                           MovieSearchParam.Q, MovieSearchParam.ImdbId, MovieSearchParam.Genre
                       },
                       MusicSearchParams = new List<MusicSearchParam>
                       {
                           MusicSearchParam.Q
                       },
                       BookSearchParams = new List<BookSearchParam>
                       {
                           BookSearchParam.Q
                       }
                   },
                   configService: configService,
                   client: w,
                   logger: l,
                   p: ps,
                   cacheService: cs,
                   configData: new ConfigurationDataBasicLogin("For best results, change the 'Torrents per page' setting to 100 in your profile."))
        {
            Encoding = Encoding.GetEncoding("iso-8859-1");
            Language = "en-US";
            Type = "private";

            AddCategoryMapping(44, TorznabCatType.TVAnime, "Anime");
            AddCategoryMapping(22, TorznabCatType.PC, "Applications");
            AddCategoryMapping(43, TorznabCatType.AudioAudiobook, "Audio Books");
            AddCategoryMapping(27, TorznabCatType.Books, "Ebook");
            AddCategoryMapping(4, TorznabCatType.PCGames, "Games");
            AddCategoryMapping(40, TorznabCatType.OtherMisc, "Miscellaneous");
            AddCategoryMapping(19, TorznabCatType.Movies, "Movies");
            AddCategoryMapping(6, TorznabCatType.Audio, "Music");
            AddCategoryMapping(31, TorznabCatType.PCMobileOther, "Portable");
            AddCategoryMapping(49, TorznabCatType.Other, "Tutorials");
            AddCategoryMapping(7, TorznabCatType.TV, "TV");
        }

        public override async Task<IndexerConfigurationStatus> ApplyConfiguration(JToken configJson)
        {
            LoadValuesFromJson(configJson);

            var pairs = new Dictionary<string, string> {
                { "username", configData.Username.Value },
                { "password", configData.Password.Value },
                { "login", "Login" }
            };

            var result = await RequestLoginAndFollowRedirect(LoginUrl, pairs, null, true, null, LoginUrl);
            await ConfigureIfOK(result.Cookies, result.ContentString?.Contains("logout.php") == true, () =>
            {
                var parser = new HtmlParser();
                var dom = parser.ParseDocument(result.ContentString);
                var errorMessage = dom.QuerySelector("td.mf_content").TextContent;
                throw new ExceptionWithConfigData(errorMessage, configData);
            });
            return IndexerConfigurationStatus.RequiresTesting;
        }

        protected override async Task<IEnumerable<ReleaseInfo>> PerformQuery(TorznabQuery query)
        {
            var releases = new List<ReleaseInfo>();

            /*
             * notes:
             * can search titles & filesnames with &s_title=1 (default)
             * and tags with &s_tag=1
             * and descriptions with &s_desc=1
             * however the parms are used in an OR fashion and not as an AND
             * so ?search=reality+love+s04e19&s_title=1&s_tag=1
             * will find Love Island S04E19 as well as My Kitchen Rules S12E02
             * since the former has a match for Love in the title, and the latter has a tag for Reality-TV.
             * 
             * FunFiles only has genres for movies and tv
             */

            var ValidList = new List<string>() {
                "action",
                "adventure",
                "animation",
                "biography",
                "comedy",
                "crime",
                "documentary",
                "drama",
                "family",
                "fantasy",
                "game-show",
                "history",
                "home_&_garden",
                "home_and_garden",
                "horror",
                "music",
                "musical",
                "mystery",
                "news",
                "reality",
                "reality-tv",
                "romance",
                "sci-fi",
                "science-fiction",
                "short",
                "sport",
                "talk-show",
                "thriller",
                "travel",
                "war",
                "western"
            };

            var qc = new NameValueCollection
            {
                {"incldead", "1"},
                {"showspam", "1"},
                {"cat", MapTorznabCapsToTrackers(query).FirstIfSingleOrDefault("0")}
            };

            if (query.IsImdbQuery)
            {
                qc.Add("search", query.ImdbID);
                qc.Add("s_desc", "1");
            }
            else
            if (query.IsGenreQuery)
            {
                qc.Add("search", query.Genre + " " + query.GetQueryString());
                qc.Add("s_tag", "1");
                qc.Add("s_title", "1");
            }
            else
                qc.Add("search", query.GetQueryString());

            var searchUrl = SearchUrl + "?" + qc.GetQueryString();
            var results = await RequestWithCookiesAndRetryAsync(searchUrl);

            if (results.IsRedirect) // re-login
            {
                await ApplyConfiguration(null);
                results = await RequestWithCookiesAndRetryAsync(searchUrl);
            }

            try
            {
                var parser = new HtmlParser();
                var dom = parser.ParseDocument(results.ContentString);
                var rows = dom.QuerySelectorAll("table[cellpadding=2] > tbody > tr:has(td.row3)");
                foreach (var row in rows)
                {
                    var qDownloadLink = row.QuerySelector("a[href^=\"download.php\"]");
                    if (qDownloadLink == null)
                        throw new Exception("Download links not found. Make sure you can download from the website.");
                    var link = new Uri(SiteLink + qDownloadLink.GetAttribute("href"));

                    var qDetailsLink = row.QuerySelector("a[href^=\"details.php?id=\"]");
                    var title = qDetailsLink.GetAttribute("title").Trim();
                    var details = new Uri(SiteLink + qDetailsLink.GetAttribute("href"));

                    var qCatLink = row.QuerySelector("a[href^=\"browse.php?cat=\"]");
                    var catStr = qCatLink.GetAttribute("href").Split('=')[1].Split('&')[0];

                    var files = ParseUtil.CoerceInt(row.Children[3].TextContent);
                    var publishDate = DateTimeUtil.FromTimeAgo(row.Children[5].TextContent);
                    var size = ReleaseInfo.GetBytes(row.Children[7].TextContent);
                    var grabs = ParseUtil.CoerceInt(row.Children[8].TextContent);
                    var seeders = ParseUtil.CoerceInt(row.Children[9].TextContent);
                    var leechers = ParseUtil.CoerceInt(row.Children[10].TextContent);

                    var ka = row.NextElementSibling.QuerySelector("table > tbody > tr:nth-child(3)");
                    var ulFactor = ParseUtil.CoerceDouble(ka.Children[0].TextContent.Replace("X", ""));
                    var dlFactor = ParseUtil.CoerceDouble(ka.Children[1].TextContent.Replace("X", ""));
                    ka = row.NextElementSibling.QuerySelector("span[style=\"float:left\"]");
                    var description = ka.TextContent;
                    var qGenres = description.ToLower().Replace(" & ", "_&_").Replace(" and ", "_and_");
                    char[] delimiters = { ',', ' ', '/', ')', '(', '.', ';', '[', ']', '"', '|', ':' };
                    var releaseGenres = ValidList.Intersect(qGenres.Split(delimiters, System.StringSplitOptions.RemoveEmptyEntries));
                    releaseGenres = releaseGenres.Select(x => x.Replace("_", " "));

                    var release = new ReleaseInfo
                    {
                        Title = title,
                        Details = details,
                        Link = link,
                        Guid = link,
                        Category = MapTrackerCatToNewznab(catStr),
                        PublishDate = publishDate,
                        Size = size,
                        Files = files,
                        Grabs = grabs,
                        Seeders = seeders,
                        Peers = leechers + seeders,
                        Description = description,
                        MinimumRatio = 1,
                        MinimumSeedTime = 172800, // 48 hours
                        DownloadVolumeFactor = dlFactor,
                        UploadVolumeFactor = ulFactor
                    };
                    if (release.Genres == null)
                        release.Genres = new List<string>();
                    release.Genres = releaseGenres.ToList();

                    releases.Add(release);
                }
            }
            catch (Exception ex)
            {
                OnParseError(results.ContentString, ex);
            }

            return releases;
        }
    }
}
