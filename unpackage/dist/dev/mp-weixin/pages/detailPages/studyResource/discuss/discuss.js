"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "discuss",
  setup(__props) {
    const discussData = common_vendor.ref([
      {
        discussId: "001001",
        // teacherId+id
        discussProblem: "为什么大学生大部分都选择考研?",
        flag: "1"
      },
      {
        discussId: "001002",
        discussProblem: "为什么大学生这么卷?",
        flag: "1"
      },
      {
        discussId: "001003",
        discussProblem: "为什么大学生这么卷a?",
        flag: "0"
      }
    ]);
    const goToPage = (value) => {
      common_vendor.wx$1.navigateTo({
        // 发送讨论id
        url: "/pages/detailPages/studyResource/discuss/discussDetail/discussDetail"
      });
      common_vendor.wx$1.setStorageSync("discussId", value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(discussData.value, (value, k0, i0) => {
          return common_vendor.e({
            a: value.flag === "1"
          }, value.flag === "1" ? {
            b: common_vendor.t(value.discussProblem),
            c: common_vendor.o(($event) => goToPage(value.discussId))
          } : {});
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/detailPages/studyResource/discuss/discuss.vue"]]);
wx.createComponent(Component);
