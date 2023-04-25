<template>
	<view class="index">
		<view class="top">
			<view class="user-box">
				<image class="user-image" :src="user.userImage" mode=""></image>
				<view class="user-name">
					{{ user.userName }}
				</view>
			</view>
		</view>
		<view class="center">
			<view class="center-button" @click="goToPage('studyHistory')">
				<span class="center-text">学习记录<span class="center-text-item">(今日已学<span style="color: #409eff;">0</span>分钟)</span></span>
				<uni-icons class="icon center-icon" type="forward" size="20" color="#909399"></uni-icons>
			</view>
		</view>
		<view class="middle1">
			<view class="middle1-title">
				资产管理
			</view>
			<view class="middle1-content-box">
				<view class="middle1-content1 middle1-content">
					<view class="number">
						￥0
					</view>
					<view class="number-text">
						我的账户
					</view>
				</view>
				<view class="middle1-content2 middle1-content">
					<view class="number">
						0
					</view>
					<view class="number-text">
						我的积分
					</view>
				</view>
				<view class="middle1-content3 middle1-content">
					<view class="number">
						0
					</view>
					<view class="number-text">
						我的券码
					</view>
				</view>
			</view>
		</view>
		<view class="middle2">
			<view class="middle2-title">
				订单
			</view>
			<view class="middle2-content-box">
				<view class="middle2-content">
					<view class="middle2-icon">
						<uni-icons custom-prefix="iconfont" type="icon-daifukuan" size="27"></uni-icons>
					</view>
					<view class="icon-text">
						待付款
					</view>
				</view>
				<view class="middle2-content">
					<view class="middle2-icon">
						<uni-icons custom-prefix="iconfont" type="icon-daifahuo" size="30"></uni-icons>
					</view>
					<view class="icon-text">
						待发货
					</view>
				</view>
				<view class="middle2-content">
					<view class="middle2-icon">
						<uni-icons custom-prefix="iconfont" type="icon-daishouhuo" size="30"></uni-icons>
					</view>
					<view class="icon-text">
						待收货
					</view>
				</view>
				<view class="middle2-content">
					<view class="middle2-icon">
						<uni-icons custom-prefix="iconfont" type="icon-daipingjia" size="30"></uni-icons>
					</view>
					<view class="icon-text">
						待评价
					</view>
				</view>
				<view class="middle2-content">
					<view class="middle2-icon">
						<uni-icons custom-prefix="iconfont" type="icon-shouhou" size="27"></uni-icons>
					</view>
					<view class="icon-text">
						退款/售后
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="line-box">
				<view class="line line1" @click="goToPage('shop')">
					<span class="bottom-text line1-text">积分商城</span>
					<uni-icons class="icon line1-icon" type="forward" size="20" color="#909399"></uni-icons>
				</view>
				<view class="line line2" @click="goToPage('help')">
					<span class="bottom-text line2-text">帮助中心</span>
					<uni-icons class="icon line2-icon" type="forward" size="20" color="#909399"></uni-icons>
				</view>
				<view class="line line3" @click="goToPage('about')">
					<span class="bottom-text line3-text">关于我们</span>
					<uni-icons class="icon line3-icon" type="forward" size="20" color="#909399"></uni-icons>
				</view>
				<view class="line line4" @click="goToPage('systemSettings')">
					<span class="bottom-text line4-text">系统设置</span>
					<uni-icons class="icon line4-icon" type="forward" size="20" color="#909399"></uni-icons>
				</view>
				<view class="line line5" @click="goToPage('problem')">
					<span class="bottom-text line5-text">问题反馈</span>
					<uni-icons class="icon line5-icon" type="forward" size="20" color="#909399"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
const user=ref({
	userId:'11321',
	userName:'别卷了小东',
	userImage:'/static/images/other/Keqing.jpg'
})
const goToPage=(value)=>{
	wx.navigateTo({
		url:`/pages/myStudy/otherPages/${value}`
	})
}
</script>

<style>
	.index{
		overflow-x: hidden;
	}
	page{
		background-color: #ffffff;
		
	}
	.top{
		width: 100%;
		height: 360rpx;
		/* background-color: #a0cfff; */
		background-color: #409eff;
	}
	.top::before{
		content: '';
		width: 100%;
		height: 420rpx;
		z-index: -1;
		left: 0%;
		position: absolute;
		background-color: #409eff;
		/* filter: blur(15px); */
	}
	.user-image{
		width: 250rpx;
		height: 250rpx;
		border-radius: 50%;
	}
	.user-box{
		width: 250rpx;
		position: relative;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
	}
	.user-name{
		text-align: center;
		font-size: 36rpx;
		color: #ffffff;
		text-shadow: 2px 2px 3px #337ecc;
	}
	.center{
		width: 100%;
		height: 100rpx;
	}
	.center-button{
		width: 480rpx;
		height: 100%;
		line-height: 100rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		background-color: #ffffff;
		border-radius: 20px;
		padding: 0rpx 30rpx;
		box-shadow: 3px 3px 10px #909399;
	}
	.center-text{
		float: left;
	}
	.center-text-item{
		font-size: 24rpx;
		color: #909399;
		margin-left: 10rpx;
	}
	.center-icon{
		float: right;
	}
	.icon{
		color: #fff;
		float: right;
	}
	.bottom{
		width:100%;
		box-shadow: 0 0 10px #e9e9eb;
		overflow: hidden;
		margin-top: 10rpx;
	}
	.line-box{
		width: 80%;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 60rpx;
	}
	.bottom-text{

	}
	.line{
		margin-top: 60rpx;
	}
	.line1{
		
	}
	.line1-text{
		
	}
	.line1-icon{
		
	}
	.line2{
		
	}
	.line2-text{
		
	}
	.line2-icon{
		
	}
	.line3{
		
	}
	.line3-text{
		
	}
	.line3-icon{
		
	}
	.line4{
		
	}
	.line4-text{
		
	}
	.line4-icon{
		
	}
	.line5{
		margin-bottom: 60rpx;
	}
	.line5-text{
		
	}
	.line5-icon{
		
	}
	.middle1{
		width: 100%;
		height: 200rpx;
		box-shadow: 0  0 10px #e9e9eb;
		box-sizing: border-box;
		margin-top: 30rpx;

	}
	.middle1-title{
		width:100%;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 30rpx;
		margin-left: 30rpx;
	}
	.middle1-content-box{
		padding: 20rpx 50rpx;
		box-sizing: border-box;
	}
	.middle1-content{
		width: 120rpx;
	}
	.middle1-content1{
		float: left;
	}
	.middle1-content2{
		float: left;
		position: absolute;
		left: 50%;
		transform: translate(-50%);
	}
	.middle1-content3{
		float: right;
	}
	.number{
		text-align: center;
		font-size: 40rpx;
		font-weight: bold;
	}
	.number-text{
		margin-top: 10rpx;
		text-align: center;
		font-size: 24rpx;
	}
	
	.middle2{
		width: 100%;
		height: auto;
		box-shadow: 0  0 10px #e9e9eb;
		box-sizing: border-box;
		margin-top: 30rpx;
	
	}
	.middle2-title{
		width:100%;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 30rpx;
		margin-left: 30rpx;
	}
	.middle2-content-box{
		padding: 20rpx 0rpx 50rpx 0rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.middle2-content{
		width: 120rpx;
		flex: 0 0 20%;
		justify-content: space-evenly;
	}
	
	.middle2-icon{
		text-align: center;
	}
	.icon-text{
		margin-top: 10rpx;
		text-align: center;
		font-size: 24rpx;
	}
	
	
</style>