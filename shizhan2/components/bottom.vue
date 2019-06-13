<template>
	<div class="main">

    <div class="ad">

        <ul>
            <p>今日最热门优惠</p>
            <li><img src="/static/a1.jpg" alt="">
                <div>凭住宿优惠更多费用</div>
                <div>优惠就是这么赞</div>
                <a href="#">查看优惠</a></li>
            <li><img src="../static/a2.jpg" alt="">
                <div>展开精彩大冒险</div>
                <div>住宿优惠,让你看更多</div>
                <a href="#">立即预定</a></li>
            <li><img src="../static/a3.jpg" alt="">
                <div>下载APP</div>
                <div>安装我们的APP,随时随地订酒店</div>
                <a href="#">了解更多优惠</a></li>
            <li><img src="../static/a4.jpg" alt="">
                <div>日本住宿5天快闪优惠</div>
                <div>7折起</div>
                <a href="#">立即预定</a></li>
            <li><img src="../static/a5.jpg" alt="">
                <div>夏日度假正当时</div>
                <div>6折起</div>
                <a href="#">立即预定</a></li>
            <li><img src="../static/a6.jpg" alt="">
                <div>使用银联信用卡付款可享专属85折优惠</div>
                <div>别忘带你的银联卡</div>
                <a href="#">立即预定</a></li>


        </ul>
    </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	    .main{
            width: 100%;
            min-width: 960px;
            max-width: 1920px;
            background-color: #FFFFFF;
            overflow: auto;

        }
p{
	font-size: 20px;
}
        .ad{
            width: 1200px;
            margin: 10px auto;
            line-height: 30px;
            font-size: 10px;
        }
        .ad ul{
            margin: 10px;
        }
        .ad ul li {
            list-style: none;
            width: 300px;
            height: 300px;
            float: left;
            margin: 10px;
            padding: 11px;
            border: 1px solid rgba(0, 0, 0, 0.3);
        }
        .ad ul li img{
            width: 300px;
            height: 200px;
        }
        .ad ul li:hover{
            box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.3);
        }
</style>