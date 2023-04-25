"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "otherPage3",
  setup(__props) {
    const classData = common_vendor.ref([
      {
        id: "1",
        classId: "1",
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
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
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
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
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
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
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
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
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
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
    const goToDetail = (value) => {
      common_vendor.wx$1.navigateTo({
        url: `/pages/detail`
      });
      common_vendor.wx$1.setStorageSync("classId", value.classId);
      common_vendor.wx$1.setStorageSync("teacherId", value.teacherId);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: classData.value.length
      }, classData.value.length ? {
        b: common_vendor.f(classData.value, (value, index, i0) => {
          return common_vendor.e({
            a: value.imagePath,
            b: common_vendor.t(value.className),
            c: common_vendor.t(value.classes),
            d: common_vendor.t(value.teacher),
            e: common_vendor.t(value.startTime),
            f: common_vendor.t(value.endTime)
          }, {}, {
            o: common_vendor.o(($event) => goToDetail(value))
          });
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/classList/otherPage/otherPage3/otherPage3.vue"]]);
wx.createComponent(Component);
