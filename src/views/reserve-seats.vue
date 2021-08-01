<template>
	<main class="reserve-seats">
		<div class="screen"></div>

		<section class="seats">
			<!-- v-for all seats -->
			<seat-map />
		</section>

		<section class="map-reader"></section>
	</main>
</template>

<script>
import seatMap from '@/cmps/seats-map.vue'

export default {
	name: 'reserve-seats',
	computed: {
		seats() {
			this.$store.getters.currStadium?.seats
		}
	},
	created() {
		const { stadiumId } = this.$route.params
		this.$store.dispatch({ type: 'setCurrStadium', stadiumId })
	},
	components: {
		seatMap,
	},
}
</script>