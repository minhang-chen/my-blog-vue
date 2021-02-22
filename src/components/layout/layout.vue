<template>
	<div class="v-layput">
		<blg-top></blg-top>
		<blg-left></blg-left>
	</div>
</template>
<script>
import Top from "./top/top.vue";
import Left from "./left/left.vue";

export default {
	name: 'Layout',
	components: {
		'blg-top': Top,
		'blg-left': Left
	},
	data() {
		return {

		}
	}

}
</script>
<style lang="scss">

</style>
