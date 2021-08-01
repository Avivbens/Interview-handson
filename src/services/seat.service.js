import { storageService } from "./async-storage.service.js"

const SEAT_KEY = 'stadium'
var stadium = null

export const seatService = {
    getById,
    getSeatByPos,
    selectSeatByPos,
}

async function getById(stadiumId) {
    stadium = await storageService.getById(SEAT_KEY, stadiumId)
    stadium ??= _createStadium()
    return stadium
}

async function getSeatByPos(pos) {
    const { col, row } = pos
    return stadium[col][row]
}

async function selectSeatByPos(pos) {
    const seat = getSeatByPos(pos)

    if (seat.type === 'sold') return Promise.reject('Not available')
    if (seat.type === 'select') seat.type = 'available'
    else if (seat.type === 'available') seat.type = 'select'

    return await _saveStadium()
}

function _saveStadium() {
    return storageService.put(SEAT_KEY, stadium)
}

function _createStadium() {
    return [[]]
}