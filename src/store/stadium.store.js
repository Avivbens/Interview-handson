export default {
    strict: true,
    state: {
        currStadium: null
    },
    getters: {
        currStadium(state) {
            return state.currStadium
        }
    },
    mutations: {
        setCurrStadium(state, { stadiumId }) {
            // TODO set stadium
        }
    },
    actions: {
        setCurrStadium({ commit }, payload) {
            // TODO get from service by ID
            commit(payload)
        }
    },
}