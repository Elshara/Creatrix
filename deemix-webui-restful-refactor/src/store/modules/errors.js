const state = () => ({
	artist: '',
	bitrate: '',
	cover: '',
	downloaded: 0,
	errors: [],
	failed: 0,
	id: '',
	progress: 0,
	silent: true,
	size: 0,
	title: '',
	type: '',
	uuid: ''
})

const actions = {
	setErrors({ commit }, payload) {
		commit('SET_ERRORS', payload)
	}
}

const getters = {
	getErrors: state => state
}

const mutations = {
	SET_ERRORS(state, payload) {
		// The payload has useless data for the GUI, so only the needed data is saved in the store
		for (const errorName in state) {
			if (state.hasOwnProperty(errorName)) {
				const error = payload[errorName]

				state[errorName] = error
			}
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
