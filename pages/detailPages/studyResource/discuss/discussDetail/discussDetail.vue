<template>
	<view >
		<view class="top">
			<view class="card">
				<view class="">
					<span>问题：</span>{{ discussData.discussProblem }}
				</view>
				<view class="talk-to-teacher-icon">
					<span class="dianzan-box">
						<uni-icons 
							class="icon-dianzan" 
							type="hand-up-filled" 
							v-if="discussData.isLike==='1'"
							@click="onLike()"
							color="#409eff"
						>
						</uni-icons>
						<uni-icons 
							class="icon-dianzan" 
							type="hand-up-filled" 
							v-else 
							@click="onLike()"
							color="#909399"
						>
						</uni-icons>
						<span class="liulan-text">{{ likeData }}</span>
					</span>
					<span class="liulan-box">
						<uni-icons 
							class="icon-liulan" 
							type="eye-filled"
							color="#909399"
						>
						</uni-icons>
						<span class="liulan-text">39</span>
					</span>
				</view>
			</view>
		</view>
		<view class="discuss-content">
			<view v-for="value in discussReply">
				<view class="discuss">
					<view class="user-title">
						<!-- <img :src="value.userImage" class="user-image" alt=""> -->
						<span class="user-name">{{ value.userName }}</span>
					</view>
					<view class="user-discuss">
						{{ value.userDiscuss }}
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-box">
				<view class="input-box">
					<input class="input" type="text" :value="message"
					v-on:input="onChange">
				</view>
				<view class="button">
					<span class="button-text" @click="submit()">回复</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
const discussData=ref({
	discussId:'003001',
	discussProblem:'为什么大学生大部分选择考研？',
	isLike:'0'
})

// 学生回复内容
const discussReply=ref([
	{
		userId:'001',
		userImage:'/static/images/other/Keqing.jpg',
		userName:'刘小东',
		userDiscuss:'是因为当代大学生想要追求更高的目标！'
	},
	{
		userId:'001',
		userImage:'/static/images/other/Keqing.jpg',
		userName:'刘载鹏',
		userDiscuss:'因为我想变得更强！'
	}
])

// 回复
const message=ref('')
const submit=()=>{
	if(message.value===''){
		wx.showToast({
			title: `内容不能为空！`,
			icon: 'none'
		})
	}else{
		let value = {
			userId:'003',
			userImage:'',
			userName:'张大伟',
			userDiscuss:message.value
		}
		wx.showToast({
			title:'留言成功!',
			icon:'success'
		})
		setTimeout(function(){
			discussReply.value.push(value)
		},1500)
		message.value = ''
	}
}
const onChange=(e)=>{
	message.value=e.target.value
}

// 点赞
const likeData = ref('16')
const onLike = () => {
	if(discussData.value.isLike === '0'){
		discussData.value.isLike = '1'
		likeData.value ++
	}else{
		discussData.value.isLike = '0'
		likeData.value --
	}
}
</script>

<style>
	page{
		background-color: #ffffff;
	}
	.top{
		width:100%;
		height: auto;
	}
	.card{
		width: 85%;
		height: auto;
		padding: 30rpx 50rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		box-shadow: 0 0 10px #e9e9eb;
		border-radius: 10px;
		margin-top: 50rpx;
		box-sizing: border-box;
	}
	.talk-to-teacher-icon{
		font-size: 30rpx;
		color: #909399;
		margin-top: 20rpx;
	}
	.dianzan-box{
		
	}
	.icon-dianzan{
		
	}
	.liulan-text{
		
	}
	.liulan-box{
		float: right;
	}
	.icon-liulan{
		
	}
	.liulan-text{
		
	}
	.discuss-content{
		width: 100%;
		height: auto;
		
	}
	.discuss{
		width:80%;
		height1:auto;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 50rpx;
	}
	.user-title{
		width: 100%;
		height: 40rpx;
	}
	.user-image{
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}
	
	.user-name{
		line-height: 40rpx;
		font-weight: bold;
	}
	.user-discuss{
		margin-left: 20rpx;
		margin-top: 20rpx;
		font-size: 24rpx;
	}
	.bottom{
		position: absolute;
		height: 100rpx;
		width: 100%;
		top: 100%;
		transform: translateY(-100%);
		
		background-color: #f4f4f5;
	}
	.bottom-box{
		height: 60rpx;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	.input-box{
		float: left;
		width: 60%;
		height: 100%;
		background-color: #ffffff;
		border-radius: 10px;
		margin-left: 50rpx;
	}
	.input{
		float: left;
		width: 80%;
		height: 100%;
		margin-left: 20rpx;
		
		
	}
	.button{
		width: 20%;
		height: 100%;
		float: right;
		background-color: #409EFF;
		border-radius: 5px;
		margin-right: 30rpx;
		text-align: center;
		transition: 1ms;
		color: #ffffff;
	}
	.button:hover{
		background-color: #337ecc;
	}
	.button-text{
		line-height: 60rpx;
	}
</style>