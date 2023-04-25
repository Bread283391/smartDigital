<template>
	<view>
		<view class="top">
			<view class="top-bar">
				<span v-for="value in topBar">
					<span class="top-item selected" v-if="value.page === page">{{ value.name }}</span>
					<span class="top-item unSelected" v-else  @click="goToPage(value.page)">{{ value.name }}</span>
				</span>
			</view>
		</view>
		<view class="content">
			<myClassPage v-if="page==='myClassPage'"></myClassPage>
			<otherPage1 v-else-if="page==='otherPage1'"></otherPage1>
			<otherPage2 v-else-if="page==='otherPage2'"></otherPage2>
			<otherPage3 v-else-if="page==='otherPage3'"></otherPage3>
			<otherPage4 v-else-if="page==='otherPage4'"></otherPage4>
		</view>
	</view>
</template>

<script setup>
import otherPage1 from './otherPage/otherPage1/otherPage1.vue';
import otherPage2 from './otherPage/otherPage2/otherPage2.vue';
import otherPage3 from './otherPage/otherPage3/otherPage3.vue';
import otherPage4 from './otherPage/otherPage4/otherPage4.vue';
import myClassPage from './otherPage/myClassPage/myClassPage.vue';

import { ref } from 'vue';
// 子页面更改
const page = ref('myClassPage')
const goToPage = (value)=>{
	page.value = value
}
const topBar = ref([
	{
		name:'我的课程',
		page:'myClassPage'
	},
	{
		name:'人气课程',
		page:'otherPage1'
	},
	{
		name:'名师讲解',
		page:'otherPage2'
	},
	{
		name:'专项培训',
		page:'otherPage3'
	},
	{
		name:'竞赛指导',
		page:'otherPage4'
	}
])
</script>

<style>
.top{
	width: 100%;
	height: 80rpx;
	background-color: #ffffff;
	box-shadow: 0 0 10px #dedfe0;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
}
.top-bar{
	width: 100%;
	height: 100rpx;
	line-height: 80rpx;
	padding-left: 50rpx;
	
}
.top-item{
	text-align: center;
	margin-right: 80rpx;
	font-size: 24rpx;
}
.selected{
	color: #409eff;
	border-bottom: 2px #409eff solid;
	font-size: 30rpx;
	font-weight: bold;
	position: relative;
	top: 5%;
}
</style>