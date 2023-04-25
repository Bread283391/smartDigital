"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "about",
  setup(__props) {
    const version = "1.0.2";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(version)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/myStudy/otherPages/about.vue"]]);
wx.createPage(MiniProgramPage);
