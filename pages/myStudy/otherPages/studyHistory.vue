<template>
	<view class="content">
		<view  v-for="(value,index) in classData">
			<view class="card-box" v-if="classData.length && value.isJoin==='1' && value.status==='1'">
				<uni-card  class="card" is-shadow="true" spacing="20rpx">
					<view class="image-box">
						<img :src="value.imagePath" alt="" class="image">
					</view>
					<view class="text-box">
						<view class="text-line1">
							<span class="text-class-name">{{value.className}}</span>
							<span class="study-history">学至{{ value.studyHistory }}</span>
						</view>
						<view class="text-line2">
							<span class="text-classes">{{value.classes}}</span>
						</view>
						<view class="text-line3">
							讲师：<span class="text-teacher">{{value.teacher}}</span>
						</view>
						<view class="text-line4">
							<span class="text-time">{{value.startTime}}~{{value.endTime}}</span>
						</view>
						<view class="button-box">
							<button class="button button2" @click="goToDetail(value,index)">继续学习</button>
						</view>
					</view>
				</uni-card>
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
			userId:'001',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			studyHistory:'第3章第5节',
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
			userId:'001',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			studyHistory:'第3章第5节',
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
			userId:'001',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			studyHistory:'第3章第5节',
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
			userId:'001',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			studyHistory:'第3章第5节',
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
			userId:'001',
			className:'C语言',
			teacherId:'003',
			teacher:'高启强',
			classes:'计算机类',
			studyHistory:'第3章第5节',
			imagePath:'/static/images/other/Keqing.jpg',
			startTime:'2023-01-08',
			endTime:'2023-07-08',
			isJoin:'0',// 0未报名，1已报名
			status:'1' ,// 0未开始，1进行中，2已结束
			flag:'1' // 0课程上线，1课程下线
		}
	])
	// 打卡并开始学习
	const goToDetail=(value,index)=>{
		wx.navigateTo({
			url:`/pages/detail`
		});
		wx.setStorageSync("classId",value.classId);
		wx.setStorageSync("teacherId",value.teacherId);
		if(classData.value[index].isStudyToday==="0"){
			classData.value[index].isStudyToday = "1"
		}
	}
</script>

<style>
	.card-box{
		width: 680rpx;
		height: 320rpx;
		margin: 0 auto;
	}
	.card{
		width: 680rpx;
		height: 320rpx;
		margin-top: 20rpx;
		overflow: hidden;
	}
	.image-box .image{
		width: 200rpx;
		height: 200rpx;
		border-radius: 30%;
		float: left;
		border: 0.5px #fff solid;
	}
	.text-box{
		float: left;
		border: 0.5px #fff solid;
		margin-left: 20rpx;
		overflow: hidden;
		width: 300rpx;
	}
	.text-line1{
		color: #303133;
	}
	.text-class-name{
		font-size: 36rpx;
	}
	.study-history{
		font-size: 20rpx;
		color: #909399;
		/* margin-left: 20rpx; */
		float: right;
	}
	.text-line2{
		
	}
	.text-classes{
		font-size: 20rpx;
		color: #909399;
	}
	.text-line3{
		font-size: 20rpx;
		color: #909399;
	}
	.text-teacher{
		font-size: 20rpx;
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