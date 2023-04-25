"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "myStudy",
  setup(__props) {
    const user = common_vendor.ref({
      userId: "11321",
      userName: "别卷了小东",
      userImage: "/static/images/other/Keqing.jpg"
    });
    const goToPage = (value) => {
      common_vendor.wx$1.navigateTo({
        url: `/pages/myStudy/otherPages/${value}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: user.value.userImage,
        b: common_vendor.t(user.value.userName),
        c: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#909399"
        }),
        d: common_vendor.o(($event) => goToPage("studyHistory")),
        e: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-daifukuan",
          size: "27"
        }),
        f: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-daifahuo",
          size: "30"
        }),
        g: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-daishouhuo",
          size: "30"
        }),
        h: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-daipingjia",
          size: "30"
        }),
        i: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "icon-shouhou",
          size: "27"
        }),
        j: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#909399"
        }),
        k: common_vendor.o(($event) => goToPage("shop")),
        l: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#909399"
        }),
        m: common_vendor.o(($event) => goToPage("help")),
        n: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#909399"
        }),
        o: common_vendor.o(($event) => goToPage("about")),
        p: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#909399"
        }),
        q: common_vendor.o(($event) => goToPage("systemSettings")),
        r: common_vendor.p({
          type: "forward",
          size: "20",
          color: "#909399"
        }),
        s: common_vendor.o(($event) => goToPage("problem"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/myStudy/myStudy.vue"]]);
wx.createPage(MiniProgramPage);
