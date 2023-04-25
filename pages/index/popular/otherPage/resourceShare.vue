<template>
	<view class="content-box">
		<view class="content" v-for="value in resourceMessage">
			<view class="card">
				<view class="card-text">
					<view class="text1">
						{{ value.resourceName }}
					</view>
					<view class="text2">
						({{ value.resourceMessage }})
					</view>
					<!-- <view class="text3">
						)
					</view> -->
				</view>
 			</view>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from "vue";
const resourceMessage=ref([
	{
		resourceId:'001',
		resourceName:'学习网址1',
		resourceMessage:'www.bilibili.com'
	},
	{
		resourceId:'002',
		resourceName:'学习网址2',
		resourceMessage:'www.bilibili.com'
	},
	{
		resourceId:'003',
		resourceName:'学习网址3',
		resourceMessage:'www.bilibili.com'
	},
	{
		resourceId:'004',
		resourceName:'学习网址4',
		resourceMessage:'www.bilibili.com0000000000000000000000000000000000000000000000000000'
	},
])
</script>

<style>
	.content-box{
		width: 90%;
		height: auto;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	.content{
		
	}
	.card{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 10px;
		box-shadow: 0 0 10px #909399;
		margin-top: 10rpx;
		color: #409eff;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.card-text{
		margin-left: 20rpx;
		width: 90%;
		/* 溢出隐藏 */
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		/* display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden; */
	}
	.text1{
		font-size: 30rpx;
		display: inline;
		color: #303133;
		width: 30%;
	}
	.text2{
		margin-left: 10rpx;
		font-size: 24rpx;
		display: inline;
		width: 60%;
	}
/* 	.text3{
		display: inline;
		width: 10%;
		font-size: 24rpx;
	} */
</style>