import { useSSRContext, defineComponent, mergeProps, unref, ref, inject, computed, openBlock, createElementBlock, renderSlot, createCommentVNode, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { PhCat } from '@phosphor-icons/vue';
import { u as useAuthStore } from './authStore-CYv3PTET.mjs';
import { u as useCatStore } from './catsStore-B8AXD8Ym.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@kyvg/vue3-notification';
import '@supabase/supabase-js';
import './cookie-BtMhqDlC.mjs';
import './use-notify-Bfz9ZjHx.mjs';

const y = ["width", "height", "fill", "transform"], A = { key: 0 }, Z = /* @__PURE__ */ createElementVNode("path", { d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z" }, null, -1), f = [
  Z
], w = { key: 1 }, M = /* @__PURE__ */ createElementVNode("path", {
  d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
  opacity: "0.2"
}, null, -1), k = /* @__PURE__ */ createElementVNode("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z" }, null, -1), S = [
  M,
  k
], x = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z" }, null, -1), C = [
  z
], L = { key: 3 }, B = /* @__PURE__ */ createElementVNode("path", { d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z" }, null, -1), N = [
  B
], b = { key: 4 }, E = /* @__PURE__ */ createElementVNode("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z" }, null, -1), P = [
  E
], W = { key: 5 }, $ = /* @__PURE__ */ createElementVNode("path", { d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z" }, null, -1), j = [
  $
], O = {
  name: "PhSignOut"
}, F = /* @__PURE__ */ defineComponent({
  ...O,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(r) {
    const s = r, d = inject("weight", "regular"), c = inject("size", "1em"), _ = inject("color", "currentColor"), u = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : d;
    }), i = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : c;
    }), p = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : _;
    }), m = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (h, q) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: m.value
    }, h.$attrs), [
      renderSlot(h.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", A, f)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", w, S)) : a.value === "fill" ? (openBlock(), createElementBlock("g", x, C)) : a.value === "light" ? (openBlock(), createElementBlock("g", L, N)) : a.value === "regular" ? (openBlock(), createElementBlock("g", b, P)) : a.value === "thin" ? (openBlock(), createElementBlock("g", W, j)) : createCommentVNode("", true)
    ], 16, y));
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarComponent",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconSignOut = F;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-72 max-w-80 border border-base bg-base-100 h-full" }, _attrs))}><div class="flex justify-start items-center gap-3 py-5 px-3 text-primary">`);
      _push(ssrRenderComponent(unref(PhCat), {
        size: 32,
        weight: "fill"
      }, null, _parent));
      _push(`<p class="text-lg"> Cat adoption plataform </p><hr></div><div class="h-full px-5 pt-10"><p class="text-md uppercase text-base-300 font-bold"> Main Menu </p><ul class="p-5 h-full flex flex-col justify-between"><li class="flex gap-4 text-primary items-center hover:bg-purple-200 px-2 py-3 rounded-lg cursor-pointer">`);
      _push(ssrRenderComponent(unref(PhCat), {
        size: 20,
        weight: "fill"
      }, null, _parent));
      _push(`<span>Cat List</span></li><li class="flex gap-4 text-primary items-center hover:bg-purple-200 px-2 py-3 rounded-lg cursor-pointer">`);
      _push(ssrRenderComponent(_component_PhosphorIconSignOut, {
        size: 20,
        weight: "fill"
      }, null, _parent));
      _push(`<span>Logout</span></li></ul></div></aside>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SidebarComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RegisterCatModal",
  __ssrInlineRender: true,
  setup(__props) {
    useCatStore();
    ref(false);
    const form = ref({
      image: "",
      name: "",
      description: ""
    });
    const errors = ref({
      image: "",
      name: "",
      description: ""
    });
    ref("");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><button class="btn btn-primary"> Register New Cat </button><div><dialog id="new-cat-modal" class="modal p-5"><div class="modal-box w-full sm:w-11/12 md:w-1/2 xl:w-1/3 max-w-5xl"><div class="full"><div class=""><h3 class="text-lg font-bold mb-2"> Register new Cat </h3><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500"> \u2715 </button></form><hr></div><div class="p-5 max-h-[70vh] overflow-auto"><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Image</span></span><input${ssrRenderAttr("value", form.value.image)} class="${ssrRenderClass([{ "is-invalid": errors.value.image }, "input w-full focus:outline-0 focus:border-primary placeholder:text-base-300 input-bordered"])}" placeholder="Enter your full name" type="text">`);
      if (errors.value.image) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(errors.value.image)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Full name</span></span><input${ssrRenderAttr("value", form.value.name)} class="${ssrRenderClass([{ "is-invalid": errors.value.name }, "input w-full focus:outline-0 focus:border-primary placeholder:text-base-300 input-bordered"])}" placeholder="Enter your full name" type="text">`);
      if (errors.value.name) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(errors.value.name)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Why would you want to adopt this cat?</span></span><textarea class="${ssrRenderClass([{ "is-invalid": errors.value.description }, "textarea w-full focus:outline-0 focus:border-primary placeholder:text-base-300 input-bordered"])}" placeholder="Write here..." rows="5">${ssrInterpolate(form.value.description)}</textarea>`);
      if (errors.value.description) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(errors.value.description)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div><div class="modal-action"><form method="dialog"><button class="btn"> Cancel </button></form><button class="btn btn-primary"> Save </button></div></div></div></dialog></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cats/RegisterCatModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavbarComponent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row items-center justify-between px-5 h-20" }, _attrs))}><div class="flex justify-start items-center gap-2 py-5 px-3"><button class="btn btn-ghost px-4 py-1">`);
      _push(ssrRenderComponent(unref(PhCat), {
        size: 20,
        class: "text-primary",
        weight: "fill"
      }, null, _parent));
      _push(`</button><h1 class="text-lg bold"> Cat List </h1><hr></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavbarComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_sidebar_component = _sfc_main$3;
  const _component_navbar_component = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full w-full bg-gray-100" }, _attrs))}><div class="hidden md:block">`);
  _push(ssrRenderComponent(_component_sidebar_component, null, null, _parent));
  _push(`</div><main class="w-full">`);
  _push(ssrRenderComponent(_component_navbar_component, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DjWAwaOQ.mjs.map
