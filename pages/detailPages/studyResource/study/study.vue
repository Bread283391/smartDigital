<template>
	<view class="index">
		<uni-collapse accordion="true">
			<uni-collapse-item class="title" :title="value1.name" v-for="value1 in classCatalog">
				<view 
					class="content" 
					v-if="value1.children.length" 
					v-for="value2 in value1.children"
					@click="goToPage()"
				>
					<uni-icons class="icon" type="videocam-filled" size="20"></uni-icons>
					{{ value2.name }}
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script setup>
import {ref} from 'Vue'
const classCatalog=ref([
	{
		name:'第一章：1',
		children:[
			{
				name:'第一节：1'
			},
			{
				name:'第二节：2'
			},
			{
				name:'第三节：3'
			},
			{
				name:'第四节：4'
			}
		]
	},
	{
		name:'第二章：2',
		children:[
			{
				name:'第一节：1'
			},
			{
				name:'第二节：2'
			},
			{
				name:'第三节：3'
			},
			{
				name:'第四节：4'
			}
		]
	},
	{
		name:'第三章：3',
		children:[
			{
				name:'第一节：1'
			},
			{
				name:'第二节：2'
			},
			{
				name:'第三节：3'
			},
			{
				name:'第四节：4'
			}
		]
	}
])
const goToPage=(value)=>{
	wx.navigateTo({
		url:'/pages/detailPages/studyResource/study/playVideo/playVideo'
	})
	wx.setStorageSync("videoId",value)
}
</script>

<style>
.index{
	margin: 20rpx;
}
.title{
	font-size: 36rpx;
}
.content{
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	padding: 0 50rpx;
	box-sizing: border-box;
}
.icon{
	margin-right: 30rpx;
	color: #909399;
}
</style>