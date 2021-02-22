<template>
	<div class="v-pages">
		<LayOut></LayOut>
		<router-view></router-view>
	</div>
</template>
<script>
import LayOut from "../components/layout/layout.vue";

export default ({
	name: 'main',
	data() {
		return {
			
		}
	},
	components: {
		'LayOut': LayOut
	},
	methods:{
		loadData() {
			let a  = 1
		}
	}
})
</script>
<style lang="scss">
.v-pages {
	width: 80%;
	margin: auto;
	
}
</style>

