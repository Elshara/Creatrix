<template>
	<section>
		<BaseLoadingPlaceholder v-if="isLoading" />

		<template v-else>
			<div v-if="viewInfo.data.length === 0">
				<h1>{{ $t('search.noResultsAlbum') }}</h1>
			</div>

			<div class="release-grid" v-else>
				<div class="w-40 release" v-for="release in viewInfo.data.slice(0, itemsToShow)" :key="release.albumID">
					<router-link tag="div" class="cursor-pointer" :to="{ name: 'Album', params: { id: release.albumID } }">
						<CoverContainer
							is-rounded
							:cover="release.albumCoverMedium"
							:link="release.albumLink"
							@click.stop="$emit('add-to-queue', $event)"
						/>

						<span class="primary-text">
							<i
								v-if="release.isAlbumExplicit"
								class="material-icons title-icon"
								style="font-size: 1.0625rem !important"
							>
								explicit
							</i>
							{{ release.albumTitle }}
						</span>
					</router-link>

					<p class="secondary-text">
						{{
							$t('globals.by', { artist: release.artistName }) +
							' - ' +
							$tc('globals.listTabs.trackN', release.albumTracks)
						}}
					</p>
				</div>
			</div>
		</template>
	</section>
</template>

<script>
import BaseLoadingPlaceholder from '@components/globals/BaseLoadingPlaceholder.vue'
import CoverContainer from '@components/globals/CoverContainer.vue'

export default {
	components: {
		BaseLoadingPlaceholder,
		CoverContainer
	},
	props: {
		viewInfo: {
			validator: function (value) {
				let isNull = Object.is(value, null)
				let isObject = Object.prototype.toString.call(value) === '[object Object]'

				return isNull || isObject
			},
			required: true
		},
		itemsToShow: {
			type: Number,
			required: false
		},
		wantHeaders: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	computed: {
		isLoading() {
			return !this.viewInfo || !this.viewInfo.hasLoaded
		}
	}
}
</script>
