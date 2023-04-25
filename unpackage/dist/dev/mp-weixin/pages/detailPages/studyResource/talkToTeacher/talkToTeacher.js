"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "talkToTeacher",
  setup(__props) {
    const talkToTeacherData = common_vendor.ref({
      talkToTeacherId: "003001",
      teacherName: "高启强",
      talkToTeacherProblem: "各位加入课程的同学大家好，关于课程的任何疑问，请留言在这里，我会为你们详细解答。",
      isLike: "0"
    });
    const studentReply = common_vendor.ref([
      {
        userId: "001",
        userImage: "/static/images/other/Keqing.jpg",
        userName: "刘小东",
        userDiscuss: "课程中的难点在哪里？"
      },
      {
        userId: "002",
        userImage: "/static/images/other/Keqing.jpg",
        userName: "刘载鹏",
        userDiscuss: "因为我想变得更强！"
      }
    ]);
    const message = common_vendor.ref("");
    const submit = () => {
      if (message.value === "") {
        common_vendor.wx$1.showToast({
          title: "内容不能为空!",
          icon: "none"
        });
      } else {
        let value = {
          userId: "003",
          userImage: "",
          userName: "张大伟",
          userDiscuss: message.value
        };
        common_vendor.wx$1.showToast({
          title: "留言成功!",
          icon: "success"
        });
        setTimeout(function() {
          studentReply.value.push(value);
        }, 1500);
        message.value = "";
      }
    };
    const onChange = (e) => {
      message.value = e.target.value;
    };
    const likeData = common_vendor.ref("32");
    const onLike = () => {
      if (talkToTeacherData.value.isLike === "0") {
        talkToTeacherData.value.isLike = "1";
        likeData.value++;
      } else {
        talkToTeacherData.value.isLike = "0";
        likeData.value--;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(talkToTeacherData.value.teacherName),
        b: common_vendor.t(talkToTeacherData.value.talkToTeacherProblem),
        c: talkToTeacherData.value.isLike === "1"
      }, talkToTeacherData.value.isLike === "1" ? {
        d: common_vendor.o(($event) => onLike()),
        e: common_vendor.p({
          type: "hand-up-filled",
          color: "#409eff"
        })
      } : {
        f: common_vendor.o(($event) => onLike()),
        g: common_vendor.p({
          type: "hand-up-filled",
          color: "#909399"
        })
      }, {
        h: common_vendor.t(likeData.value),
        i: common_vendor.p({
          type: "eye-filled",
          color: "#909399"
        }),
        j: common_vendor.f(studentReply.value, (value, k0, i0) => {
          return {
            a: common_vendor.t(value.userName),
            b: common_vendor.t(value.userDiscuss)
          };
        }),
        k: message.value,
        l: common_vendor.o(onChange),
        m: common_vendor.o(($event) => submit())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/detailPages/studyResource/talkToTeacher/talkToTeacher.vue"]]);
wx.createComponent(Component);
