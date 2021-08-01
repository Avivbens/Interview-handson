import { seatService } from "../services/seat.service"

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
        setCurrStadium(state, { stadium }) {
            state.currStadium = stadium
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