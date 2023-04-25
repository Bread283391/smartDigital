<template>
	<view class="top">
		<view class="top-title">
			{{ classData.className }}
		</view>
		<view class="top-content">
			<span class="top-grade">
				成绩：{{ classData.grade }}
			</span>
			|
			<span class="top-rate">
				{{ classData.studied }}%已学
			</span>
		</view>
	</view>
	<view class="bottom">
		<view class="bottom-title">
			<span class="title-item " v-for="value in items">
				<span class="selected" @click="showPage(value.page)" v-if="page===value.page">{{ value.name }}</span>
				<span class="unselect" @click="showPage(value.page)" v-else>{{ value.name }}</span>
			</span>
		</view>
		<view class="content">
			<study v-if="page==='study'"></study>
			<discuss v-else-if="page==='discuss'"></discuss>
			<talkToTeacher v-else-if="page==='talkToTeacher'"></talkToTeacher>
		</view>
	</view>
</template>

<script setup>
import { discuss } from "./studyResource/discuss/discuss.vue"
import { study } from "./studyResource/study/study.vue"
import { talkToTeacher } from "./studyResource/talkToTeacher/talkToTeacher.vue"
import { ref } from "vue";

const items=ref([
	{
		name:'学习目录',
		page:'study'
	},
	{
		name:'课堂讨论',
		page:'discuss'
	},
	{
		name:'名师互动',
		page:'talkToTeacher'
	},
])

const classData=ref(
	{
		classId:'12',
		className:'C语言',
		grade:'0',
		studied:'0'
	}
)

// 局部页面切换
const page = ref('study')
const showPage = (value) => {
	page.value = value
}
</script>

<style>
page{
	background-color: #ffffff;
}
.top{
	width: 100%;
	height: 300rpx;
	background: linear-gradient(to right,#409EFF,#c6e2ff);
}
.top-title{
	color: #ffffff;
	font-size: 48rpx;
	font-weight: bold;
	position: relative;
	left: 10%;
	top: 15%;
}
.top-content{
	color: #ffffff;
	font-size: 32rpx;
	position: relative;
	left: 10%;
	top: 40%;
}
.top-grade{
	margin-right: 20rpx;
}
.top-rate{
	margin-left: 20rpx;
}
.bottom{
	width: 100%;
	background-color: #ffffff;
}
.bottom-title{
	width: 100%;
	height: 100rpx;
	box-shadow: 0 0 10px #e9e9eb;
	display: inline-flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	background-color: #ffffff;
}
.title-item{
	flex: 1 1 33.3%;
	text-align: center;
}
.selected{
	color: #409eff;
	font-size: 30rpx;
	border-bottom: 2px #409eff solid;
	
}
.unselect{
	font-size: 24rpx;
}
.content{
	
}

</style>
