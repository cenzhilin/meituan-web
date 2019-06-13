<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')/*运行*/
		},
		onShow: function () {
			console.log('App Show')/*展示*/
		},
		onHide: function () {
			console.log('App Hide')/*隐藏*/
		}
	}
</script>

<style>
	/*每个页面公共css */
	.uni-page-head{
		display: none !important;
	}
	a{text-decoration:none; }
	ul,li{ padding:0;margin:0;list-style:none}
</style>
