<template>
	<view v-if="classData.length" class="class-box">
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
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from "vue";
	
	const classData=ref([
		{
			id:'1',
			classId:'1',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			imagePath:'/static/images/other/Keqing.jpg',
			startTime:'2023-01-08',
			endTime:'2023-07-08',
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
			isJoin:'1',// 0未报名，1已报名
			status:'0' ,// 0未开始，1进行中，2已结束
			flag:'1' // 0课程上线，1课程下线
		},
		{
			id:'1',
			classId:'123',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			imagePath:'/static/images/other/Keqing.jpg',
			startTime:'2023-01-08',
			endTime:'2023-07-08',
			isJoin:'1',// 0未报名，1已报名
			status:'2' ,// 0未开始，1进行中，2已结束
			flag:'1' // 0课程上线，1课程下线
		},
		{
			id:'1',
			classId:'1234',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			imagePath:'/static/images/other/Keqing.jpg',
			startTime:'2023-01-08',
			endTime:'2023-07-08',
			isJoin:'1',// 0未报名，1已报名
			status:'1' ,// 0未开始，1进行中，2已结束
			flag:'1' // 0课程上线，1课程下线
		},
		{
			id:'1',
			classId:'12345',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			imagePath:'/static/images/other/Keqing.jpg',
			startTime:'2023-01-08',
			endTime:'2023-07-08',
			isJoin:'0',// 0未报名，1已报名
			status:'1' ,// 0未开始，1进行中，2已结束
			flag:'1' // 0课程上线，1课程下线
		}
	])
	const goToDetail=(value)=>{
		wx.navigateTo({
			url:`/pages/detail`
		});
		wx.setStorageSync("classId",value.classId);
		wx.setStorageSync("teacherId",value.teacherId);
	}
</script>

<style>
	.class-box{
		margin-top: 30rpx;
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
</style>