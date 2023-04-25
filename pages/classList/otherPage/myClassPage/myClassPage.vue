<template>
	<view>
		<view class="box1 box">
			<view class="title1 title">
				我的课程
			</view>
			<view class="card1 card" is-shadow="true" spacing="20rpx">
				<view class="content-all">
					<view class="content-1-1 content" @click="goToPage('myClass/studying')">
						<view class="icon-box icon-box-1-1">
							<uni-icons class="icon icon-1-1" custom-prefix="iconfont" type="icon-book" size="30"></uni-icons>
						</view>
						<view class="content-text">
							正在学习
						</view>
					</view>
					<view class="content-1-2 content" @click="goToPage('myClass/unStudy')">
						<view class="icon-box icon-box-1-2">
							<uni-icons class="icon icon-1-2" custom-prefix="iconfont" type="icon-unStudy" size="30"></uni-icons>
						</view>
						<view class="content-text">
							未学习
						</view>
					</view>
					<view class="content-1-3 content" @click="goToPage('myClass/finish')">
						<view class="icon-box icon-box-1-3">
							<uni-icons class="icon icon-1-3" custom-prefix="iconfont" type="icon-finish" size="30"></uni-icons>
						</view>
						<view class="content-text">
							已完成
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="classData.length" class="class-box">
			<view class="class-title">
				全部课程
			</view>
			<view v-for="(value,index) in classData"> 
				<view  class="class-card"  @click="goToDetail(value)">
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
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "Vue" 
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
			url:`/pages/classList/otherPage/myClassPage/${url}`
		})
	}
}
</script>

<style>
	.box {
		width: 90%;
		height: 300rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		margin-top:50rpx;
	}
	.card{
		margin: 0px;
		margin-top: 30rpx;
		width: 100%;
		height: 230rpx;
		border-radius: 10px;
		background-color: #ffffff;
		box-shadow: 0 0 10px #e9e9eb;
		
	}
	.title{
		font-size: 36rpx;
		
	}
	.content-all{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}
	.content{
		/* flex: 1 1 33.3%; */
		text-align: center;
	}
	.content-1-2{
		
	}
	.content-1-3{
		
	}
	.content-text{
		margin-top: 15rpx;
		font-size: 25rpx;
		text-align: center;
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
	.icon-box-2-1{
		background-color: #67C23A;
	}
	.icon-box-2-2{
		background-color: #F56C6C;
	}
	.icon-box-3-2{
		background-color: #F56C6C;
	}
	.icon-box-3-3{
		background-color: #E6A23C;
	}
	.icon{
		position: relative;
		top:25%;
		left:3%;
		color: #ffffff;
	}
	.class-box{
		margin-top: 50rpx;
	}
	.class-title{
		font-size: 42rpx;
	}
	.class-card{
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
</style>