<template>
	<view class="nav">
		<view class="mynav">
			<view class="nav-l">
				酒店住宿预订
			</view>
			<view class="nav-r">
				<navigator>{{nav1}}</navigator>
				<navigator>{{nav2}}</navigator>
				<navigator>{{nav3}}</navigator>
				<navigator>{{nav4}}</navigator>
				<navigator>{{nav5}}</navigator>
				<navigator>{{nav6}}</navigator>
				<navigator>{{nav7}}</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav1:'首页',
				nav2:'国内',
				nav3:'国际/港澳台',
				nav4:'民宿公寓',
				nav5:'钟点房',
				nav6:'青年旅社',
				nav7:'其它'
			};
		}
	}
</script>

<style> 
	.mynav{
		box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
		background: #fff;
		border: 0;
		margin-bottom: 0;
		z-index: 9; 
		padding: 0 44upx; 
		display: flex;	
	}
	.nav-l{
		height: 29upx;
		line-height: 28upx;
		color: #fff;
		width: 129.5upx; 
		background: rgba(11,139,255,.85);
		font-size: 9.5upx;
		padding-left: 9upx;
		float: left;
	}
	
	.nav-r{
		font-weight: bold;
		height: 29upx;
		line-height: 12upx;
		color: #333;
		/*width: 278.5upx;*/
		margin: 0!important; 
		font-size: 11upx;
		display: flex;
	}
	.nav-r navigator{
		font-weight: bold;
		padding: 9upx 11upx;
		/*width: 57.5upx;*/
		font-size: 9upx; 
	} 
	.nav-l:hover{
		cursor: pointer;
	}
	.nav-r:hover{
		cursor: pointer;
	}
	.nav-r navigator:nth-child(1){
		color: #00C8B4;
	}
</style>
