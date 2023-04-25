"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "problem",
  setup(__props) {
    const problem = common_vendor.ref("");
    const submitProblem = () => {
      console.log(problem.value);
    };
    return (_ctx, _cache) => {
      return {
        a: problem.value,
        b: common_vendor.o(($event) => problem.value = $event.detail.value),
        c: common_vendor.o(submitProblem)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/myStudy/otherPages/problem.vue"]]);
wx.createPage(MiniProgramPage);
