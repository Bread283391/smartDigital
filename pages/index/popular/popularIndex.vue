<template>
	<view>
		<swiper class="swiper"
			indicator-dots="true" 
			autoplay="true" 
			interval="3000" 
			circular="true" 
			easeInCubic="easeInOutCubic"
			indicator-color="#ffffff"
			indicator-active-color="#409eff"
		>
			<swiper-item v-for="value in swiperData">
				<image class="swiper-image" :src="value.imagePath" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="box1 box">
			<view class="card1 card-icon" is-shadow="true" spacing="20rpx">
				<view class="content-all">
					<view class="content-1-1 content" @click="goToPage('message')">
						<view class="icon-box  icon-box-1-1">
							<uni-icons class="icon icon-1-1" custom-prefix="iconfont" type="icon-message" size="30"></uni-icons>
						</view>
						<view class="content-text">
							每日资讯
						</view>
					</view>
					<view class="content-1-2 content" @click="goToPage('resourceShare')">
						<view class="icon-box  icon-box-1-2">
							<uni-icons class="icon icon-1-2" custom-prefix="iconfont" type="icon-messageShare" size="30"></uni-icons>
						</view>
						<view class="content-text">
							资源分享
						</view>
					</view>
					<view class="content-1-3 content" @click="goToPage('sign-in')">
						<view class="icon-box icon-box-1-3">
							<uni-icons class="icon icon-1-3" custom-prefix="iconfont" type="icon-qiandao" size="30"></uni-icons>
						</view>
						<view class="content-text">
							学习打卡
						</view>
					</view>
					<view class="content-1-4 content" @click="goToPage('rethink')">
						<view class="icon-box  icon-box-1-4">
							<uni-icons class="icon icon-1-4" custom-prefix="iconfont" type="icon-ceping" size="30"></uni-icons>
						</view>
						<view class="content-text">
							自我测评
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="message-box">
			<view class="message-title">
				-重要通知-
			</view>
			<view class="message-content">
				1、通知内容通知内容通知内容通知内容通知内容通知内<br>
				2、容通知内容通知内容通知内容
			</view>
		</view>
		<view v-if="classData.length" class="class-box">
			<view class="class-title">
				课程包
			</view>
			<view v-for="(value,index) in classData"> 
				<view  class="card"  @click="goToDetail(value)">
					<view class="image-box">
						<image :src="value.imagePath" alt="" class="image" mode="aspectFill"></image>
					</view>
					<view class="text-box">
						<view class="text-line1 text-line">
							<span class="text-class-name">{{value.className}}</span>
						</view>
						<view class="text-line2 text-line">
							<span class="text-classes">{{value.classes}}</span>
						</view>
						<view class="text-line3 text-line">
							讲师：<span class="text-teacher">{{value.teacher}}</span>
						</view>
						<view class="text-line4 text-line">
							<span class="text-time">{{value.startTime}}~{{value.endTime}}</span>
						</view>
						<view class="button-box" v-if="false">
							<button class="button button1" @click="goToDetail(value)" v-if="value.isJoin==='0'">报名学习</button>
							<button class="button button2" @click="goToDetail(value)" v-else-if="value.isJoin==='1'&&value.status==='1'">开始学习</button>
							<button class="button button3" @click="goToDetail(value)" v-else-if="value.isJoin==='1'&&value.status==='0'">未开始</button>
							<button class="button button4" @click="goToDetail(value)" v-else-if="value.isJoin==='1'&&value.status==='2'">已结束</button>
						</view>
					</view>
					<span class="price" v-if="value.price!=='0'">￥{{ value.price }}</span>
					<span class="price free" v-else>公开课</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue";

// 轮播图
const swiperData=ref([
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
])

