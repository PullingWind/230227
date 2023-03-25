"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      mcl: "",
      mcl1: "",
      mcl2: "",
      atk: "",
      atk1: "",
      atk2: "",
      atk3: "",
      atk4: "",
      db: "",
      db1: "",
      db2: "",
      cb: "",
      cb1: "",
      cb2: "",
      rxn: "",
      rxn1: "",
      rxn2: "",
      rst: "",
      rst1: "",
      rst2: "",
      def: "",
      def1: "",
      def2: "",
      def3: "",
      def4: "",
      inputValue: ""
    };
  },
  methods: {
    bindKeyInput: function(e) {
      this.setData({
        inputValue: e.detail.value
      });
    }
  }
  // atkChange: function(e) {
  // 	this.setData({
  // 		// ATK: e.detail.value
  // 	})
  // },
  // countForAtk: function() {
  // 	var num1 = this.data.atk1;
  // 	var num2 = this.data.atk2;
  // 	var num3 = this.data.atk3;
  // 	var num4 = this.data.atk4;
  // 	this.setData({
  // 		atk: num2 * 1 + num1 * num3 + num4 * 1
  // 		// atk: atk2 * 1 + atk1 * atk3 + atk4 * 1
  // 	})
  // }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.mcl1),
    b: common_vendor.t($data.atk),
    c: common_vendor.t(1 + $data.db1 * 1 + $data.db2 * 1),
    d: common_vendor.t(1 + $data.cb1 * 1 + $data.cb2 * 1),
    e: common_vendor.t($data.rxn1 * (1 + $data.rxn2 * 1)),
    f: common_vendor.t($data.rst),
    g: common_vendor.t($data.def),
    h: common_vendor.t($data.inputValue)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/WorkSpace/HBuilderX/PillowingMoon/pages/counter/counter.vue"]]);
wx.createPage(MiniProgramPage);
