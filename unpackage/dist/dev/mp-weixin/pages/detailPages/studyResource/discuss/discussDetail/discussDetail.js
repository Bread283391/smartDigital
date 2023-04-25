"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "discussDetail",
  setup(__props) {
    const discussData = common_vendor.ref({
      discussId: "003001",
      discussProblem: "为什么大学生大部分选择考研？",
      isLike: "0"
    });
    const discussReply = common_vendor.ref([
      {
        userId: "001",
        userImage: "/static/images/other/Keqing.jpg",
        userName: "刘小东",
        userDiscuss: "是因为当代大学生想要追求更高的目标！"
      },
      {
        userId: "001",
        userImage: "/static/images/other/Keqing.jpg",
        userName: "刘载鹏",
        userDiscuss: "因为我想变得更强！"
      }
    ]);
    const message = common_vendor.ref("");
    const submit = () => {
      if (message.value === "") {
        common_vendor.wx$1.showToast({
          title: `内容不能为空！`,
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
          discussReply.value.push(value);
        }, 1500);
        message.value = "";
      }
    };
    const onChange = (e) => {
      message.value = e.target.value;
    };
    const likeData = common_vendor.ref("16");
    const onLike = () => {
      if (discussData.value.isLike === "0") {
        discussData.value.isLike = "1";
        likeData.value++;
      } else {
        discussData.value.isLike = "0";
        likeData.value--;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(discussData.value.discussProblem),
        b: discussData.value.isLike === "1"
      }, discussData.value.isLike === "1" ? {
        c: common_vendor.o(($event) => onLike()),
        d: common_vendor.p({
          type: "hand-up-filled",
          color: "#409eff"
        })
      } : {
        e: common_vendor.o(($event) => onLike()),
        f: common_vendor.p({
          type: "hand-up-filled",
          color: "#909399"
        })
      }, {
        g: common_vendor.t(likeData.value),
        h: common_vendor.p({
          type: "eye-filled",
          color: "#909399"
        }),
        i: common_vendor.f(discussReply.value, (value, k0, i0) => {
          return {
            a: common_vendor.t(value.userName),
            b: common_vendor.t(value.userDiscuss)
          };
        }),
        j: message.value,
        k: common_vendor.o(onChange),
        l: common_vendor.o(($event) => submit())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/detailPages/studyResource/discuss/discussDetail/discussDetail.vue"]]);
wx.createPage(MiniProgramPage);