const classData=ref([
	{
		id:'1',
		classId:'12',
		className:'C语言',
		teacherId:'003',
		teacher:'高启强',
		classes:'计算机类',
		imagePath:'http://150.158.87.78:8888/down/tc4Y40JDiNnQ.png',
		startTime:'2023-01-08',
		endTime:'2023-07-08',
		price:'0',
		isJoin:'0',// 0未报名，1已报名
		status:'1' ,// 0未开始，1进行中，2已结束
		flag:'1' // 0课程上线，1课程下线
	},
	{
		id:'1',
		classId:'12',
		className:'C语言',
		teacherId:'003',
		teacher:'高启强',
		classes:'计算机类',
		imagePath:'/static/images/other/Keqing.jpg',
		startTime:'2023-01-08',
		endTime:'2023-07-08',
		price:'39',
		isJoin:'1',// 0未报名，1已报名
		status:'0' ,// 0未开始，1进行中，2已结束
		flag:'1' // 0课程上线，1课程下线
	},
	{
		id:'1',
		classId:'12',
		className:'C语言',
		teacherId:'003',
		teacher:'高启强',
		classes:'计算机类',
		imagePath:'/static/images/other/Keqing.jpg',
		startTime:'2023-01-08',
		endTime:'2023-07-08',
		price:'39',
		price:'39',
		isJoin:'1',// 0未报名，1已报名
		status:'2' ,// 0未开始，1进行中，2已结束
		flag:'1' // 0课程上线，1课程下线
	},
	{
		id:'1',
		classId:'12',
		className:'C语言',
		teacherId:'003',
		teacher:'高启强',
		classes:'计算机类',
		imagePath:'/static/images/other/Keqing.jpg',
		startTime:'2023-01-08',
		endTime:'2023-07-08',
		price:'39',
		isJoin:'1',// 0未报名，1已报名
		status:'1' ,// 0未开始，1进行中，2已结束
		flag:'1' // 0课程上线，1课程下线
	},
	{
		id:'1',
		classId:'12',
		className:'C语言',
		teacherId:'003',
		teacher:'高启强',
		classes:'计算机类',
		imagePath:'/static/images/other/Keqing.jpg',
		startTime:'2023-01-08',
		endTime:'2023-07-08',
		price:'39',
		isJoin:'0',// 0未报名，1已报名
		status:'1' ,// 0未开始，1进行中，2已结束
		flag:'1' // 0课程上线，1课程下线
	}
])
const goToDetail=(value)=>{
	wx.navigateTo({
		url:`/pages/detail`
	});
	wx.setStorageSync('classId',value.classId)
	wx.setStorageSync('teacherId',value.teacherId)
	if(value.price === '0'){
		wx.setStorageSync('isCanStudy',true)
	}else{
		wx.setStorageSync('isCanStudy',false)
	}
}
const goToPage = (url) => {
	if(url!==''){
		uni.navigateTo({
			url:`/pages/index/popular/otherPage/${url}`
		})
	}
}
</script>

<style>
.class-box{
	margin-top: 50rpx;
}
.class-title{
	font-size: 42rpx;
}
.card{
	width: 95%;
	height: 200rpx;
	margin-top: 10rpx;
	overflow: hidden;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 0 10px #e9e9eb;
	white-space: nowrap;
	text-overflow: ellipsis;
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
	border: 0.5px #fff solid;
	margin-left: 20rpx;
	overflow: hidden;
	
}
 .text-line{
	 margin-top: 10rpx;
 }
.text-line1{
	color: #303133;
}
.price{
	position: absolute;
	color: #F56C6C;
	font-size: 36rpx;
	font-weight: bold;
	left: 85%;
	top: 3%;
}
.free{
	left: 85%;
	font-size: 30rpx;
}
.text-class-name{
	font-size: 30rpx;
	font-weight:bold;
}
.text-line2{
	
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
}
.text-line4{
	
}
.text-time{
	font-size: 20rpx;
	color: #909399;
}
.button-box{
	margin-top: 10rpx;
}
.button{
	width: 200rpx;
	height: ;
	background-color: #409EFF;
	color: #ffffff;
	font-size: 26rpx;
}
.button:active{
	background-color: #337ecc;
}
.button2{
	background-color: #67C23A;
}

.button3{
	background-color: #c8c9cc;
	color:#303133;
}
.button4{
	background-color: #c8c9cc;
	color:#303133;
}
.swiper{
	width: 95%;
	height: 360rpx;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 10rpx;
	box-shadow: 0 0 10px  #dedfe0;
	border: 1px #e9e9eb solid;
	
}
.swiper-image{
	width: 100%;
	height: 100%;
}
.message-box{
	width: 95%;
	margin-top: 50rpx;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: 0 0 10px  #e9e9eb;
}
.message-title{
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color: #ffffff;
	background-color: #409eff;
}
.message-content{
	background-color: #d9ecff;
	height: auto;
	box-sizing: border-box;
	padding: 30rpx;
	align-items: center;
	width: 100%;
	min-height: 200rpx;
}
.box {
	width: 95%;
	height: 200rpx;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	margin-top:10rpx;
}
.card-icon{
	margin: 0px;
	width: 100%;
	height: 100%;
	border-radius: 10px;
}
.content-all{
	margin-top: 10rpx;
	width: 90%;
	height: 50%;
	position: relative;
	left:50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.content{
	float: left;
}
.content-1-2{
	position: absolute;
	left: 35%;
	transform: translate(-45%);
}
.content-1-3{
	position: absolute;
	left: 62%;
	transform: translate(-45%);
}
.content-1-4{
	float: right;
}
.icon-box{
	width: 100rpx;
	height: 100rpx;
	background-color: #409EFF;
	border-radius: 50%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
}
.icon-box-1-2{
	background-color: #E6A23C;
}
.icon-box-1-3{
	background-color: #67C23A;
}
.icon-box-1-4{
	background-color: #F56C6C;
}
.icon{
	position: relative;
	top:25%;
	left:24%;
	color: #ffffff;

}
.content-text{
	margin-top: 15rpx;
	font-size: 25rpx;
	text-align: center;
}
</style>