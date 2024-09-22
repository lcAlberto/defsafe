import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "guest",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-00f5ef00><div class="h-screen mx-auto bg-base-100" data-v-00f5ef00>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/guest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00f5ef00"]]);

export { guest as default };
//# sourceMappingURL=guest-Dukxcq9G.mjs.map
