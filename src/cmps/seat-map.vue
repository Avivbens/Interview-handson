<template>
	<section class="seat-map" v-if="seats">
		<button class="reserve-btn" v-if="isSeatSelect">Reserve</button>
		<section v-for="(row, rowIdx) in seats" :key="rowIdx">
			<article
				class="seat"
				:class="{
					empty: !seat,
					sold: seat && seat.type === 'sold',
					select: seat && seat.type === 'select'
				}"
				v-for="(seat, idx) in row"
				:key="idx"
				@click="selectSeat(rowIdx, idx)"
			></article>
		</section>
	</section>
</template>

<script>
export default {
	name: "seat-map",
	props: {
		seats: Array
	},
	data() {
		return {
			isSeatSelect: false
		}
	},
	methods: {
		async selectSeat(rowIdx, idx) {
			await this.$store.dispatch({ type: 'selectSeat', pos: { row: rowIdx, col: idx } })
			this.checkIsSeatSelect()
		},
		checkIsSeatSelect() {
			this.isSeatSelect = this.seats.some(row => {
				return row.some(seat => seat && seat.type === 'select')
			})
		},
	},
	watch: {
		seats: {
			immediate: true,
			deep: true,
			handler() {
				this.checkIsSeatSelect()
			}
		},
	},
}
</script>
