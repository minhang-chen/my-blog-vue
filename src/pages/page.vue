<template>
	<div class="v-pages">
		<LayOut />
		<router-view />
	</div>
</template>
<script>
import LayOut from "../components/layout/layout.vue";

export default ({
	name: 'main',
	components: {
		'LayOut': LayOut
	},
	data() {
		return {
			
		};
	},
	methods: {
		loadData() {
			let a = 1;
		}
	}
});
</script>
<style lang="scss">
.v-pages {
	min-height: 100vh;
	width: 80%;
	margin: auto;
}
</style>

