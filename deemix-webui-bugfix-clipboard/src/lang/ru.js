const ru = {
	globals: {
		welcome: 'Добро пожаловать в deemix',
		back: 'назад',
		loading: 'загрузка',
		download: 'Скачать {0}',
		by: '{0}',
		in: 'из {0}',
		download_hint: 'Скачать',
		play_hint: 'Прослушать',
		toggle_download_tab_hint: 'Показать/Скрыть',
		clean_queue_hint: 'Очистить завершённые',
		cancel_queue_hint: 'Очистить всё',
		listTabs: {
			empty: '',
			all: 'все',
			top_result: 'лучший результат',
			album: 'альбом | альбомы | альбомы',
			artist: 'исполнитель | исполнители | исполнители',
			single: 'сингл | синглы | синглы',
			title: 'название',
			track: 'трек | треки | треки',
			trackN: '{n} трек | {n} трека | {n} треков',
			releaseN: '{n} релиз | {n} релиза | {n} релизов',
			playlist: 'плейлист | плейлисты | плейлисты',
			compile: 'сплит | сплиты | сплиты',
			ep: 'ep',
			more: 'Больше альбомов',
			featured: 'Представлено в',
			spotifyPlaylist: 'плейлист spotify | плейлисты spotify | плейлисты spotify',
			releaseDate: 'Дата выхода',
			error: 'ошибка'
		}
	},
	about: {
		titles: {
			usefulLinks: 'Полезные ссылки',
			bugReports: 'Отчёты об ошибках',
			contributing: 'Помощь проекту',
			donations: 'Пожертвования',
			license: 'Лицензия'
		},
		subtitles: {
			bugReports: "Что-то не работает? Сообщите нам!",
			contributing: 'Хотите внести вклад в развитие этого проекта? Это можно сделать разными способами!',
			donations: 'Хотите поддержать материально? Можно сделать пожертвование!'
		},
		usesLibrary: 'Приложение использует библиотеку <strong>deemix</strong>, с помощью которой вы можете разработать собственный UI для deemix.',
		thanks: `Спасибо <strong>rtonno</strong>, <strong>uhwot</strong> и <strong>lollilol</strong> за помощь с этим проектом, а также <strong>BasCurtiz</strong> и <strong>scarvimane</strong> за иконку.`,
		upToDate: `Следите за последними обновлениями на <a href="https://t.me/RemixDevNews" target="_blank">канале</a> в Telegram.`,
		officialWebsite: 'Официальный сайт',
		officialRepo: 'Официальный репозиторий библиотеки',
		officialWebuiRepo: 'Официальный репозиторий WebUI',
		officialSubreddit: 'Официальный сабреддит',
		newsChannel: 'Канал новостей',
		questions: `Если у вас возникли вопросы или проблемы с приложением, поищите решение на <a href="https://www.reddit.com/r/deemix" target="_blank">сабреддите</a>. Если не нашли решение, можете создать новый пост и описать вашу проблему.`,
		beforeReporting: `Перед тем, как сообщать об ошибках, убедитесь, что вы используете последнюю версию приложения и что проблема не на вашей стороне.`,
		beSure: `Убедитесь, что ошибка возникает и на других устройствах. Также <strong>НЕ</strong> сообщайте об ошибке, если про неё уже известно.`,
		duplicateReports: 'Повторные сообщения об ошибках рассматриваться не будут.',
		dontOpenIssues: `<strong>НЕ</strong> используйте репозиторий для вопросов автору, для этого есть сабреддит.`,
		newUI: `Если вы хорошо знаете python, то можете сделать новый UI для приложения с использованием базовой библиотеки или пофиксить в ней баги и сделать pull request в <a href="https://codeberg.org/RemixDev/deemix" target="_blank">репозитории</a>.`,
		acceptFeatures: `Можете предложить новые функции, но не слишком сложные, так как они будут добавлены в приложение, а не в саму библиотеку.`,
		otherLanguages: `Если вы хорошо знаете другой язык программирования, можете портировать на нём deemix!`,
		understandingCode: `Не можете разобраться в коде? Свяжитесь с RemixDev в Telegram или на Reddit.`,
		contributeWebUI: `Если вы знаете Vue.js (JavaScript), HTML или CSS, можете внести вклад в развитие <a href="https://codeberg.org/RemixDev/deemix-webui" target="_blank">WebUI</a>.`,
		itsFree: `Помните, что это <strong>бесплатное приложение</strong> и вам следует <strong>поддерживать понравившихся исполнителей</strong> прежде, чем поддерживать разработчиков.`,
		notObligated: `Вы не обязаны делать пожертвования, я всё равно вас ценю!`,
		lincensedUnder: `Проект распространяется под лицензией
			<a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank"
				>GNU General Public License 3.0</a
			>.`
	},
	charts: {
		title: 'Чарты',
		changeCountry: 'Сменить страну',
		download: 'Скачать чарт'
	},
	errors: {
		title: 'Ошибки {0}',
		ids: {
			invalidURL: 'URL не распознан',
			unsupportedURL: 'URL не поддерживается',
			ISRCnotOnDeezer: 'ISRC данного трека недоступен на Deezer',
			notYourPrivatePlaylist: "Вы не можете скачивать чужие приватные плейлисты.",
			spotifyDisabled: 'Неправильно настроены параметры Spotify.',
			trackNotOnDeezer: 'Трек не найден на Deezer!',
			albumNotOnDeezer: 'Альбом не найден на Deezer!',
			notOnDeezer: 'Трек недоступен на Deezer!',
			notEncoded: 'Трек ещё не перекодирован!',
			notEncodedNoAlternative: 'Трек не перекодирован, альтернатив не найдено!',
			wrongBitrate: 'Данного трека нет в нужном битрейте.',
			wrongBitrateNoAlternative: 'Данного трека нет в нужном битрейте. Альтернатив не найдено!',
			no360RA: 'Трек недоступен в формате Reality Audio 360.',
			notAvailable: "Трек недоступен на серверах Deezer!",
			notAvailableNoAlternative: "Трек недоступен на серверах Deezer. Альтернатив не найдено!"
		}
	},
	favorites: {
		title: 'Избранное',
		noPlaylists: 'Плейлисты не найдены',
		noAlbums: 'Избранные альбомы не найдены',
		noArtists: 'Избранные исполнители не найдены',
		noTracks: 'Избранные треки не найдены'
	},
	home: {
		needTologin: 'Вам необходимо войти под своей учетной записью Deezer, прежде чем вы сможете скачивать.',
		openSettings: 'Открыть настройки',
		sections: {
			popularPlaylists: 'Популярные плейлисты',
			popularAlbums: 'Самые прослушиваемые альбомы'
		}
	},
	linkAnalyzer: {
		info: 'Используйте этот раздел, чтобы узнать информацию о ссылке, которую требуется скачать.',
		useful:
			"Этот раздел нужен, если вы хотите загрузить треки, недоступные в вашей стране, а также посмотреть, где они доступны.",
		linkNotSupported: 'Ссылка не поддерживается',
		linkNotSupportedYet: 'Эта ссылка не поддерживается, попробуйте вставить другую.',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: 'Продолжительность',
			diskNumber: 'Номер диска',
			trackNumber: 'Номер трека',
			releaseDate: 'Дата выхода',
			bpm: 'BPM',
			label: 'Издатедь',
			recordType: 'Тип',
			genres: 'Жанр',
			tracklist: 'Треклист'
		}
	},
	search: {
		startSearching: 'Начните искать!',
		description:
			'Здесь можно найти трек, альбом, исполнителя, плейлист... всё! Можно также вставить ссылку Deezer',
		fans: '{0} поклонников',
		noResults: 'Нет результатов',
		noResultsTrack: 'Треков не найдено',
		noResultsAlbum: 'Альбомов не найдено',
		noResultsArtist: 'Исполнителей не найдено',
		noResultsPlaylist: 'Плейлистов не найдено'
	},
	searchbar: 'Ищите, что хотите (или вставьте ссылку)',
	downloads: 'загрузки',
	toasts: {
		addedToQueue: '{0} добавлено в очередь',
		alreadyInQueue: '{0} уже присутствует в очереди!',
		finishDownload: 'Загрузка {0} завершена.',
		allDownloaded: 'Все загрузки завершены!',
		refreshFavs: 'Обновление завершено!',
		loggingIn: 'Вход',
		loggedIn: 'Вход выполнен',
		alreadyLogged: 'Вход уже выполнен',
		loginFailed: "Вход не выполнен",
		loggedOut: 'Вы вышли из аккаунта',
		cancellingCurrentItem: 'Отмена текущей загрузки.',
		currentItemCancelled: 'Отменено.',
		startAddingArtist: 'Добавление альбомов {0} в очередь',
		finishAddingArtist: 'Альбомы {0} добавлены в очередь',
		startConvertingSpotifyPlaylist: 'Добавление плейлиста Spotify в очередь',
		finishConvertingSpotifyPlaylist: 'Spotify плейлист добавлен в очередь',
		loginNeededToDownload: 'Войдите в аккаунт, чтобы скачивать треки!'
	},
	settings: {
		title: 'Настройки',
		languages: 'Язык',
		login: {
			title: 'Вход',
			loggedIn: 'Вы вошли как {username}',
			arl: {
				question: 'Как узнать свой ARL?',
				update: 'Обновить ARL'
			},
			logout: 'Выйти'
		},
		appearance: {
			title: 'Внешний вид',
			slimDownloadTab: 'Компактная вкладка с загрузками'
		},
		downloadPath: {
			title: 'Путь для сохранения'
		},
		templates: {
			title: 'Шаблоны',
			tracknameTemplate: 'Шаблон названия трека',
			albumTracknameTemplate: 'Шаблон названия трека альбома',
			playlistTracknameTemplate: 'Шаблон названия трека плейлиста'
		},
		folders: {
			title: 'Папки',
			createPlaylistFolder: 'Создавать папки для плейлистов',
			playlistNameTemplate: 'Название папки плейлиста',
			createArtistFolder: 'Создавать папки для исполнителя',
			artistNameTemplate: 'Название папки исполнителя',
			createAlbumFolder: 'Создавать папки для альбома',
			albumNameTemplate: 'Название папки альбома',
			createCDFolder: 'Создавать папки для CD',
			createStructurePlaylist: 'Создавать структуру папок для плейлистов',
			createSingleFolder: 'Создавать структуру папок для синглов'
		},
		trackTitles: {
			title: 'Названия треков',
			padTracks: 'Добавлять ноль к номерам треков (01, 02, ...)',
			paddingSize: 'Кол-во цифр в номере',
			illegalCharacterReplacer: 'Замена для запрещённых в имени символов'
		},
		downloads: {
			title: 'Загрузки',
			queueConcurrency: 'Количество одновременных загрузок',
			maxBitrate: {
				title: 'Предпочитаемый битрейт',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: 'Нужно ли перезаписывать файлы?',
				y: 'Да, перезаписать файл',
				n: "Нет, не перезаписывать",
				t: 'Обновить только теги',
				b: 'Нет, оставить оба файла и добавить номер к дубликату'
			},
			fallbackBitrate: 'Загружать с битрейтом ниже, если текущий недоступен',
			fallbackSearch: 'Искать похожий трек, если запрашиваемый недоступен',
			logErrors: 'Сохранять логи ошибок',
			logSearched: 'Сохранять лог истории поиска',
			createM3U8File: 'Создавать файлы плейлистов',
			syncedLyrics: 'Создать .lyr файлы (синхронизированная лирика)',
			playlistFilenameTemplate: 'Шаблон названия плейлиста',
			saveDownloadQueue: 'Сохранять текущую очередь загрузок при закрытии приложения'
		},
		covers: {
			title: 'Обложки',
			saveArtwork: 'Сохранять файл обложки',
			coverImageTemplate: 'Шаблон названия обложки',
			saveArtworkArtist: 'Сохранять файл изображения исполнителя',
			artistImageTemplate: 'Шаблон названия изображения',
			localArtworkSize: 'Размер сохраненной обложки',
			embeddedArtworkSize: 'Размер встроенной в теги обложки',
			localArtworkFormat: {
				title: 'В каком формате сохранять обложки?',
				jpg: 'jpeg',
				png: 'png',
				both: 'jpeg и png'
			},
			jpegImageQuality: 'Качество JPEG'
		},
		tags: {
			head: 'Какие теги сохранять',
			title: 'Название',
			artist: 'Исполнитель',
			album: 'Альбом',
			cover: 'Обложка',
			trackNumber: 'Номер трека',
			trackTotal: 'Кол-во треков',
			discNumber: 'Номер диска',
			discTotal: 'Кол-во дисков',
			albumArtist: 'Исполнитель альбома',
			genre: 'Жанр',
			year: 'Год',
			date: 'Дата',
			explicit: 'Метка о нецензурной лексике',
			isrc: 'Номер записи (ISRC)',
			length: 'Продолжительность',
			barcode: 'Уникальный код альбома (UPC)',
			bpm: 'BPM',
			replayGain: 'Replay Gain',
			label: 'Издатель',
			lyrics: 'Текст песни',
			copyright: 'Права (копирайт)',
			composer: 'Композитор',
			involvedPeople: 'Вовлечённые люди'
		},
		other: {
			title: 'Разное',
			savePlaylistAsCompilation: 'Сохранять плейлисты как сборники',
			useNullSeparator: 'Использовать null в качестве разделителя',
			saveID3v1: 'Сохранять ID3v1',
			multiArtistSeparator: {
				title: 'Как разделять несколько исполнителей?',
				nothing: 'Сохранить только основного',
				default: 'Используя стандартную спецификацию',
				andFeat: 'Используя & и feat.',
				using: 'Используя "{0}"'
			},
			singleAlbumArtist: 'Сохранить только основного исполнителя альбома',
			albumVariousArtists: 'Оставить "Various Artists" в исполнителях альбома',
			removeAlbumVersion: 'Удалить "Album Version" из названия трека',
			removeDuplicateArtists: 'Удалить повторяющихся исполнителей',
			dateFormat: {
				title: 'Формат даты для FLAC файлов',
				year: 'ГГГГ',
				month: 'ММ',
				day: 'ДД'
			},
			featuredToTitle: {
				title: 'Что делать с приглашёнными исполнителями (feat.)?',
				0: 'Ничего',
				1: 'Удалить из названия трека',
				3: 'Удалить из названия трека и альбома',
				2: 'Добавить в название трека'
			},
			titleCasing: 'Регистр названия',
			artistCasing: 'Регистр исполнителя',
			casing: {
				nothing: 'Не менять',
				lower: 'в нижнем регистре',
				upper: 'В ВЕРХНЕМ РЕГИСТРЕ',
				start: 'Каждое Слово С Заглавной Буквы',
				sentence: 'Как в предложении'
			},
			previewVolume: 'Громкость прослушивания',
			executeCommand: {
				title: 'Выполнять команды по окончании загрузок',
				description: 'Оставьте пустым, если ничего не требуется'
			}
		},
		spotify: {
			title: 'Настройки Spotify',
			clientID: 'Spotify clientID',
			clientSecret: 'Spotify Client Secret',
			username: 'Spotify username'
		},
		reset: 'По умолчанию',
		save: 'Сохранить',
		toasts: {
			init: 'Настройки загружены!',
			update: 'Настройки обновлены!',
			ARLcopied: 'ARL скопирован в буфер обмена'
		}
	},
	sidebar: {
		home: 'главная',
		search: 'поиск',
		charts: 'чарты',
		favorites: 'избранное',
		linkAnalyzer: 'анализ ссылок',
		settings: 'настройки',
		about: 'о проекте'
	},
	tracklist: {
		downloadSelection: 'Скачать выбранные'
	}
}

export default ru