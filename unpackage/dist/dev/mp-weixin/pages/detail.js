"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    instance.proxy;
    common_vendor.ref("0");
    const classDetail = common_vendor.ref(
      {
        classId: "12",
        className: "C语言",
        classes: "计算机类",
        teacherId: "003",
        teacher: "高启强",
        imagePath: "http://150.158.87.78:8888/down/tc4Y40JDiNnQ.png",
        startTime: "2023-01-08",
        endTime: "2023-07-08",
        teacherText: "讲师文案",
        signNum: "45",
        classNum: "10",
        classText: "课程文案课程文案课程文案课程文案课程文案课程文案课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案课程文案",
        isJoin: "1"
        // 0未报名，1已报名
      }
    );
    const goToPage = () => {
      common_vendor.wx$1.navigateTo({
        url: `/pages/detailPages/studyIndex`
      });
    };
    common_vendor.ref([
      {
        icon: "chat",
        text: "客服"
      },
      {
        icon: "shop",
        text: "店铺",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "#f5f5f5"
      },
      {
        icon: "cart",
        text: "购物车",
        info: 2
      }
    ]);
    const buttonGroup = common_vendor.ref([
      {
        text: "加入购物车",
        backgroundColor: "linear-gradient(90deg, #1E83FF, #0053B8)",
        color: "#fff"
      },
      {
        text: "立即购买",
        backgroundColor: "linear-gradient(90deg, #60F3FF, #088FEB)",
        color: "#fff"
      }
    ]);
    const studyButtonGroup = common_vendor.ref([
      {
        text: "开始学习",
        backgroundColor: "linear-gradient(90deg, #60F3FF, #088FEB)",
        color: "#fff"
      }
    ]);
    const onClick = (e) => {
      common_vendor.index.showToast({
        title: `加载${e.content.text}信息失败`,
        icon: "none"
      });
    };
    const buttonClick = () => {
      common_vendor.index.showToast({
        title: `加载用户信息失败`,
        icon: "none"
      });
    };
    const isCanStudy = common_vendor.ref(false);
    const IsCanStudy = () => {
      isCanStudy.value = common_vendor.wx$1.getStorageSync("isCanStudy");
    };
    common_vendor.onBeforeMount(() => {
      IsCanStudy();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: classDetail.value.imagePath,
        b: common_vendor.t(classDetail.value.className),
        c: common_vendor.t(classDetail.value.teacher),
        d: common_vendor.t(classDetail.value.classes),
        e: common_vendor.t(classDetail.value.startTime),
        f: common_vendor.t(classDetail.value.endTime),
        g: common_vendor.t(classDetail.value.signNum),
        h: common_vendor.t(classDetail.value.classNum),
        i: common_vendor.t(classDetail.value.teacherText),
        j: common_vendor.t(classDetail.value.classText),
        k: !isCanStudy.value
      }, !isCanStudy.value ? {
        l: common_vendor.o(onClick),
        m: common_vendor.o(($event) => buttonClick()),
        n: common_vendor.p({
          options: _ctx.options,
          fill: true,
          ["button-group"]: buttonGroup.value
        })
      } : {
        o: common_vendor.o(onClick),
        p: common_vendor.o(($event) => goToPage()),
        q: common_vendor.p({
          options: _ctx.options,
          fill: true,
          ["button-group"]: studyButtonGroup.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/detail.vue"]]);
wx.createPage(MiniProgramPage);
