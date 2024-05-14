import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"四阶段 | 第十七天","description":"","frontmatter":{"layout":"fourthStageseventeen","title":"四阶段 | 第十七天"},"headers":[],"relativePath":"fourthStage/fourthStageseventeen.md","filePath":"fourthStage/fourthStageseventeen.md"}');
const _sfc_main = { name: "fourthStage/fourthStageseventeen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="暂无笔记-如果您有此笔记-请联系作者。" tabindex="-1">暂无笔记,如果您有此笔记,请联系作者。 <a class="header-anchor" href="#暂无笔记-如果您有此笔记-请联系作者。" aria-label="Permalink to &quot;暂无笔记,如果您有此笔记,请联系作者。&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fourthStage/fourthStageseventeen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fourthStageseventeen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fourthStageseventeen as default
};
