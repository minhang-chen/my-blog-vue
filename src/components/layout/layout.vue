<template>
	<div class="v-layput g-bg-white">
		<blg-top />
		<blg-left />
	</div>
</template>
<script>
import Top from "./top/top.vue";
import Left from "./left/left.vue";

export default {
	name: 'layout',
	components: {
		'blg-top': Top,
		'blg-left': Left
	},
	data() {
		return {

		};
	}

};
</script>
<style lang="scss">

</style>
