<script>

	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	// StorageSync:{
	// 	searchValue:'',	// 搜索内容
	// 	discussId:'',	// 课堂讨论id
	// 	classId:'',		// 课程id
	// 	teacherId:'',	// 讲师id
	// 	isCanStudy: Boolean	// 是否可以开始学习
	// 	videoId:'' // 视频id
	// }	
</script>

<style>
	/*每个页面公共css */
@import "@/static/icons/iconfont.css";
page{
	background-color: #f4f4f5;
}
</style>
