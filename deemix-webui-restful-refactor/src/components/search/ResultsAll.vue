<template>
	<section>
		<div v-if="!thereAreResults">
			<h1>{{ $t('search.noResults') }}</h1>
		</div>

		<template v-else>
			<section
				v-for="section in viewInfo.ORDER"
				:key="section"
				class="float-none py-5 border-t border-grayscale-500 first:border-t-0"
			>
				<template v-if="checkSectionResults(section)">
					<h2
						@click="$emit('change-search-tab', section)"
						class="mb-6 capitalize"
						:class="{
							'text-4xl text-center': section === 'TOP_RESULT',
							'inline-block cursor-pointer text-3xl hover:text-primary transition-colors duration-200 ease-in-out':
								section !== 'TOP_RESULT'
						}"
					>
						{{ $tc(`globals.listTabs.${section.toLowerCase()}`, 2) }}
					</h2>

					<TopResult
						v-if="section === 'TOP_RESULT'"
						:info="viewInfo.TOP_RESULT[0]"
						@add-to-queue="$emit('add-to-queue', $event)"
					/>

					<ResultsTracks
						v-else-if="section === 'TRACK'"
						:viewInfo="standardizeData(viewInfo.TRACK, formatSingleTrack)"
						:itemsToShow="6"
						@add-to-queue="$emit('add-to-queue', $event)"
					/>

					<ResultsAlbums
						v-else-if="section == 'ALBUM'"
						:viewInfo="standardizeData(viewInfo.ALBUM, formatAlbums)"
						:itemsToShow="6"
						@add-to-queue="$emit('add-to-queue', $event)"
					/>

					<ResultsPlaylists
						v-else-if="section == 'PLAYLIST'"
						:viewInfo="standardizeData(viewInfo.PLAYLIST, formatPlaylist)"
						:itemsToShow="6"
						@add-to-queue="$emit('add-to-queue', $event)"
					/>

					<ResultsArtists
						v-else-if="section === 'ARTIST'"
						:viewInfo="standardizeData(viewInfo.ARTIST, formatArtist)"
						:itemsToShow="6"
						@add-to-queue="$emit('add-to-queue', $event)"
					/>
				</template>
			</section>
		</template>
	</section>
</template>

<script>
import { convertDuration } from '@/utils/utils'
import { upperCaseFirstLowerCaseRest } from '@/utils/texts'
import TopResult from '@/components/search/TopResult.vue'
import ResultsTracks from '@components/search/ResultsTracks.vue'
import ResultsAlbums from '@components/search/ResultsAlbums.vue'
import ResultsArtists from '@components/search/ResultsArtists.vue'
import ResultsPlaylists from '@components/search/ResultsPlaylists.vue'

import { formatSingleTrack, formatAlbums, formatArtist, formatPlaylist } from '@/data/search'
import { standardizeData } from '@/data/standardize'

export default {
	components: {
		TopResult,
		ResultsTracks,
		ResultsAlbums,
		ResultsArtists,
		ResultsPlaylists
	},
	props: {
		viewInfo: {
			type: Object,
			required: false
		}
	},
	computed: {
		thereAreResults() {
			let areInfosLoaded = !!this.viewInfo

			if (!areInfosLoaded) {
				return false
			}

			let noResultsPresent = this.viewInfo.ORDER.every(section =>
				section === 'TOP_RESULT' ? this.viewInfo[section].length === 0 : this.viewInfo[section].data.length === 0
			)

			return !noResultsPresent
		}
	},
	methods: {
		convertDuration,
		upperCaseFirstLowerCaseRest,
		standardizeData,
		formatSingleTrack,
		formatAlbums,
		formatArtist,
		formatPlaylist,
		checkSectionResults(section) {
			if (section === 'TOP_RESULT') {
				return !!this.viewInfo.TOP_RESULT[0]
			} else {
				return !!this.viewInfo[section].data[0]
			}
		}
	}
}
</script>
