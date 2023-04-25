"use strict";const e=require("../../../../common/vendor.js"),t={name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:()=>({isOpen:!1,isheight:null,height:0,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,nameSync:0}),watch:{open(e){this.isOpen=e,this.onClick(e,"init")}},updated(e){this.$nextTick((()=>{this.init(!0)}))},created(){this.collapse=this.getCollapse(),this.oldHeight=0,this.onClick(this.open,"init")},unmounted(){this.__isUnmounted=!0,this.uninstall()},mounted(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):console.warn(`name 值 ${this.nameSync} 重复`),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init(e){this.getCollapseHeight(e)},uninstall(){this.collapse&&(this.collapse.childrens.forEach(((e,t)=>{e===this&&this.collapse.childrens.splice(t,1)})),this.collapse.names.forEach(((e,t)=>{e===this.nameSync&&this.collapse.names.splice(t,1)})))},onClick(e,t){this.disabled||(this.isOpen=e,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==t&&this.collapse.onChange(e,this))},getCollapseHeight(t,i=0){e.index.createSelectorQuery().in(this).select(`#${this.elId}`).fields({size:!0},(e=>{if(!(i>=10)){if(!e)return i++,void this.getCollapseHeight(!1,i);this.height=e.height,this.isheight=!0,t||this.onClick(this.isOpen,"init")}})).exec()},getNvueHwight(e){dom.getComponentRect(this.$refs["collapse--hook"],(t=>{if(t&&t.result&&t.size){if(this.height=t.size.height,this.isheight=!0,e)return;this.onClick(this.open,"init")}}))},getCollapse(e="uniCollapse"){let t=this.$parent,i=t.$options.name;for(;i!==e;){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}};if(!Array){e.resolveComponent("uni-icons")()}Math;const i=e._export_sfc(t,[["render",function(t,i,s,n,h,o){return e.e({a:s.thumb},s.thumb?{b:s.thumb}:{},{c:e.t(s.title),d:s.disabled?1:"",e:s.showArrow},s.showArrow?{f:e.p({color:s.disabled?"#ddd":"#bbb",size:"14",type:"bottom"}),g:h.isOpen?1:"",h:!0===s.showAnimation?1:""}:{},{i:e.o((e=>o.onClick(!h.isOpen))),j:h.isOpen&&"auto"===s.titleBorder?1:"",k:"none"!==s.titleBorder?1:"",l:h.elId,m:h.isheight?1:"",n:s.border&&h.isOpen?1:"",o:s.showAnimation?1:"",p:(h.isOpen?h.height:0)+"px"})}]]);wx.createComponent(i);