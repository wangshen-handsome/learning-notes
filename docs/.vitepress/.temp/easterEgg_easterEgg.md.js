import { defineComponent, ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/singer.1971520f.jpg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "easterEgg",
  __ssrInlineRender: true,
  setup(__props) {
    let isRotate = ref("paused");
    let str = ref("");
    let lineLoading = ref("running");
    let lineColor = ref("#10b981");
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--1e9057ba": unref(isRotate),
        "--16edf1da": unref(lineColor),
        "--229e3c1a": unref(lineLoading)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "easter-egg" }, _attrs, _cssVars))} data-v-05f9cd17><h1 data-v-05f9cd17>欢迎来到彩蛋页(点击音乐盘可播放音乐哦)</h1><div class="audio" data-v-05f9cd17><audio src="/music.mp3" data-v-05f9cd17></audio><img class="img"${ssrRenderAttr("src", _imports_0)} title="点击暂停/播放" data-v-05f9cd17></div><div class="content" data-v-05f9cd17>${ssrInterpolate(unref(str))}</div></div>`);
    };
  }
});
const easterEgg_vue_vue_type_style_index_0_scoped_05f9cd17_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/easterEgg/easterEgg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const easterEgg = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-05f9cd17"]]);
const __pageData = JSON.parse('{"title":"彩蛋","description":"","frontmatter":{"layout":"easterEgg","title":"彩蛋"},"headers":[],"relativePath":"easterEgg/easterEgg.md","filePath":"easterEgg/easterEgg.md"}');
const __default__ = { name: "easterEgg/easterEgg.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(easterEgg, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("easterEgg/easterEgg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
