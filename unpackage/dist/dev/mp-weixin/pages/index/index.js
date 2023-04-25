"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_search_bar + popularIndex + classifyIndex)();
}
const popularIndex = () => "./popular/popularIndex.js";
const classifyIndex = () => "./classify/classifyIndex.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const page = common_vendor.ref("popularIndex");
    const goToPage = (pageName) => {
      page.value = pageName;
    };
    const topBar = [
      {
        name: "主页",
        page: "popularIndex"
      },
      // {
      // 	name:"精选课程",
      // 	page:"curationIndex"
      // },
      {
        name: "课程分类",
        page: "classifyIndex"
      }
    ];
    const searchContent = common_vendor.ref("");
    const search = (value) => {
      if (value === "") {
        common_vendor.index.showToast({
          title: "搜索内容不能为空！",
          icon: "none"
        });
      } else {
        common_vendor.wx$1.navigateTo({
          url: `/pages/index/searchResult`
        });
        common_vendor.wx$1.setStorageSync("searchValue", value);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => search(searchContent.value)),
        b: common_vendor.o(($event) => searchContent.value = $event),
        c: common_vendor.p({
          placeholder: "搜索",
          clearButton: "auto",
          cancelButton: "none",
          modelValue: searchContent.value
        }),
        d: common_vendor.o(($event) => search(searchContent.value)),
        e: common_vendor.f(topBar, (value, k0, i0) => {
          return common_vendor.e({
            a: page.value === value.page
          }, page.value === value.page ? {
            b: common_vendor.t(value.name)
          } : {
            c: common_vendor.t(value.name)
          }, {
            d: common_vendor.o(($event) => goToPage(value.page))
          });
        }),
        f: page.value === "popularIndex"
      }, page.value === "popularIndex" ? {} : page.value === "classifyIndex" ? {} : {}, {
        g: page.value === "classifyIndex"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
