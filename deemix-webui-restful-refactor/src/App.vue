<template>
	<div id="app">
		<div class="app-container">
			<TheSidebar />

			<div class="content-container">
				<TheSearchBar />
				<TheContent />
			</div>

			<TheDownloadBar />
		</div>

		<BaseLoadingPlaceholder
			text="Connecting to local server..."
			:hidden="isSocketConnected"
			additionalClasses="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50"
		/>

		<TheTrackPreview />
		<TheQualityModal />
		<!-- <ConfirmModal /> -->

		<TheContextMenu />
	</div>
</template>

<style>
.app-container {
	display: flex;
}

.content-container {
	width: 100%;
	display: flex;
	flex-direction: column;
}
</style>

<script>
import { socket } from '@/utils/socket'

import BaseLoadingPlaceholder from '@components/globals/BaseLoadingPlaceholder.vue'
import TheContextMenu from '@components/globals/TheContextMenu.vue'
import TheTrackPreview from '@components/globals/TheTrackPreview.vue'
import TheQualityModal from '@components/globals/TheQualityModal.vue'
// import ConfirmModal from '@components/globals/ConfirmModal.vue'

import TheSidebar from '@components/TheSidebar.vue'
import TheSearchBar from '@components/TheSearchBar.vue'
import TheContent from '@components/TheContent.vue'
import TheDownloadBar from '@components/downloads/TheDownloadBar.vue'

export default {
	data() {
		return {
			isSocketConnected: false
		}
	},
	components: {
		TheSidebar,
		TheSearchBar,
		TheDownloadBar,
		TheTrackPreview,
		TheQualityModal,
		BaseLoadingPlaceholder,
		TheContextMenu,
		TheContent
		// ConfirmModal
	},
	mounted() {
		socket.addEventListener('open', (event) => {
			console.log("Connected to WebSocket")
			this.isSocketConnected = true
		})
	}
}
</script>
