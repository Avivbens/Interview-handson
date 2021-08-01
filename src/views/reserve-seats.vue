<template>
	<main class="reserve-seats">
		<seat-map :seats="seats" />
		<div class="screen"></div>
		<section class="map-reader"></section>
	</main>
</template>

<script>
import seatMap from '@/cmps/seat-map.vue'

export default {
	name: 'reserve-seats',
	computed: {
		seats() {
			return this.$store.getters.currStadium?.seats ||
				[[{
					_id: '',
					pos: {
						row: 4,
						col: 0,
					},
					type: 'available',
					price: 55,
				},
				{
					_id: '',
					pos: {
						row: 4,
						col: 1,
					},
					type: 'available',
					price: 55,
				},
				],
				[{
					_id: '',
					pos: {
						row: 6,
						col: 2,
					},
					type: 'available',
					price: 60,
				},
				{
					_id: '',
					pos: {
						row: 6,
						col: 3,
					},
					type: 'available',
					price: 55,
				}]
				]
		}
	},
	created() {
		const stadiumId = this.$route.params.stadiumId || '101'
		this.$store.dispatch({ type: 'setCurrStadium', stadiumId })
	},
	components: {
		seatMap,
	},
}
</script>