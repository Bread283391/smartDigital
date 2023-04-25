"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_icons2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_collapse_item = () => "../../../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_collapse_item + _easycom_uni_collapse)();
}
const _sfc_main = {
  __name: "study",
  setup(__props) {
    const classCatalog = common_vendor.ref$1([
      {
        name: "第一章：1",
        children: [
          {
            name: "第一节：1"
          },
          {
            name: "第二节：2"
          },
          {
            name: "第三节：3"
          },
          {
            name: "第四节：4"
          }
        ]
      },
      {
        name: "第二章：2",
        children: [
          {
            name: "第一节：1"
          },
          {
            name: "第二节：2"
          },
          {
            name: "第三节：3"
          },
          {
            name: "第四节：4"
          }
        ]
      },
      {
        name: "第三章：3",
        children: [
          {
            name: "第一节：1"
          },
          {
            name: "第二节：2"
          },
          {
            name: "第三节：3"
          },
          {
            name: "第四节：4"
          }
        ]
      }
    ]);
    const goToPage = (value) => {
      common_vendor.wx$1.navigateTo({
        url: "/pages/detailPages/studyResource/study/playVideo/playVideo"
      });
      common_vendor.wx$1.setStorageSync("videoId", value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(classCatalog), (value1, k0, i0) => {
          return common_vendor.e({
            a: value1.children.length
          }, value1.children.length ? {
            b: common_vendor.f(value1.children, (value2, k1, i1) => {
              return {
                a: "fdd8e5f8-2-" + i0 + "-" + i1 + "," + ("fdd8e5f8-1-" + i0),
                b: common_vendor.t(value2.name)
              };
            }),
            c: common_vendor.p({
              type: "videocam-filled",
              size: "20"
            }),
            d: common_vendor.o(($event) => goToPage())
          } : {}, {
            e: "fdd8e5f8-1-" + i0 + ",fdd8e5f8-0",
            f: common_vendor.p({
              title: value1.name
            })
          });
        }),
        b: common_vendor.p({
          accordion: "true"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/detailPages/studyResource/study/study.vue"]]);
wx.createComponent(Component);
