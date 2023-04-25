"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (myClassPage + otherPage1 + otherPage2 + otherPage3 + otherPage4)();
}
const otherPage1 = () => "./otherPage/otherPage1/otherPage1.js";
const otherPage2 = () => "./otherPage/otherPage2/otherPage2.js";
const otherPage3 = () => "./otherPage/otherPage3/otherPage3.js";
const otherPage4 = () => "./otherPage/otherPage4/otherPage4.js";
const myClassPage = () => "./otherPage/myClassPage/myClassPage.js";
const _sfc_main = {
  __name: "classList",
  setup(__props) {
    const page = common_vendor.ref("myClassPage");
    const goToPage = (value) => {
      page.value = value;
    };
    const topBar = common_vendor.ref([
      {
        name: "我的课程",
        page: "myClassPage"
      },
      {
        name: "人气课程",
        page: "otherPage1"
      },
      {
        name: "名师讲解",
        page: "otherPage2"
      },
      {
        name: "专项培训",
        page: "otherPage3"
      },
      {
        name: "竞赛指导",
        page: "otherPage4"
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(topBar.value, (value, k0, i0) => {
          return common_vendor.e({
            a: value.page === page.value
          }, value.page === page.value ? {
            b: common_vendor.t(value.name)
          } : {
            c: common_vendor.t(value.name),
            d: common_vendor.o(($event) => goToPage(value.page))
          });
        }),
        b: page.value === "myClassPage"
      }, page.value === "myClassPage" ? {} : page.value === "otherPage1" ? {} : page.value === "otherPage2" ? {} : page.value === "otherPage3" ? {} : page.value === "otherPage4" ? {} : {}, {
        c: page.value === "otherPage1",
        d: page.value === "otherPage2",
        e: page.value === "otherPage3",
        f: page.value === "otherPage4"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/classList/classList.vue"]]);
wx.createPage(MiniProgramPage);
