<template>
	<view>
		<view class="content-box">
			<view class="content" v-for="value in discussData">
				<view class="card" v-if="value.flag==='1'">
					{{ value.discussProblem }}
					<view class="dicuss-box">
						<view class="discuss-button" @click="goToPage(value.discussId)">
							参与讨论
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
const discussData=ref([
	{
		discussId:'001001', // teacherId+id
		discussProblem:'为什么大学生大部分都选择考研?',
		flag:'1',
	},
	{
		discussId:'001002',
		discussProblem:'为什么大学生这么卷?',
		flag:'1'
	},
	{
		discussId:'001003',
		discussProblem:'为什么大学生这么卷a?',
		flag:'0'
	}
])
const goToPage=(value)=>{
	wx.navigateTo({ // 发送讨论id
		url: '/pages/detailPages/studyResource/discuss/discussDetail/discussDetail'
	})
	wx.setStorageSync('discussId',value)
}
</script>

<style>
	.content-box{
		width: 90%;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	.content{
		
	}
	.card{
		width: 100%;
		height: auto;
		margin-top: 20rpx;
		padding: 30rpx 50rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 10px;
		box-shadow:0px 0px 5px #909399;
		box-sizing: border-box;
	}
	.dicuss-box{
		width: 100%;
		margin-top: 50rpx;
		overflow: hidden;
		zoom:1;
	}
	.discuss-button{
		height: 60rpx;
		width: 150rpx;
		text-align: center;
		line-height: 60rpx;
		color: #ffffff;
		background-color: #409EFF;
		float: right;
		border-radius: 10px;
		font-size: 24rpx;
	}
</style>