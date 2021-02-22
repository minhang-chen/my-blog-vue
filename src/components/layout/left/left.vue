<template>
	<div class="c-left">
		<ul class="_box">
			<li>段落1</li>
			<li>段落2</li>
			<li>段落3</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {

		};
	},

	components: {},

	computed: {},

	methods: {}
}
</script>
<style lang='scss'>
.c-left {
	position: fixed;
	top: 80px;
	left: 10%;
	._box {
		box-shadow: 0 1px 2px 0 rgba($color: #000000, $alpha: .5);
		padding: 10px;
		min-width: 150px;
	}
}
</style>