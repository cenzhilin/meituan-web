<template>
	<view>
		<view class="nav-left">
			<div class="fixed-navbar indexPage" id="fixed-navbar">
				<ul>
					<li v-for="lii in lii"><a href="#">{{lii}}</a><image src="/static/next.png"></image></li>
				</ul>
			</div>
		</view> 
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing"> 
				<!-- 首页轮播 -->
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#00529c50" indicator-active-color="#fff0f5">
			
			  <swiper-item  v-for="item in  img" :key="img.id">
				 <font size="6"> {{item.title}}</font>
				  	 
			       <view class="swiper-item uni-bg-red">
					   <navigator href="#" style="position: absolute;right: 11%">{{item.title}}</navigator>
					   <image class="sw-img" :src="item.src" ></image>
				   </view>
			 	
			  </swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		</center>
		
	</view>
</template>

<script>
	export default {
	data() {
		return {
			lii:["豪华高端","品质高端","经济连锁",'精品酒店','景点门票','商务酒店','情侣酒店','多住优惠','温泉酒店','行程规划'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			img:[{
				id:1,
				src:"../../static/1.jpg",
				"title":""
		 
			},
			{
				id:2,
				src:"../../static/2.jpg",
				"title":""
			},
			{
				id:3,
				src:"../../static/3.jpg",
				"title":""
			},
			{
				id:4,
				src:"../../static/4.jpg",
				"title":""
			},
			{
				id:5,
				src:"../../static/5.jpg",
				"title":""
			}
			]
		};
		},methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
	.nav-left{ 
		width: 138upx;
		height: 310upx;
		position: relative; 
		left: 44upx;
		background: #00C8B4;    
		background: -webkit-linear-gradient(-90deg, #00C8B4 2%, #00C8B4 100%);
		background: -o-linear-gradient(-90deg, #00C8B4 2%, #00C8B4 100%);
		background: -moz-linear-gradient(-90deg, #00C8B4 2%, #00C8B4 100%);
	} 
	.fixed-navbar ul li:hover{
		background: #F5FFFA;
	}
	.fixed-navbar ul li>a{
		color: #FFB6C1;
		display: block;
		height: 17.5upx;
		line-height: 17.5upx;
		padding: 0 9upx;
		font-size: 8upx;  
	}  
	.fixed-navbar ul li{
		height: 17.5upx;
		}
	span{
		size: 10;
	}
	.sw-img{
		width: 600upx;
		height: 300upx;
	}
	img{
		width: 600upx;
		height: 300upx;
	}
swiper{
		height: 600upx;
		width: 522upx;
		position: absolute;
		left: 192.5upx;
		top: 99.5upx;
	}
	/* swiper swiper-item {
		background: url(../static/lunbo/index.jpg) 0 0/cover;
	}
	swiper swiper-item .uni-bg-green{
		background: url(../static/lunbo/2.jpg) 0 0/cover;
	}
	swiper swiper-item .uni-bg-blue{
		background: url(../static/lunbo/3.jpg) 0 0/cover;
	} */
	uni-swiper .uni-swiper-dot-active {
		background-color: #00C8B4;
	}
	.fixed-navbar ul li>a{
		color: #fff;
		display: block;
		height: 17.5upx;
		line-height: 17.5upx;
		padding: 0 9upx;
		font-size: 8upx;  
	}  
	.fixed-navbar ul li{
		height: 17.5upx;
	}
	.fixed-navbar image{
		height: 9upx;
		width: 9upx;
		position: relative;
		left: 128.5upx;
		bottom: 44upx;
	}
</style>