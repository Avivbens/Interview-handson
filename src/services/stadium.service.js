import { theater_01 } from "@/data/seat-map.js"
import { storageService } from "./async-storage.service.js"

const SEAT_KEY = 'stadium'
var stadium = null

export const seatService = {
    getById,
    getSeatByPos,
    selectSeatByPos,
}

async function getById(stadiumId) {
    stadium = await storageService.get(SEAT_KEY, stadiumId)
    stadium ??= _createStadium()
    return stadium
}

function getSeatByPos(pos) {
    const { col, row } = pos
    return stadium.seats[row][col]
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
    return theater_01 || [[]]
}