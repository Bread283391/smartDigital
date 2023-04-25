<template>
	<view>
		<view class="classify-card-box" >
			<view class="classify-card" is-shadow="true" @click="searchClassify(value)" v-for="(value,index) in classifyData">
				<view class="classify-content">
					<uni-icons class="classify-icon" custom-prefix="iconfont" :type=value.icon :size="value.size" color="#909399"></uni-icons>
					<span class="classify-name">{{value.name}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
const classifyData=ref([
	{
		name:"经营",
		icon:'icon-jingying',
		size:'24'
	},
	{
		name:"财务",
		icon:'icon-caiwu',
		size:'22'
	},
	{
		name:"环境",
		icon:'icon-huanjing',
		size:'20'
	},
	{
		name:"计算机",
		icon:'icon-jisuanji',
		size:'20'
	},
	{
		name:"人力资源",
		icon:'icon-renliziyuan',
		size:'24'
	},
	{
		name:"商业",
		icon:'icon-shangye',
		size:'20'
	},
	{
		name:"人工智能",
		icon:'icon-rengongzhineng',
		size:'20'
	}
	
	
	
	
	
	
	
])
const searchClassify=(value)=>{
	
	wx.navigateTo({
		url:`/pages/index/searchResult`,
	})
	wx.setStorageSync('searchValue',value.name)
}
</script>

<style>
.classify-card-box{
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
}
.classify-card{
	flex: 1 1 40%;
	margin: 20rpx;
	height: 100rpx;
	border-radius: 10px;
	box-shadow: 0px 0px 5px #909399;
}
.classify-name{
	float: left;
	font-size: 30rpx;
	margin-left: 30rpx;
	color:#303133;
}
.classify-icon{
	float: left;
	margin-left: 20rpx;
}
.classify-content{
	height: 20rpx;
	position: relative;
	top: 30%;
}
</style>