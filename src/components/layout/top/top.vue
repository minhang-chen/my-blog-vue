<template>
	<div class="c-tabs g-bb">
		<div class="_item">
			<span 
				class="g-opration" 
				:class="{'_selected': true}"
			>文档</span>
		</div>
		<div class="_item">
			<span class="g-opration">随笔</span>
		</div>
		<div class="_item">
			<span class="g-opration">分享</span>
		</div>
		<div class="_item">
			<span class="g-opration" @click="handleToMine">我的</span>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
	   return {

	   };
	},

	computed: {},

	methods: {
		handleToMine() {
			this.$router.push('/mine');
		}
	}
};
</script>
<style lang='scss'>
.c-tabs {
	display: flex;
	width: 100%;
	height: 50px;
	justify-content: center;
	align-items: center;
	._item {
		flex: 1;
		text-align: center
	}
	._selected {
		border-bottom: 2px solid #000;
	}
}
</style>