<template>
	<view>
		<tophead></tophead>
		<topnav></topnav>
		<leftnav></leftnav>
		<bottom></bottom>
		
	</view>
</template> 
<script>
	import tophead from '../../components/header.vue';
	import topnav from '../../components/nav.vue';
	import leftnav from '../../components/left-nav.vue';
	import bottom from '../../components/bottom.vue';
	export default {
		components:{
			tophead,
			topnav,
			leftnav,
			bottom
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style> 
	.uni-page-head{
		display: none;
	}
</style>
