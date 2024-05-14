import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"学习笔记","description":"","frontmatter":{"layout":"home","title":"学习笔记","hero":{"name":"中公学习笔记","text":"专注&分享","tagline":"一阶段至五阶段的全部笔记","image":{"src":"/logo.svg","alt":"logo"},"actions":[{"theme":"brand","text":"开始查看","link":"/firstStage/firstStageone"}]},"features":[{"title":"方便快捷","details":"在此网站中只需稍稍点击，即可找到您所需的内容，无需频繁的打开文件夹寻找内容。"},{"title":"易于添加","details":"What ? 这块知识老师没讲到 ? 此时可联系帅小伙添加到本网站。"},{"title":"开源共享","details":"此项目已被帅小伙分别上传至 gitee 和 github 上面，有兴趣可点击右上方前往查看。"},{"title":"联系方式","details":"QQ:1395835033 <br/> 微信(手机号):18291926010"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    let str = ref("Copyright © 2022-" + (/* @__PURE__ */ new Date()).getFullYear() + " WangShen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4458367f><footer data-v-4458367f><p data-v-4458367f>欢迎来到帅小伙的学习笔记网</p><p data-v-4458367f>${ssrInterpolate(unref(str))}</p></footer></div>`);
    };
  }
});
const index_md_vue_type_style_index_0_scoped_4458367f_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4458367f"]]);
export {
  __pageData,
  index as default
};
