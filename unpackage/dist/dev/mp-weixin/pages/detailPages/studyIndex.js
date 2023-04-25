"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(study) + common_vendor.unref(discuss) + common_vendor.unref(talkToTeacher))();
}
const discuss = () => "./studyResource/discuss/discuss.js";
const study = () => "./studyResource/study/study.js";
const talkToTeacher = () => "./studyResource/talkToTeacher/talkToTeacher.js";
const _sfc_main = {
  __name: "studyIndex",
  setup(__props) {
    const items = common_vendor.ref([
      {
        name: "学习目录",
        page: "study"
      },
      {
        name: "课堂讨论",
        page: "discuss"
      },
      {
        name: "名师互动",
        page: "talkToTeacher"
      }
    ]);
    const classData = common_vendor.ref(
      {
        classId: "12",
        className: "C语言",
        grade: "0",
        studied: "0"
      }
    );
    const page = common_vendor.ref("study");
    const showPage = (value) => {
      page.value = value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(classData.value.className),
        b: common_vendor.t(classData.value.grade),
        c: common_vendor.t(classData.value.studied),
        d: common_vendor.f(items.value, (value, k0, i0) => {
          return common_vendor.e({
            a: page.value === value.page
          }, page.value === value.page ? {
            b: common_vendor.t(value.name),
            c: common_vendor.o(($event) => showPage(value.page))
          } : {
            d: common_vendor.t(value.name),
            e: common_vendor.o(($event) => showPage(value.page))
          });
        }),
        e: page.value === "study"
      }, page.value === "study" ? {} : page.value === "discuss" ? {} : page.value === "talkToTeacher" ? {} : {}, {
        f: page.value === "discuss",
        g: page.value === "talkToTeacher"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/detailPages/studyIndex.vue"]]);
wx.createPage(MiniProgramPage);
