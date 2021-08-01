import { seatService } from "../services/stadium.service"

export default {
    strict: true,
    state: {
        currStadium: null
    },
    getters: {
        currStadium(state) {
            return JSON.parse(JSON.stringify(state.currStadium))
        },
    },
    mutations: {
        setCurrStadium(state, { stadium }) {
            state.currStadium = JSON.parse(JSON.stringify(stadium))
        },
    },
    actions: {
        async setCurrStadium({ commit }, { stadiumId }) {
            const stadium = await seatService.getById(stadiumId)
            commit({ type: 'setCurrStadium', stadium })
        },

        async selectSeat({ commit }, { pos }) {
            try {
                const stadium = await seatService.selectSeatByPos(pos)
                commit({ type: 'setCurrStadium', stadium })
            } catch (error) {
                console.log('Unable to select seat!')
            }
        },
    },
}