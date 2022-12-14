import analyzeLink from './analyzeLink'
import changeAccount from './changeAccount'
import getHome from './getHome'
import getCharts from './getCharts'
import mainSearch from './mainSearch'
import search from './search'
import newReleases from './newReleases'
import getTracklist from './getTracklist'
import { apiHandler as albumSearch } from './albumSearch'
import getChartTracks from './getChartTracks'
import getSettings from './getSettings'
import getUserTracks from './getUserTracks'
import getUserAlbums from './getUserAlbums'
import getUserArtists from './getUserArtists'
import getUserPlaylists from './getUserPlaylists'
import getUserSpotifyPlaylists from './getUserSpotifyPlaylists'
import getUserFavorites from './getUserFavorites'
import getQueue from './getQueue'

export default [
	albumSearch,
	changeAccount,
	analyzeLink,
	getHome,
	getCharts,
	getChartTracks,
	mainSearch,
	search,
	newReleases,
	getTracklist,
	getSettings,
	getUserTracks,
	getUserAlbums,
	getUserArtists,
	getUserPlaylists,
	getUserSpotifyPlaylists,
	getUserFavorites,
	getQueue
]
