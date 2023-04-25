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
  __name: "popularIndex",
  setup(__props) {
    const swiperData = common_vendor.ref([
      {
        id: "001",
        imagePath: "http://150.158.87.78:8888/down/HQvpWY9tdw0w.png"
      },
      {
        id: "001",
        imagePath: "http://150.158.87.78:8888/down/nthgLIqts8WD.png"
      },
      {
        id: "001",
        imagePath: "http://150.158.87.78:8888/down/LEVXqaMZ6eGz.png"
      }
    ]);
    const classData = common_vendor.ref([
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
          url: `/pages/index/popular/otherPage/${url}`
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(swiperData.value, (value, k0, i0) => {
          return {
            a: value.imagePath
          };
        }),
        b: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-message",
          size: "30"
        }),
        c: common_vendor.o(($event) => goToPage("message")),
        d: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-messageShare",
          size: "30"
        }),
        e: common_vendor.o(($event) => goToPage("resourceShare")),
        f: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-qiandao",
          size: "30"
        }),
        g: common_vendor.o(($event) => goToPage("sign-in")),
        h: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-ceping",
          size: "30"
        }),
        i: common_vendor.o(($event) => goToPage("rethink")),
        j: classData.value.length
      }, classData.value.length ? {
        k: common_vendor.f(classData.value, (value, index, i0) => {
          return common_vendor.e({
            a: value.imagePath,
            b: common_vendor.t(value.className),
            c: common_vendor.t(value.classes),
            d: common_vendor.t(value.teacher),
            e: common_vendor.t(value.startTime),
            f: common_vendor.t(value.endTime)
          }, {}, {
            o: value.price !== "0"
          }, value.price !== "0" ? {
            p: common_vendor.t(value.price)
          } : {}, {
            q: common_vendor.o(($event) => goToDetail(value))
          });
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/index/popular/popularIndex.vue"]]);
wx.createComponent(Component);
