<template>
	<view  class="index">
		<view class="top">
			<view class="search">
				<uni-search-bar 
					v-model="searchContent" 
					class="search-bar" 
					placeholder="搜索"
					clearButton="auto"
					cancelButton="none"
					@confirm="search(searchContent)"
				>
				</uni-search-bar>
				<button @click="search(searchContent)" class="search-button">
					<span class="search-text">搜索</span>
				</button> 
			</view>
			<view>
				<ul class="top-bar">
					<li class="top-bar-child" v-for="value in topBar" @click="goToPage(value.page)">
						<span class="selected" v-if="page===value.page">{{ value.name }}</span>
						<span class="un-selected" v-else>{{ value.name }}</span>
					</li>
				</ul>
			</view>
		</view>
		<view class="content">
			<popularIndex v-if="page==='popularIndex'"></popularIndex>
			<classifyIndex v-else-if="page==='classifyIndex'"></classifyIndex>
		</view>
		
	</view>
</template>

<script setup>
import {ref} from "vue";
import popularIndex from "@/pages/index/popular/popularIndex.vue";
import classifyIndex from "@/pages/index/classify/classifyIndex.vue";
// 页面跳转
const page = ref("popularIndex");
const goToPage=(pageName)=>{
	page.value = pageName
}
const topBar = [
	{
		name:"主页",
		page:"popularIndex"
	},
	// {
	// 	name:"精选课程",
	// 	page:"curationIndex"
	// },
	{
		name:"课程分类",
		page:"classifyIndex"
	}
]
// 搜索
const searchContent = ref('')
const search=(value)=>{
	if(value===''){
		uni.showToast({
			title:"搜索内容不能为空！",
			icon:"none"
		})
	}else{
		wx.navigateTo({
			url:`/pages/index/searchResult`,
		})
		wx.setStorageSync("searchValue",value)
	}
	
}
</script>

<style>
	.index {

	}
	.top{
		background-color:  #79bbff;
	}
	.top-bar{
		margin-top: 10rpx;
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 80rpx;
		background-color:  #79bbff;
	}
	.top-bar-child{
		/* margin: auto 160rpx;
		width:160rpx; */
		flex: 1 1 50%;
		text-align: center;
	}
	.selected{
		line-height: 95rpx;
		font-size: 32rpx;
		color:#fff;
		font-weight:bold;
		border-bottom: 5rpx #fff solid;
	}
	.un-selected{
		font-size: 28rpx;
		color:#fff;
	}
	.search{
		height: 100rpx;
	}
	.search-bar{
		position: relative;
		float: left;
		left: 50%;
		top: 50%;
		transform: translate(-65%,-50%);
		width: 560rpx;
		height: 40rpx;
	}
	.search-button{
		margin-top: 35rpx;
		width: 130rpx;
		height: 60rpx;
		float: right;
		transform: translate(-30%,30%);
		line-height: 100%;
		border-radius: 20px;
		background-color: #ffffff;
	}
	.search-text{
		position: relative;
		top: 15%;
		color: #909399;
		font-size: 30rpx;
	}
</style>
