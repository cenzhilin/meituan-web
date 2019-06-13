<template>
	<view>
		<view class="top">
			<navigator href="#">切换地区</navigator>
			<view class="user" v-html="html"> 
			</view>
		</view>
		<view class="btn">
			<view class="input-left"> 
				<image class="logo" src="/static/logo.jpg"></image> 
			</view>
			<view class="input-right">
				<input type="text" class="form-control" placeholder=" ">
				<button class="search-btn"><navigator></navigator></button> 
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				html:'<navigator href="#" style="position: absolute;right: 11%">登录</navigator><navigator href="#" style="position: absolute;right: 8%;">注册</navigator>',
			};
		}
	}
</script>

<style>
	.top{ 
		position: fixed;
		top: 0;
		width: 100%;
		height: 22upx;
		font-size: 7.5upx;
		line-height: 22upx;
		font-weight: 400;
		color: #999;
		padding: 0;
		background: #F8F8F8;
		display: flex;
		z-index: 10;
	}
	.top navigator:nth-child(1){
		padding: 0 44upx;
	} 
	.btn{
		padding: 0 44upx;
		display: flex;
	}
	.logo{
		height: 34upx;
		width: 34.5upx;
		margin-top: 17upx;
	}
	.input-right{
		margin-left: 147upx;
		height: 22upx;
	}
	.form-control{
		border: #00C8B4 1px solid;
		font-size: 7.5upx;
		height: 25upx;
		width: 260upx;
		margin-top: 20upx;
		margin-bottom: 20upx;
		display: flex;
		min-height:0.5rem;
		line-height: 20upx;
	} 
	.search-btn{
		width: 48upx;
		position: absolute;
		left: 460upx;
		padding-top: 1px;
		top: 19.8upx;
		background: #00C8B4;
		border: #0b8bff;
		color: #FFF; 
		border-radius: 0; 
	}
	.search-btn navigator{
		background: #00C8B4 url(../static/search.png) 0 0/cover;
		height: 11upx;
		width: 11upx;
		margin: 7.5upx 10upx;
	}
</style>
