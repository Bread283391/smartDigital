"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "myClassPage",
  setup(__props) {
    const classData = common_vendor.ref$1([
      {
        id: "1",
        classId: "12",
        className: "C语言",
        teacherId: "003",
        teacher: "高启强",
        classes: "计算机类",
        imagePath: "http://150.158.87.78:8888/down/tc4Y40JDiNnQ.png",
        startTime: "2023-01-08",
        endTime: "2023-07-08",
        price: "0",
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
        price: "39",
        isJoin: "1",
        // 0未报名，1已报名
        status: "0",
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
        price: "39",
        price: "39",
        isJoin: "1",
        // 0未报名，1已报名
        status: "2",
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
        price: "39",
        isJoin: "1",
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
        price: "39",
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
      if (value.price === "0") {
        common_vendor.wx$1.setStorageSync("isCanStudy", true);
      } else {
        common_vendor.wx$1.setStorageSync("isCanStudy", false);
      }
    };
    const goToPage = (url) => {
      if (url !== "") {
        common_vendor.index.navigateTo({
          url: `/pages/classList/otherPage/myClassPage/${url}`
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-book",
          size: "30"
        }),
        b: common_vendor.o(($event) => goToPage("myClass/studying")),
        c: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-unStudy",
          size: "30"
        }),
        d: common_vendor.o(($event) => goToPage("myClass/unStudy")),
        e: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-finish",
          size: "30"
        }),
        f: common_vendor.o(($event) => goToPage("myClass/finish")),
        g: common_vendor.unref(classData).length
      }, common_vendor.unref(classData).length ? {
        h: common_vendor.f(common_vendor.unref(classData), (value, index, i0) => {
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/classList/otherPage/myClassPage/myClassPage.vue"]]);
wx.createComponent(Component);
