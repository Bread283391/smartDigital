<template>
	<view class="index">
		<view class="top">
			<view class="carousel-box">
				<swiper class="carousel" autoplay="true" interval="5000" circular="true" duration="1000" indicator-dots="true">
					<swiper-item v-for="value in carousel">
						<image :src="value.imagePath" mode="aspectFill" class="carousel-image" ></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view v-if="messageData.length" class="content-box">
			<view class="content-title">
				每日资讯
			</view>
			<view v-for="(value,index) in messageData"> 
				<view  class="card">
					<view class="image-box">
						<image :src="value.imagePath" alt="" class="image" mode="aspectFill"></image>
					</view>
					<view class="text-box">
						<view class="text-line1 text-line">
							<span class="text-class-name">{{value.messageTitle}}</span>
						</view>
						<!-- <view class="text-line2 text-line">
							<span class="text-classes">{{value.classes}}</span>
						</view>
						<view class="text-line3 text-line">
							讲师：<span class="text-teacher">{{value.teacher}}</span>
						</view> -->
						<view class="text-line4 text-line">
							<span class="text-time">{{value.messageTime}}</span>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
// 轮播图
const carousel=ref([
	{
		id:'001',
		imagePath:'http://150.158.87.78:8888/down/HQvpWY9tdw0w.png'
	},
	{
		id:'001',
		imagePath:'http://150.158.87.78:8888/down/nthgLIqts8WD.png'
	},
	{
		id:'001',
		imagePath:'http://150.158.87.78:8888/down/LEVXqaMZ6eGz.png'
	}
]);


const messageData=ref([
	{
		messageTitle:'谷歌急投20亿押注ChatGPT「最强竞品」，GPT-3核心成员出走打造，多方出击抗衡微软',
		messageContent:'',
		imagePath:'http://150.158.87.78:8888/down/adfWegopdVHC.png',
		publisher:'',
		messageTime:'2022-05-25'
	},
	{
		messageTitle:'Twitter之乱：马斯克只相信马斯克',
		messageContent:'',
		imagePath:'http://150.158.87.78:8888/down/nRp0W422yTVU.png',
		publisher:'',
		messageTime:'2022-06-28'
	},
	{
		messageTitle:'TikTok反扑腾讯',
		messageContent:'',
		imagePath:'http://150.158.87.78:8888/down/cRn8BZ7ADs44.png',
		publisher:'',
		messageTime:'2022-07-13'
	},
	{
		messageTitle:'阿里巴巴股价被低估50%？',
		messageContent:'',
		imagePath:'http://150.158.87.78:8888/down/zas2RNjU0m8C.png',
		publisher:'',
		messageTime:'2022-09-22'
	},
	{
		messageTitle:'科技金融“跨界”来袭，城市产业从中如何破局？',
		messageContent:'',
		imagePath:'http://150.158.87.78:8888/down/1AheDcQWk5mb.png',
		publisher:'',
		messageTime:'2022-11-21'
	},
	{
		messageTitle:'市场日报 | 遭股东减持，CRO大白马股价大跌！保险、银行股飙升，CPO概念再爆发！',
		messageContent:'',
		imagePath:'http://150.158.87.78:8888/down/1CHnbcYYeRnN.png',
		publisher:'',
		messageTime:'2023-01-06'
	},
])
</script>

<style>
	.index{
		
	}
	.top{
		width: 100%;
		height: 360rpx;
	}
	.carousel-box{
		margin-top: 30rpx;
		width: 90%;
		height: 100%;
		position: relative;
		left:50%;
		transform: translateX(-50%);
		border-radius: 10rpx;
		border: 1rpx black solid;
		
	}
	.carousel{
		width: 100%;
		height: 100%;
	}
	.carousel-image{
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}
	.content-box{
		margin-top: 50rpx;
	}
	.content-title{
		font-size: 42rpx;
	}
	.card{
		width: 95%;
		height: 200rpx;
		margin-top: 10rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		background-color: #ffffff;
		border-radius: 10px;
		box-shadow: 0 0 10px #e9e9eb;
		padding-right: 20rpx;
		box-sizing: border-box;
		
	}
	.image-box .image{
		width: 320rpx;
		height: 200rpx;
		border-radius: 10px;
		float: left;
		border: 0.5px #fff solid;
	}
	.text-box{
		float: left;
		height: 100%;
		width: 350rpx;
		border: 0.5px #fff solid;
		margin-left: 20rpx;
		white-space: normal;
	}
	 .text-line{
		 margin-top: 10rpx;
	 }
	.text-line1{
		color: #303133;
	}
	.text-class-name{
		font-size: 24rpx;
		font-weight: bold;
		
	}
	/* .text-line2{
		
	}
	.text-classes{
		font-size: 24rpx;
		color: #909399;
	}
	.text-line3{
		font-size: 24rpx;
		color: #909399;
	}
	.text-teacher{
		font-size: 24rpx;
		color: #409EFF;
	} */
	.text-line4{
		position: absolute;
		left: calc(100%);
		top: calc(100%);
		transform: translate(-120%,-150%);
		white-space: nowrap;
		overflow: hidden;
		
		
	}
	.text-time{
		font-size: 20rpx;
		color: #909399;
	}
</style>