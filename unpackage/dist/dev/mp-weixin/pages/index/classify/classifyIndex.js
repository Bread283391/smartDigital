"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "classifyIndex",
  setup(__props) {
    const classifyData = common_vendor.ref([
      {
        name: "经营",
        icon: "icon-jingying",
        size: "24"
      },
      {
        name: "财务",
        icon: "icon-caiwu",
        size: "22"
      },
      {
        name: "环境",
        icon: "icon-huanjing",
        size: "20"
      },
      {
        name: "计算机",
        icon: "icon-jisuanji",
        size: "20"
      },
      {
        name: "人力资源",
        icon: "icon-renliziyuan",
        size: "24"
      },
      {
        name: "商业",
        icon: "icon-shangye",
        size: "20"
      },
      {
        name: "人工智能",
        icon: "icon-rengongzhineng",
        size: "20"
      }
    ]);
    const searchClassify = (value) => {
      common_vendor.wx$1.navigateTo({
        url: `/pages/index/searchResult`
      });
      common_vendor.wx$1.setStorageSync("searchValue", value.name);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classifyData.value, (value, index, i0) => {
          return {
            a: "e8a2cbca-0-" + i0,
            b: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: value.icon,
              size: value.size,
              color: "#909399"
            }),
            c: common_vendor.t(value.name),
            d: common_vendor.o(($event) => searchClassify(value))
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/index/classify/classifyIndex.vue"]]);
wx.createComponent(Component);
