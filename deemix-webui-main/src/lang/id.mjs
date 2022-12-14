const id = {
	globals: {
		welcome: 'Selamat datang di deemix',
		back: 'kembali',
		loading: 'memuat',
		download: 'Mengunduh {thing}',
		by: 'oleh {artist}',
		in: 'di {album}',
		download_hint: 'Unduh',
		play_hint: 'Putar',
		toggle_download_tab_hint: 'Buka/Tutup',
		clean_queue_hint: 'Berhasil Mengosongkan',
		cancel_queue_hint: 'Batalkan Semua',
		listTabs: {
			empty: '',
			all: 'semua',
			top_result: 'hasil teratas',
			album: 'album | album',
			artist: 'artis | artis',
			single: 'singel | singel',
			title: 'judul | judul',
			track: 'lagu | lagu',
			trackN: '0 lagu | {n} lagu | {n} lagu',
			releaseN: '0 rilis | {n} rilis | {n} rilis',
			playlist: 'daftar putar | daftar putar',
			compile: 'kompilasi | kompilasi',
			ep: 'ep | ep',
			spotifyPlaylist: 'daftar putar spotify | daftar putar spotify',
			releaseDate: 'tanggal rilis',
			error: 'galat'
		}
	},
	about: {
		titles: {
			usefulLinks: 'Tautan Berguna',
			bugReports: 'Laporan Kesalahan',
			contributing: 'Kontirbutor',
			donations: 'Donasi',
			license: 'Lisensi'
		},
		subtitles: {
			bugReports: 'Ada yang tidak bekerja dengan baik di deemix? Beri tahu kami!',
			contributing: 'Mau kontribusi dalam proyek ini? Kamu bisa lakukan dengan banyak hal!',
			donations: 'Mau kontribusi secara finansial? Kamu bisa beri donasi!'
		},
		usesLibrary:
			'Aplikasi ini menggunakan pustaka <strong>deemix</strong>, yang bisa kamu gunakan untuk membuat UI deemix milikmu sendiri.',
		thanks: `Terima kasih kepada <strong>rtonno</strong>, <strong>uhwot</strong> dan <strong>lollilol</strong> yang telah membantuku dalam proyek ini, serta kepada <strong>BasCurtiz</strong> yang telah membuat ikon.`,
		upToDate: {
			text: `Ikuti {newsChannel} di Telegram agar tidak ketinggalan berita terbaru.`,
			newsChannel: 'kanal berita deemix'
		},
		officialWebsite: 'Situs Web Resmi',
		officialRepo: 'Repositori Pustaka Resmi',
		officialWebuiRepo: 'Repositori WebUI Resmi',
		officialSubreddit: 'Subreddit Resmi',
		newsChannel: 'Kanal Berita',
		questions: {
			text: `Kalau kamu punya pertanyaan atau masalah dengan aplikasi ini, tolong cari solusinya di {subreddit} kami terlebih dahulu. Kalau memang tidak ada, silakan buat pos baru berisikan persoalan tersebut.`,
			subreddit: 'subreddit'
		},
		beforeReporting: `Sebelum melaporkan masalah, pastikan kamu sudah memakai versi aplikasi terbaru dan hal yang akan kamu laporkan memang bukan kesalahan dari pihak kamu sendiri.`,
		beSure: `Pastikan masalah tersebut bisa diemulasikan di mesin lain, dan juga <strong>JANGAN</strong> laporkan masalah yang sudah dilaporkan sebelumnya.`,
		duplicateReports: 'Laporan duplikat akan kami tutup, jadi perhatikan baik-baik.',
		dontOpenIssues: `<strong>JANGAN</strong> buka issue baru untuk mengirimkan pertanyaan, silakan lakukan di subreddit.`,
		newUI: {
			text: `Kalau kamu mahir pada python, kamu bisa coba membuat UI baru untuk aplikasi ini menggunakan pustaka dasar, atau membenarkan masalah di pustaka kami dengan melakukan pull request pada {repo} kami.`,
			repo: 'repo'
		},
		acceptFeatures: `Kami juga menerima fitur baru, tapi jangan yang terlalu kompleks, karena hal itu lebih baik diimplementasikan langsung di aplikasi daripada di pustaka.`,
		otherLanguages: `Kalau kamu mahir dengan bahasa pemrograman lain, kamu bisa coba mentransfer deemix ke bahasa tersebut!`,
		understandingCode: `Butuh bantuan untuk memahami kode deemix? Kontak RemixDev di Telegram atau Reddit.`,
		contributeWebUI: {
			text: `Kalau kamu paham Vue.js (JavaScript), HTML, atau CSS, kamu bisa berkontribusi pada {webui}.`,
			webui: 'WebUI'
		},
		itsFree: `Perlu diingat bahwa <strong>ini adalah proyek gratis</strong> dan <strong>dukung artis idolamu terlebih dahulu</strong> sebelum mendukung kami sebagai pengembang aplikasi.`,
		notObligated: `Jangan merasa terpaksa untuk menyumbang, kami tetap menghargai kamu!`,
		lincensedUnder: {
			text: `Pekerjaan ini ada di bawah lisensi {gpl3}.`,
			gpl3: 'GNU General Public License 3.0'
		}
	},
	charts: {
		title: 'Tangga Lagu',
		changeCountry: 'Ubah Negara',
		download: 'Unduh Tangga Lagu'
	},
	errors: {
		title: 'Galat untuk {name}',
		ids: {
			invalidURL: 'URL tidak dikenal',
			unsupportedURL: 'URL belum didukung',
			ISRCnotOnDeezer: 'Lagu ISRC tidak tersedia di deezer',
			notYourPrivatePlaylist: 'Kamu tidak bisa mengunduh daftar putar privat orang lain.',
			spotifyDisabled: 'Fitur Spotify tidak diatur dengan benar.',
			trackNotOnDeezer: 'Lagu tidak ditemukan di deezer!',
			albumNotOnDeezer: 'Album tidak ditemukan di deezer!',
			notOnDeezer: 'Lagu tidak ada di Deezer!',
			notEncoded: 'Lagu belum di-encode!',
			notEncodedNoAlternative: 'Lagu belum di-encode dan tidak ada alternatif lain!',
			wrongBitrate: 'Lagu tidak tersedia pada bitrate yang diinginkan.',
			wrongBitrateNoAlternative: 'Lagu tidak tersedia pada bitrate yang diinginkan dan tidak ada alternatif lain!',
			no360RA: 'Lagu tidak tersedia pada Reality Audio 360.',
			notAvailable: 'Lagu tidak tersedia pada server deezer!',
			notAvailableNoAlternative: 'Lagu tidak tersedia pada server deezer dan tidak ada alternatif lain!'
		}
	},
	favorites: {
		title: 'Favorit',
		noPlaylists: 'Daftar Putar kosong',
		noAlbums: 'Album Favorit kosong',
		noArtists: 'Artis Favorit kosong',
		noTracks: 'Lagu Favorit kosong'
	},
	home: {
		needTologin: 'Kamu harus masuk ke akun Deezer kamu sebelum bisa memulai pengunduhan.',
		openSettings: 'Buka Pengaturan',
		sections: {
			popularPlaylists: 'Daftar putar populer',
			popularAlbums: 'Album paling banyak diputar'
		}
	},
	linkAnalyzer: {
		info: 'Di sini, kamu bisa mencari informasi lebih lanjut tentang tautan yang ingin kamu unduh.',
		useful:
			'Contohnya, ini dapat berguna jika kamu ingin mengunduh lagu yang tidak tersedia di negaramu dan ingin tahu di negara mana lagu itu tersedia.',
		linkNotSupported: 'Tautan seperti ini belum didukung',
		linkNotSupportedYet: 'Sepertinya tautan ini belum didukung, silakan coba analisa tautan lain.',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: 'Durasi',
			diskNumber: 'Nomor Disk',
			trackNumber: 'Nomor Lagu',
			releaseDate: 'Tanggal Rilis',
			bpm: 'BPM',
			label: 'Label',
			recordType: 'Tipe Rekaman',
			genres: 'Genre',
			tracklist: 'Daftar Lagu'
		}
	},
	search: {
		startSearching: 'Mulai cari!',
		description:
			'Kamu bisa mencari lagu, album, artis, daftar putar.... apa pun! Kamu juga bisa memberikan tautan Deezer',
		fans: '{n} fan',
		noResults: 'Tak ada hasil',
		noResultsTrack: 'Lagu tidak ditemukan',
		noResultsAlbum: 'Album tidak ditemukan',
		noResultsArtist: 'Artis tidak ditemukan',
		noResultsPlaylist: 'Daftar putar tidak ditemukan'
	},
	searchbar: 'Cari apa pun yang kamu mau (atau berikan tautannya saja)',
	downloads: 'unduhan',
	toasts: {
		addedToQueue: '{item} ditambah ke antrian',
		alreadyInQueue: '{item} sudah ada di antrian!',
		finishDownload: '{item} selesai diunduh.',
		allDownloaded: 'Seluruh unduhan selesai!',
		refreshFavs: 'Penyegaran selesai!',
		loggingIn: 'Masuk',
		loggedIn: 'Telah masuk',
		alreadyLogged: 'Telah masuk',
		loginFailed: 'Tidak bisa masuk',
		loggedOut: 'Belum masuk',
		cancellingCurrentItem: 'Membatalkan item.',
		currentItemCancelled: 'Item telah dibatalan.',
		startAddingArtist: 'Menambahkan {artist} album ke antrian',
		finishAddingArtist: '{artist} album telah ditambahkan ke antrian',
		startConvertingSpotifyPlaylist: 'Mengonversi lagu spotify ke deezer',
		finishConvertingSpotifyPlaylist: 'Daftar putar Spotify selesai dikonversi'
	},
	settings: {
		title: 'Pengaturan',
		languages: 'Bahasa',
		login: {
			title: 'Masuk',
			loggedIn: 'Kamu telah masuk sebagai {username}',
			arl: {
				question: 'Bagaimana cara mendapat ARL?',
				update: 'Perbarui ARL'
			},
			logout: 'Keluar'
		},
		appearance: {
			title: 'Tampilan',
			slimDownloadTab: 'Tab unduhan ramping'
		},
		downloadPath: {
			title: 'Direktori Unduhan'
		},
		templates: {
			title: 'Templat',
			tracknameTemplate: 'Templat judul lagu',
			albumTracknameTemplate: 'Templat judul album',
			playlistTracknameTemplate: 'Templat judul daftar putar'
		},
		folders: {
			title: 'Folders',
			createPlaylistFolder: 'Buat folder untuk daftar putar',
			playlistNameTemplate: 'Templat folder daftar putar',
			createArtistFolder: 'Buat folder untuk artis',
			artistNameTemplate: 'Templat folder artis',
			createAlbumFolder: 'Buat folder untuk album',
			albumNameTemplate: 'Templat folder album',
			createCDFolder: 'Buat folder untuk CD',
			createStructurePlaylist: 'Buat struktur folder untuk daftar putar',
			createSingleFolder: 'Buat struktur folder untuk singel'
		},
		trackTitles: {
			title: 'Judul lagu',
			padTracks: 'Judul pad',
			paddingSize: 'Timpa ukuran padding',
			illegalCharacterReplacer: 'Pengubah Simbol Tak Terdukung'
		},
		downloads: {
			title: 'Unduhan',
			queueConcurrency: 'Unduhan Bersamaan',
			maxBitrate: {
				title: 'Bitrate Prioritas',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: 'Apakah file mau ditimpa?',
				y: 'Ya, silakan',
				n: 'Tidak, jangan ditimpa',
				t: 'Timpa tag-nya saja'
			},
			fallbackBitrate: 'Rendahkan bitrate',
			fallbackSearch: 'Cari bitrate lebih rendah',
			logErrors: 'Buat file log untuk galat',
			logSearched: 'Buat file log untuk lagu yang dicari',
			createM3U8File: 'Buat file daftar putar',
			syncedLyrics: 'Buat file .lrc (Sinkronisasikan Lirik)',
			playlistFilenameTemplate: 'Templat nama file untuk daftar putar',
			saveDownloadQueue: 'Simpan antrian pengunduhan saat menutup aplikasi'
		},
		covers: {
			title: 'Sampul album',
			saveArtwork: 'Simpan Sampul',
			coverImageTemplate: 'Templat nama sampul',
			saveArtworkArtist: 'Simpan gambar artis',
			artistImageTemplate: 'Templat gambar artis',
			localArtworkSize: 'Ukuran sampul lokal',
			embeddedArtworkSize: 'Ukuran sampul tertanam',
			localArtworkFormat: {
				title: 'Format gambar apa yang kamu mau untuk sampul lokal?',
				jpg: 'Gambar JPEG',
				png: 'Gambar PNG',
				both: 'Keduanya'
			},
			jpegImageQuality: 'Kualitas gambar JPEG'
		},
		tags: {
			head: 'Tag apa saja yang disimpan?',
			title: 'Judul',
			artist: 'Artis',
			album: 'Album',
			cover: 'Sampul',
			trackNumber: 'Nomor Lagu',
			trackTotal: 'Jumlah Lagu',
			discNumber: 'Nomor Disk',
			discTotal: 'Jumlah Disk',
			albumArtist: 'Artis pada Album',
			genre: 'Genre',
			year: 'Tahun',
			date: 'Tanggal',
			explicit: 'Lirik Eksplisit',
			isrc: 'ISRC',
			length: 'Durasi',
			barcode: 'Barcode Album (UPC)',
			bpm: 'BPM',
			replayGain: 'Replay Gain',
			label: 'Label Album',
			lyrics: 'Lirik Tak Tersinkronisasi',
			copyright: 'Hak Cipta',
			composer: 'Komposer',
			involvedPeople: 'Orang-Orang Terlibat'
		},
		other: {
			title: 'Lainnya',
			savePlaylistAsCompilation: 'Simpan daftar putar sebagai kompilasi',
			useNullSeparator: 'Gunakan separator null',
			saveID3v1: 'Simpan juga ID3v1',
			multiArtistSeparator: {
				title: 'Bagaimana kamu mau memisahkan nama artis?',
				nothing: 'Simpan artis utamanya saja',
				default: 'Gunakan spesifikasi standard',
				andFeat: 'Gunakan & dan feat.',
				using: 'Gunakan "{separator}"'
			},
			singleAlbumArtist: 'Simpan artis utama saja',
			albumVariousArtists: 'Simpan "Various Artists" sebagai artis',
			removeAlbumVersion: 'Hapus "Versi Album" dari judul lagu',
			removeDuplicateArtists: 'Hapus kombinasi artis',
			dateFormat: {
				title: 'Format tanggal untuk file FLAC',
				year: 'YYYY',
				month: 'MM',
				day: 'DD'
			},
			featuredToTitle: {
				title: 'Apa yang harus dilakukan jika ada artis kedua?',
				0: 'Biarkan saja',
				1: 'Hapus dari judul lagu',
				3: 'Hapus dari judul lagu dan judul album',
				2: 'Pindahkan ke judul lagu'
			},
			titleCasing: 'Kapitalisasi judul',
			artistCasing: 'Kapitalisasi album',
			casing: {
				nothing: 'Biarkan seadanya',
				lower: 'huruf kecil',
				upper: 'HURUF KAPITAL',
				start: 'Setiap Awal Kata',
				sentence: 'Huruf pertama saja'
			},
			previewVolume: 'Pratinjau volume',
			executeCommand: {
				title: 'Perintah yang dijalankan setelah pengunduhan',
				description: 'Biarkan kosong jika tidak ada'
			}
		},
		spotify: {
			title: 'Fitur Spotify',
			clientID: 'clientID Spotify ',
			clientSecret: 'Client Secret Spotify ',
			username: 'Username Spotify'
		},
		reset: 'Kembalikan ke Awal',
		save: 'Simpan',
		toasts: {
			init: 'Pengaturan dimuat!',
			update: 'Pengaturan diperbarui!',
			ARLcopied: 'ARL tersalin ke papan klip'
		}
	},
	sidebar: {
		home: 'utama',
		search: 'cari',
		charts: 'tangga lagu',
		favorites: 'favorit',
		linkAnalyzer: 'penganalisa tautan',
		settings: 'pengaturan',
		about: 'tentang'
	},
	tracklist: {
		downloadSelection: 'Seleksi unduhan'
	}
}

export default id
