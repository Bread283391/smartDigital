"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "message",
  setup(__props) {
    const carousel = common_vendor.ref([
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
    const messageData = common_vendor.ref([
      {
        messageTitle: "谷歌急投20亿押注ChatGPT「最强竞品」，GPT-3核心成员出走打造，多方出击抗衡微软",
        messageContent: "",
        imagePath: "http://150.158.87.78:8888/down/adfWegopdVHC.png",
        publisher: "",
        messageTime: "2022-05-25"
      },
      {
        messageTitle: "Twitter之乱：马斯克只相信马斯克",
        messageContent: "",
        imagePath: "http://150.158.87.78:8888/down/nRp0W422yTVU.png",
        publisher: "",
        messageTime: "2022-06-28"
      },
      {
        messageTitle: "TikTok反扑腾讯",
        messageContent: "",
        imagePath: "http://150.158.87.78:8888/down/cRn8BZ7ADs44.png",
        publisher: "",
        messageTime: "2022-07-13"
      },
      {
        messageTitle: "阿里巴巴股价被低估50%？",
        messageContent: "",
        imagePath: "http://150.158.87.78:8888/down/zas2RNjU0m8C.png",
        publisher: "",
        messageTime: "2022-09-22"
      },
      {
        messageTitle: "科技金融“跨界”来袭，城市产业从中如何破局？",
        messageContent: "",
        imagePath: "http://150.158.87.78:8888/down/1AheDcQWk5mb.png",
        publisher: "",
        messageTime: "2022-11-21"
      },
      {
        messageTitle: "市场日报 | 遭股东减持，CRO大白马股价大跌！保险、银行股飙升，CPO概念再爆发！",
        messageContent: "",
        imagePath: "http://150.158.87.78:8888/down/1CHnbcYYeRnN.png",
        publisher: "",
        messageTime: "2023-01-06"
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(carousel.value, (value, k0, i0) => {
          return {
            a: value.imagePath
          };
        }),
        b: messageData.value.length
      }, messageData.value.length ? {
        c: common_vendor.f(messageData.value, (value, index, i0) => {
          return {
            a: value.imagePath,
            b: common_vendor.t(value.messageTitle),
            c: common_vendor.t(value.messageTime)
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Study/JavaProject/uniapp_projects/smartDigital/pages/index/popular/otherPage/message.vue"]]);
wx.createPage(MiniProgramPage);
