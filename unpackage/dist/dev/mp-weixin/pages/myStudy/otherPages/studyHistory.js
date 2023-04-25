"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "studyHistory",
  setup(__props) {
    const classData = common_vendor.ref([
      {
        id: "1",
        classId: "1",
        userId: "001",
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
        studyHistory: "第3章第5节",
        imagePath: "/static/images/other/Keqing.jpg",
        startTime: "2023-01-08",
        endTime: "2023-07-08",
        isJoin: "0",
        // 0未报名，1已报名
        status: "1",
        // 0未开始，1进行中，2已结束
        flag: "1"
        // 0课程上线，1课程下线
      },
      {
        id: "1",
        classId: "12",
        userId: "001",
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
        studyHistory: "第3章第5节",
        imagePath: "/static/images/other/Keqing.jpg",
        startTime: "2023-01-08",
        endTime: "2023-07-08",
        isJoin: "1",
        // 0未报名，1已报名
        status: "0",
        // 0未开始，1进行中，2已结束
        flag: "1"
        // 0课程上线，1课程下线
      },
      {
        id: "1",
        classId: "123",
        userId: "001",
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
        studyHistory: "第3章第5节",
        imagePath: "/static/images/other/Keqing.jpg",
        startTime: "2023-01-08",
        endTime: "2023-07-08",
        isJoin: "1",
        // 0未报名，1已报名
        status: "2",
        // 0未开始，1进行中，2已结束
        flag: "1"
        // 0课程上线，1课程下线
      },
      {
        id: "1",
        classId: "1234",
        userId: "001",
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
        studyHistory: "第3章第5节",
        imagePath: "/static/images/other/Keqing.jpg",
        startTime: "2023-01-08",
        endTime: "2023-07-08",
        isJoin: "1",
        // 0未报名，1已报名
        status: "1",
        // 0未开始，1进行中，2已结束
        flag: "1"
        // 0课程上线，1课程下线
      },
      {
        id: "1",
        classId: "12345",
        userId: "001",
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
        studyHistory: "第3章第5节",
        imagePath: "/static/images/other/Keqing.jpg",
        startTime: "2023-01-08",
        endTime: "2023-07-08",
        isJoin: "0",
        // 0未报名，1已报名
        status: "1",
        // 0未开始，1进行中，2已结束
        flag: "1"
        // 0课程上线，1课程下线
      }
    ]);
    const goToDetail = (value, index) => {
      common_vendor.wx$1.navigateTo({
        url: `/pages/detail`
      });
      common_vendor.wx$1.setStorageSync("classId", value.classId);
      common_vendor.wx$1.setStorageSync("teacherId", value.teacherId);
      if (classData.value[index].isStudyToday === "0") {
        classData.value[index].isStudyToday = "1";
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classData.value, (value, index, i0) => {
          return common_vendor.e({
            a: classData.value.length && value.isJoin === "1" && value.status === "1"
          }, classData.value.length && value.isJoin === "1" && value.status === "1" ? {
            b: value.imagePath,
            c: common_vendor.t(value.className),
            d: common_vendor.t(value.studyHistory),
            e: common_vendor.t(value.classes),
            f: common_vendor.t(value.teacher),
            g: common_vendor.t(value.startTime),
            h: common_vendor.t(value.endTime),
            i: common_vendor.o(($event) => goToDetail(value, index)),
            j: "933d23ee-0-" + i0,
            k: common_vendor.p({
              ["is-shadow"]: "true",
              spacing: "20rpx"
            })
          } : {});
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/myStudy/otherPages/studyHistory.vue"]]);
wx.createPage(MiniProgramPage);
