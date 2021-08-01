<template>
	<section class="seat-map" v-if="seats">
		<article
			v-for="(seat, idx) in seats"
			class="seat"
			:seat="seat"
			:key="idx"
		></article>
	</section>
</template>

<script>
export default {
	name: "seat-map",
	props: {
		seats: Array
	},
	created() {
		console.log( 'SEATS >>>>' , this.seats);
	}
}
</script>
