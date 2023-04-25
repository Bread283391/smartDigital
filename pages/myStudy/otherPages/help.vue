<template>
	<view>
		<view class="content-box">
			<view v-for="value in helpContent">
				<view class="content">
					<view class="content-title">
						{{ value.title }}
					</view>
					<view class="content-text">
						{{ value.text }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const helpContent=[
	{
		title:'标题一',
		text:'\t内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
	},
	{
		title:'标题二',
		text:'\t内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
	},
	{
		title:'标题三',
		text:'\t内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
	}
]
</script>

<style>
.content-box{
	width: 80%;
	height: auto;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
}
.content{
	width: 100%;
	margin-top: 50rpx;
}
.content-title{
	font-size: 36rpx;
    font-weight: bold;
}
.content-text{
	font-size: 24rpx;
	margin-top: 10rpx;
}
</style>