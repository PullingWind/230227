if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/intro/intro",
          "open-type": "reLaunch"
        }, [
          vue.createElementVNode("button", { class: "index-btn" }, "点击跳转")
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/WorkSpace/HBuilderX/PillowingMoon/pages/index/index.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container-intro" }, [
      vue.createElementVNode("view", null, [
        vue.createElementVNode("image", {
          class: "intro-img",
          src: "/static/images/Raiden Shogun.jpeg",
          mode: "widthFix"
        })
      ]),
      vue.createElementVNode("view", { style: { "text-align": "center" } }, [
        vue.createElementVNode("text", null, "使用说明\\n")
      ]),
      vue.createElementVNode("view", { class: "intro-box" }, [
        vue.createElementVNode("text", null, "请务必将所有用得到的数据填写完整\\n"),
        vue.createElementVNode("text", null, "目前暂不支持百分比输入，请自行转化为小数，例如[1024%=>10.24]\\n"),
        vue.createElementVNode("text", null, "额外倍率指的是超激化、蔓激化、云堇Q、申鹤E等数值型提升，受到除攻击外的其它乘区影响\\n"),
        vue.createElementVNode("text", null, "敌人的抗性多为10%，流浪者机甲虚弱状态下雷系抗性为-80%，其它抗性为-140%\\n"),
        vue.createElementVNode("text", null, "多个减抗系数之间为相加关系\\n"),
        vue.createElementVNode("text", null, "多个减防系数之间为相乘关系\\n"),
        vue.createElementVNode("text", null, "\\n"),
        vue.createElementVNode("text", null, "作者很懒，只制作了单次攻击的伤害计算功能\\n"),
        vue.createElementVNode("text", null, "根据伤害类型限制反应类型（未实现）\\n"),
        vue.createElementVNode("text", null, "敌人抗性通过下拉选择框进行选择（未实现）\\n"),
        vue.createElementVNode("text", null, "导入等级所对应的激化反应系数（未实现）\\n"),
        vue.createElementVNode("text", null, "暂时就先这样\\n")
      ])
    ]);
  }
  const PagesIntroIntro = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/WorkSpace/HBuilderX/PillowingMoon/pages/intro/intro.vue"]]);
  const _sfc_main$1 = {
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
        rst3: "",
        def: "",
        def1: "",
        def2: "",
        def3: "",
        def4: "",
        def5: "",
        result: "请输入各项必要数值",
        inputValue: ""
      };
    },
    methods: {
      // 倍率
      mclChange() {
        if (this.mcl1 < 0 || this.mcl2 < 0) {
          this.mcl = "输入错误";
        } else {
          this.mcl = this.mcl1 * 1;
        }
      },
      // 攻击
      atkChange() {
        if (this.atk1 < 0 || this.atk2 < 0 || this.atk3 < 0 || this.atk4 < 0) {
          this.atk = "输入错误";
        } else {
          this.atk = this.atk2 * 1 + this.atk1 * this.atk3 + this.atk4 * 1;
        }
      },
      // 增伤
      dbChange() {
        if (this.db1 < 0 || this.db2 < 0) {
          this.db = "输入错误";
        } else {
          this.db = 1 + this.db1 * 1 + this.db2 * 1;
        }
      },
      // 暴击
      cbChange() {
        if (this.cb1 < 0 || this.cb2 < 0) {
          this.cb = "输入错误";
        } else {
          this.cb = 1 + this.cb1 * 1 + this.cb2 * 1;
        }
      },
      // 反应
      rxnChange() {
        if (this.rxn1 < 0 || this.rxn2 < 0) {
          this.rxn = "输入错误";
        } else {
          this.rxn = this.rxn1 * (1 + this.rxn2 * 1);
        }
      },
      // 抗性
      rstChange() {
        this.rst3 = this.rst1 * 1 + this.rst2 * 1;
        if (this.rst3 >= 0 && this.rst3 <= 0.75) {
          this.rst = 1 - this.rst3 * 1;
        } else if (this.rst3 < 0) {
          this.rst = 1 - this.rst3 / 2;
        } else {
          this.rst = 1 - this.rst3 * 4 / (1 + this.rst3 * 4);
        }
      },
      // 防御
      defChange() {
        if (this.def1 < 0 || this.def2 < 0 || this.def3 < 0 || this.defdef4 < 0) {
          this.def = "输入错误";
        } else {
          this.def5 = (this.def2 * 5 + 500) * (1 - this.def3) * (1 - this.def4);
          this.def = 1 - this.def5 / (this.def1 * 5 + 500 + this.def5 * 1);
        }
      },
      // 结果
      countForValue() {
        if (typeof this.mcl != "number" || typeof this.atk != "number" || typeof this.db != "number" || typeof this.cb != "number" || typeof this.rxn != "number" || typeof this.rst != "number" || typeof this.def != "number") {
          this.result = "请检查各项数值是否正确";
        } else {
          this.result = (this.mcl * this.atk + this.mcl2 * 1) * this.db * this.cb * this.rxn * this.rst * this.def;
        }
      }
    },
    filters: {
      numFilter(value) {
        let realVal = parseFloat(value).toFixed(2);
        return realVal;
      },
      formatPrice(data) {
        if (typeof data === "number") {
          return parseFloat(data).toFixed(2);
        }
        return 0;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "container-counter" }, [
        vue.createElementVNode("view", { class: "counter-box-1" }, [
          vue.createCommentVNode(" Multiplication "),
          vue.createElementVNode(
            "text",
            { class: "counter-lable" },
            "倍率乘区：" + vue.toDisplayString($data.mcl),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "技能倍率"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.mcl1 = $event),
                  onBlur: _cache[1] || (_cache[1] = (...args) => $options.mclChange && $options.mclChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.mcl1]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "额外数值"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.mcl2 = $event),
                  onBlur: _cache[3] || (_cache[3] = (...args) => $options.mclChange && $options.mclChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.mcl2]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "counter-box" }, [
          vue.createCommentVNode(" Attack "),
          vue.createElementVNode(
            "text",
            { class: "counter-lable" },
            "攻击乘区：" + vue.toDisplayString($data.atk),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "基础攻击力"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.atk1 = $event),
                  onBlur: _cache[5] || (_cache[5] = (...args) => $options.atkChange && $options.atkChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.atk1]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "面版攻击力"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.atk2 = $event),
                  onBlur: _cache[7] || (_cache[7] = (...args) => $options.atkChange && $options.atkChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.atk2]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "额外百分比"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.atk3 = $event),
                  onBlur: _cache[9] || (_cache[9] = (...args) => $options.atkChange && $options.atkChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.atk3]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "额外数值"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.atk4 = $event),
                  onBlur: _cache[11] || (_cache[11] = (...args) => $options.atkChange && $options.atkChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.atk4]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "counter-box" }, [
          vue.createCommentVNode(" Damage Bonus "),
          vue.createElementVNode(
            "text",
            { class: "counter-lable" },
            "增伤乘区：" + vue.toDisplayString($data.db),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "面版伤害加成"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.db1 = $event),
                  onBlur: _cache[13] || (_cache[13] = (...args) => $options.dbChange && $options.dbChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.db1]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "额外伤害加成"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.db2 = $event),
                  onBlur: _cache[15] || (_cache[15] = (...args) => $options.dbChange && $options.dbChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.db2]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "伤害类型"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "已弃置",
                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.db3 = $event),
                  onBlur: _cache[17] || (_cache[17] = (...args) => $options.dbChange && $options.dbChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, _ctx.db3]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "counter-box-1" }, [
          vue.createCommentVNode(" Critical Blow "),
          vue.createElementVNode(
            "text",
            { class: "counter-lable" },
            "暴伤乘区：" + vue.toDisplayString($data.cb),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "面版暴伤加成"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $data.cb1 = $event),
                  onBlur: _cache[19] || (_cache[19] = (...args) => $options.cbChange && $options.cbChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.cb1]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "额外暴伤加成"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $data.cb2 = $event),
                  onBlur: _cache[21] || (_cache[21] = (...args) => $options.cbChange && $options.cbChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.cb2]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "counter-box-1" }, [
          vue.createCommentVNode(" Reaction "),
          vue.createElementVNode(
            "text",
            { class: "counter-lable" },
            "反应乘区：" + vue.toDisplayString($data.rxn),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "反应倍率"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $data.rxn1 = $event),
                  onBlur: _cache[23] || (_cache[23] = (...args) => $options.rxnChange && $options.rxnChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.rxn1]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "精通加成系数"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $data.rxn2 = $event),
                  onBlur: _cache[25] || (_cache[25] = (...args) => $options.rxnChange && $options.rxnChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.rxn2]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "counter-box-1" }, [
          vue.createCommentVNode(" Resistance "),
          vue.createElementVNode(
            "text",
            { class: "counter-lable" },
            "抗性乘区：" + vue.toDisplayString($data.rst),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "测试对象抗性"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => $data.rst1 = $event),
                  onBlur: _cache[27] || (_cache[27] = (...args) => $options.rstChange && $options.rstChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.rst1]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "减抗系数"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => $data.rst2 = $event),
                  onBlur: _cache[29] || (_cache[29] = (...args) => $options.rstChange && $options.rstChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.rst2]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "counter-box" }, [
          vue.createCommentVNode(" Defense "),
          vue.createElementVNode(
            "text",
            { class: "counter-lable" },
            "防御乘区：" + vue.toDisplayString($data.def),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "角色等级"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $data.def1 = $event),
                  onBlur: _cache[31] || (_cache[31] = (...args) => $options.defChange && $options.defChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.def1]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "敌人等级"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => $data.def2 = $event),
                  onBlur: _cache[33] || (_cache[33] = (...args) => $options.defChange && $options.defChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.def2]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "counter-box-2" }, [
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "降低防御系数"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => $data.def3 = $event),
                  onBlur: _cache[35] || (_cache[35] = (...args) => $options.defChange && $options.defChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.def3]
              ])
            ]),
            vue.createElementVNode("view", { class: "counter-box-3" }, [
              vue.createElementVNode("text", { class: "counter-lable-2" }, "无视防御系数"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "digit",
                  placeholder: "请输入",
                  "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => $data.def4 = $event),
                  onBlur: _cache[37] || (_cache[37] = (...args) => $options.defChange && $options.defChange(...args))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, $data.def4]
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { style: { "text-align": "center" } }, [
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($data.result),
            1
            /* TEXT */
          ),
          vue.createElementVNode("button", {
            class: "counter-btn",
            onClick: _cache[38] || (_cache[38] = (...args) => $options.countForValue && $options.countForValue(...args))
          }, "计算")
        ]),
        vue.createElementVNode("view", { style: { "text-align": "center" } }, [
          vue.createElementVNode(
            "text",
            null,
            "过滤器测试：" + vue.toDisplayString($data.def | _ctx.numFilter),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const PagesCounterCounter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/WorkSpace/HBuilderX/PillowingMoon/pages/counter/counter.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/intro/intro", PagesIntroIntro);
  __definePage("pages/counter/counter", PagesCounterCounter);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/WorkSpace/HBuilderX/PillowingMoon/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
