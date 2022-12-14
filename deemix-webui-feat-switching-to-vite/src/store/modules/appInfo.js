/**
 * @typedef		{object}	AppInfo
 * @property	{string}	currentCommit
 * @property	{string}	latestCommit
 * @property	{boolean}	updateAvailable
 * @property	{string}	deemixVersion
 * @property	{number}	previewVolume
 * @property	{boolean}	hasSlimDownloads
 * @property	{boolean}	hasSlimSidebar
 */

import { getInitialPreviewVolume, checkInitialSlimDownloads, checkInitialSlimSidebar } from '@/data/settings'

/**
 * @returns	{AppInfo}
 */
const state = () => ({
	currentCommit: null,
	latestCommit: null,
	updateAvailable: false,
	deemixVersion: null,
	previewVolume: getInitialPreviewVolume(),
	hasSlimDownloads: checkInitialSlimDownloads(),
	hasSlimSidebar: checkInitialSlimSidebar()
})

const actions = {
	/**
	 * @param {any}			action
	 * @param {AppInfo}	payload
	 */
	setAppInfo({ commit }, payload) {
		commit('SET_CURRENT_COMMIT', payload.currentCommit)
		commit('SET_LATEST_COMMIT', payload.latestCommit)
		commit('SET_UPDATE_AVAILABLE', payload.updateAvailable)
		commit('SET_DEEMIX_VERSION', payload.deemixVersion)
	},
	/**
	 * @param {any}												action
	 * @param {AppInfo['previewVolume']}	payload
	 */
	setPreviewVolume({ commit }, payload) {
		commit('SET_PREVIEW_VOLUME', payload)
		localStorage.setItem('previewVolume', payload.toString())
	},
	/**
	 * @param {any}													action
	 * @param {AppInfo['hasSlimDownloads']}	payload
	 */
	setSlimDownloads({ commit }, payload) {
		commit('SET_SLIM_DOWNLOADS', payload)
		localStorage.setItem('slimDownloads', payload.toString())
	},
	/**
	 * @param {any}												action
	 * @param {AppInfo['hasSlimSidebar']}	payload
	 */
	setSlimSidebar({ commit }, payload) {
		commit('SET_SLIM_SIDEBAR', payload)
		localStorage.setItem('slimSidebar', payload.toString())

		// Moves all toast messages when the option changes
		Array.from(document.getElementsByClassName('toastify')).forEach(toast => {
			toast.style.transform = `translate(${payload ? '3rem' : '14rem'}, 0)`
		})
	}
}

const getters = {
	/**
	 * @param		{AppInfo}	state
	 * @returns	{AppInfo}
	 */
	getAppInfo: state => state,
	/**
	 * @param		{AppInfo}										state
	 * @returns	{AppInfo['previewVolume']}
	 */
	getPreviewVolume: state => state.previewVolume,
	/**
	 * @param		{AppInfo}											state
	 * @returns	{AppInfo['hasSlimDownloads']}
	 */
	getSlimDownloads: state => state.hasSlimDownloads,
	/**
	 * @param		{AppInfo}										state
	 * @returns	{AppInfo['hasSlimSidebar']}
	 */
	getSlimSidebar: state => state.hasSlimSidebar
}

const mutations = {
	/**
	 * @param {AppInfo} 									state
	 * @param {AppInfo['currentCommit']}	payload
	 */
	SET_CURRENT_COMMIT(state, payload) {
		state.currentCommit = payload
	},
	/**
	 * @param {AppInfo} 								state
	 * @param {AppInfo['latestCommit']}	payload
	 */
	SET_LATEST_COMMIT(state, payload) {
		state.latestCommit = payload
	},
	/**
	 * @param {AppInfo} 										state
	 * @param {AppInfo['updateAvailable']}	payload
	 */
	SET_UPDATE_AVAILABLE(state, payload) {
		state.updateAvailable = payload
	},
	/**
	 * @param {AppInfo} 									state
	 * @param {AppInfo['deemixVersion']}	payload
	 */
	SET_DEEMIX_VERSION(state, payload) {
		state.deemixVersion = payload
	},
	/**
	 * @param {AppInfo} 									state
	 * @param {AppInfo['previewVolume']}	payload
	 */
	SET_PREVIEW_VOLUME(state, payload) {
		state.previewVolume = payload
	},
	/**
	 * @param {AppInfo} 										state
	 * @param {AppInfo['hasSlimDownloads']}	payload
	 */
	SET_SLIM_DOWNLOADS(state, payload) {
		state.hasSlimDownloads = payload
	},
	/**
	 * @param {AppInfo} 									state
	 * @param {AppInfo['hasSlimSidebar']}	payload
	 */
	SET_SLIM_SIDEBAR(state, payload) {
		state.hasSlimSidebar = payload
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
