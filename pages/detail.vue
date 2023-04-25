<template>
	<view class="index">
		<view class="top">
			<view class="image-box">
				<image :src="classDetail.imagePath" class="image" mode="aspectFill"></image>
			</view>
			
		</view>
		<view class="middle">
			<view class="text">
				<view class="line1 line">
					<span class="class-name">{{ classDetail.className }}</span>
					<span class="teacher-name">{{ classDetail.teacher}}</span>
				</view>
				<view class="line2 line">
					课程类别：<span class="classes">{{ classDetail.classes }}</span>
				</view>
				<view class="line3 line">
					时间安排：<span class="time">{{ classDetail.startTime }}~{{ classDetail.endTime }}</span>
				</view>
				<view class="line4 line">
					报名人数：<span class="num">{{ classDetail.signNum }}人</span>
				</view>
				<view class="line4 line">
					课时安排：<span class="class-num">{{ classDetail.classNum }}课时</span>
				</view>
			</view>
		</view>
<!-- 		<view class="button-box">
			<button class="button button1" @click="signUp()" v-if="classDetail.isJoin==='0'" round>点击报名</button>
			<button class="button button2" @click="goToPage('studyResource/studyIndex')" v-else-if="classDetail.isJoin==='1'" round>开始学习</button>
		</view> -->
		<view class="content-box">
			<view class="content">
				<view class="teacher-title-box">
					<span class="teacher-title">--讲师介绍--</span>
				</view>
				<view class="teacher-content">
					{{ classDetail.teacherText }}
				</view>
				<view  class="class-title-box">
					<span class="class-title">--课程介绍--</span>
				</view>
				<view class="class-content">
					{{ classDetail.classText }}
				</view>
			</view>
		</view>
		<!-- <view class="bottom">
			<view class="bottom-text">
				<span class="talk-to-teacher" @click="goToPage('talkToTeacher')">名师互动</span>
				<span class="discuss" @click="goToPage('discuss')">课堂讨论</span>
			</view>
		</view> -->
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick()" v-if="!isCanStudy"/>
			<uni-goods-nav :options="options" :fill="true" :button-group="studyButtonGroup" @click="onClick"
				@buttonClick="goToPage()" v-else/>
		</view>
	</view>
</template>

<script setup>
import {getCurrentInstance, onBeforeMount, ref} from "vue"

const instance = getCurrentInstance()
const _this = instance.proxy

const classId=ref('0');
const classDetail=ref(
	{
		classId:'12',
		className:'C语言',
		classes:'计算机类',
		teacherId:'003',
		teacher:'高启强',
		imagePath:'http://150.158.87.78:8888/down/tc4Y40JDiNnQ.png',
		startTime:'2023-01-08',
		endTime:'2023-07-08',
		teacherText:'讲师文案',
		signNum:'45',
		classNum:'10',
		classText:'课程文案课程文案课程文案课程文案课程文案课程文案课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案',
		isJoin:'1',	// 0未报名，1已报名
	}
)
const goToPage=()=>{
	wx.navigateTo({
		url:`/pages/detailPages/studyIndex`,
	})
}
const signUp = () => {
	classDetail.value.isJoin="1";
	console.log(classDetail.value.isJoin)
}
// 底部蓝数据	
const option = ref([
	{
		icon: 'chat',
		text: '客服'
	}, 
	{
		icon: 'shop',
		text: '店铺',
		info: 2,
		infoBackgroundColor: '#007aff',
		infoColor: "#f5f5f5"
	}, 
	{
		icon: 'cart',
		text: '购物车',
		info: 2
	}
])
const buttonGroup = ref([
	{
		text: '加入购物车',
		backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)',
		color: '#fff'
	},
	{
		text: '立即购买',
		backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
		color: '#fff'
	}
])
const studyButtonGroup = ref([
	{
		text: '开始学习',
		backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
		color: '#fff'
	}
])
const onClick =(e) =>{
	uni.showToast({
		title: `加载${e.content.text}信息失败`,
		icon: 'none'
	})
}
const buttonClick = () => {
	uni.showToast({
		title: `加载用户信息失败`,
		icon: 'none'
	})
}
const isCanStudy = ref(false)
const IsCanStudy =()=>{
	// if(wx.getStorageSync.classId===classDetail.value.classId){
		isCanStudy.value = wx.getStorageSync('isCanStudy')
	// }else{
		
	// }
	
}
onBeforeMount(()=>{
	IsCanStudy()
})

</script>

<style>
	.index{
		overflow-x: hidden;
	}
	.top{
		width: 100%;
		height: 360rpx;
	}
/* 	.top:before{
		content:'';
		position:absolute;
		top:0;
		left:0;
		width: 100%;
		height:360rpx;
		background-color: #d9ecff;
		z-index:-1;
		filter: blur(5px);
	} */
	.iamge-box {
		width: 100%;
		height: 100%;
	}
	.image{
		width: 100%;
		height: 360rpx;
	}
	.button{
		width: 400rpx;
		height: 100rpx;
		font-size: 36rpx;
		position: relative;
		border-radius: 20px;
		
		color: #ffffff;
	}
	.button1{
		background-color: #409EFF;
	}
	.button2{
		background-color: #67C23A;
	}
	.button1:active{
		background-color: #337ecc;
	}
	.button2:active{
		background-color: #529b2e;
	}
	.middle{
		width: 100%;
		padding: 50rpx 0;
		background-color: #ffffff;
		overflow: hidden;
	}
	.text{
		float:left;
		font-size: 24rpx;
		margin-left: 30rpx;
		color:#909399;
	}
	.class-name{
		color:#303133;
		font-size: 56rpx;
	}
	.teacher-name{
		margin-left: 20rpx;
		color:#409EFF;
	}
	.line{
		margin-top: 25rpx;
	}
	.line1{
		margin-top: 0;
	}
	.classes{
		color:#409EFF;
	}
	.content-box{
		margin-top: 5px;
		width: 100%;
		background-color: #ffffff;
		overflow: hidden;
	}
	.content{
		margin-top: 50rpx;
		margin-bottom: 120rpx;
		position: relative;
		width: 90%;
		left: 50%;
		transform: translateX(-50%);
	}
	.teacher-title-box{
		width: 100%;
		height: 100rpx;
		background: linear-gradient(to right,#ffffff,#409eff,#ffffff);
		font-size: 36rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.teacher-title{
		color: #ffffff;
	}
	.teacher-content{
		margin-top: 10rpx;
	}
	.class-title-box{
		margin-top: 50rpx;
		width: 100%;
		height: 100rpx;
		background: linear-gradient(to right,#ffffff,#409eff,#ffffff);
		font-size: 36rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.class-title{
		color: #ffffff;
	}
	.class-content{
		margin-top: 10rpx;
	}
	.bottom{
		width: 100%;
		height: 100rpx;
		position: fixed;
		background-color: #f4f4f5;
		top:100%;
		transform: translateY(-100%);
		border-top:1rpx #909399 solid;
	}
	.bottom-text{
		width: auto;
		height: auto;
		float: right;
		position: relative;
		right: 8%;
		top: 50%;
		transform: translateY(-50%);
		color: #409EFF;
	}
	.talk-to-teacher{
		margin-right: 30rpx;
	}
	.goods-carts {	
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
	
</style>