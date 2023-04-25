<template>
	<view >
		<view class="talk-to-teacher-top">
			<view class="talk-to-teacher-card">
				<view class="">
					<span class="teacher-name">{{talkToTeacherData.teacherName}}：</span>{{ talkToTeacherData.talkToTeacherProblem }}
				</view>
				<view class="talk-to-teacher-icon">
					<span class="dianzan-box">
						<uni-icons 
							class="icon-dianzan" 
							type="hand-up-filled" 
							v-if="talkToTeacherData.isLike==='1'"
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
						<span class="liulan-text">42</span>
					</span>
				</view>
			</view>
		</view>
		<view class="discuss-content">
			<view v-for="value in studentReply">
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
					<span class="button-text" @click="submit()">留言</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
const talkToTeacherData=ref({
	talkToTeacherId:'003001',
	teacherName:'高启强',
	talkToTeacherProblem:'各位加入课程的同学大家好，关于课程的任何疑问，请留言在这里，我会为你们详细解答。',
	isLike:'0',
})

// 学生回复内容
const studentReply=ref([
	{
		userId:'001',
		userImage:'/static/images/other/Keqing.jpg',
		userName:'刘小东',
		userDiscuss:'课程中的难点在哪里？'
	},
	{
		userId:'002',
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
			title:'内容不能为空!',
			icon:'none'
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
			studentReply.value.push(value)
		},1500)
		message.value=''
	}
}
const onChange=(e)=>{
	message.value=e.target.value
}

// 点赞
const likeData = ref('32')
const onLike = () => {
	if(talkToTeacherData.value.isLike === '0'){
		talkToTeacherData.value.isLike = '1'
		likeData.value ++
	}else{
		talkToTeacherData.value.isLike = '0'
		likeData.value --
	}
}
</script>

<style>
	page{
		background-color: #ffffff;
	}
	.talk-to-teacher-top{
		width:100%;
		height: auto;	
	}
	.teacher-name{
		color: #409EFF; 
	}
	.talk-to-teacher-card{
		width: 90%;
		height: auto;
		padding: 30rpx 50rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		box-shadow: 0 0 10px #e9e9eb;
		border-radius: 10px;
		margin-top: 50rpx;
		background-color: #fff;
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
		width:90%;
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




























<!-- <template>
	<view>
		<view class="content-box">
			<view class="content" v-for="(value,index) in content">
				<view class="card">
					<view class="user">
						<view class="user-title">
							<img :src="value.userImage" alt="" class="image">
							<span class="user-name">{{ value.userName }}</span>
						</view>
						<view class="user-text">
							{{ value.userText }}
						</view>
					</view>
					<view class="teacher">
						<span class="teacher-title">
							讲师回复：
						</span>
						<span class="teacher-text">
							{{ value.teacherText }}
						</span>
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
					<span class="button-text" @click="submit()">留言</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
const content=ref([
	{
		userId:'001',
		userName:'别卷了小东',
		userImage:'/static/images/other/Keqing.jpg',
		userText:'	如果我没日没夜地学习，何时能考研上岸？',
		teacherId:'003',
		teacherName:'高启强',
		teacherText:'你卷你妈呢'
	},
	{
		userId:'001',
		userName:'别卷了小东',
		userImage:'/static/images/other/Keqing.jpg',
		userText:'	如果我没日没夜地学习，何时能考研上岸？',
		teacherId:'003',
		teacherName:'高启强',
		teacherText:'你卷你妈呢'
	}
])
const message=ref('')
const submit=()=>{
	console.log(message.value)
}
const onChange=(e)=>{
	message.value=e.target.value
}
</script>

<style>
	.content-box{
		width: 70%;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	.content{
		
	}
	.card{
		width: 100%;
		height: auto;
		margin-top: 50rpx;
		padding: 30rpx 50rpx;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 10px;
		box-shadow:0px 0px 5px #909399;
	}
	.user{
		width: 100%;
		height: auto;
	}
	.user-title{
		width: 100%;
		height: 50rpx;
	}
	.image{
		border-radius: 50%;
		width: 50rpx;
		height: 50rpx;
		float: left;
	}
	.user-name{
		margin-left: 20rpx;
		font-size: 30rpx;
		line-height: 50rpx;
	}
	.user-text{
		margin-top: 10rpx;
		font-size: 24rpx;
	}
	.teacher{
		margin-top: 50rpx;
	}
	.teacher-title{
		font-size: 24rpx;
		color: #409EFF;
	}
	.teacher-text{
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
</style> -->