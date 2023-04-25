"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "resourceShare",
  setup(__props) {
    const resourceMessage = common_vendor.ref([
      {
        resourceId: "001",
        resourceName: "学习网址1",
        resourceMessage: "www.bilibili.com"
      },
      {
        resourceId: "002",
        resourceName: "学习网址2",
        resourceMessage: "www.bilibili.com"
      },
      {
        resourceId: "003",
        resourceName: "学习网址3",
        resourceMessage: "www.bilibili.com"
      },
      {
        resourceId: "004",
        resourceName: "学习网址4",
        resourceMessage: "www.bilibili.com0000000000000000000000000000000000000000000000000000"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(resourceMessage.value, (value, k0, i0) => {
          return {
            a: common_vendor.t(value.resourceName),
            b: common_vendor.t(value.resourceMessage)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/index/otherPage/resourceShare.vue"]]);
wx.createPage(MiniProgramPage);
