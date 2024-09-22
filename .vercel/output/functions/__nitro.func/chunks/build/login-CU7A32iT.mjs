import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext, inject, computed, openBlock, createElementBlock, renderSlot, createCommentVNode, createElementVNode } from 'vue';
import { _ as __nuxt_component_0 } from './nuxt-link-eznpH5_u.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderDynamicModel } from 'vue/server-renderer';
import { PhCat } from '@phosphor-icons/vue';
import { z as z$2 } from 'zod';
import { u as useAuthStore } from './authStore-CYv3PTET.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './server.mjs';
import 'vue-router';
import '@kyvg/vue3-notification';
import '@supabase/supabase-js';
import './cookie-BtMhqDlC.mjs';
import './use-notify-Bfz9ZjHx.mjs';

const Z$1 = ["width", "height", "fill", "transform"], v$1 = { key: 0 }, y$1 = /* @__PURE__ */ createElementVNode("path", { d: "M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z" }, null, -1), A = [
  y$1
], f$1 = { key: 1 }, w$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
  opacity: "0.2"
}, null, -1), k$1 = /* @__PURE__ */ createElementVNode("path", { d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" }, null, -1), S$1 = [
  w$1,
  k$1
], x$1 = { key: 2 }, z$1 = /* @__PURE__ */ createElementVNode("path", { d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z" }, null, -1), C$1 = [
  z$1
], B$1 = { key: 3 }, N$1 = /* @__PURE__ */ createElementVNode("path", { d: "M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }, null, -1), b$1 = [
  N$1
], E$1 = { key: 4 }, P$1 = /* @__PURE__ */ createElementVNode("path", { d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" }, null, -1), W$1 = [
  P$1
], $$1 = { key: 5 }, j$1 = /* @__PURE__ */ createElementVNode("path", { d: "M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }, null, -1), L$1 = [
  j$1
], q = {
  name: "PhLockSimple"
}, G = /* @__PURE__ */ defineComponent({
  ...q,
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
  setup(c) {
    const s = c, d = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), V = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : d;
    }), l = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : _;
    }), H = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : h;
    }), u = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : V ? "scale(-1, 1)" : void 0);
    return (r, D) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: H.value,
      transform: u.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", v$1, A)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", f$1, S$1)) : a.value === "fill" ? (openBlock(), createElementBlock("g", x$1, C$1)) : a.value === "light" ? (openBlock(), createElementBlock("g", B$1, b$1)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E$1, W$1)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $$1, L$1)) : createCommentVNode("", true)
    ], 16, Z$1));
  }
});
const v = ["width", "height", "fill", "transform"], y = { key: 0 }, f = /* @__PURE__ */ createElementVNode("path", { d: "M208,76H100V56a28,28,0,0,1,28-28c13.51,0,25.65,9.62,28.24,22.39a12,12,0,1,0,23.52-4.78C174.87,21.5,153.1,4,128,4A52.06,52.06,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,128H52V100H204Z" }, null, -1), Z = [
  f
], C = { key: 1 }, w = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
  opacity: "0.2"
}, null, -1), k = /* @__PURE__ */ createElementVNode("path", { d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z" }, null, -1), M = [
  w,
  k
], S = { key: 2 }, x = /* @__PURE__ */ createElementVNode("path", { d: "M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H80V56A48.05,48.05,0,0,1,128,8c23.2,0,43.32,16.15,47.84,38.41a8,8,0,0,1-15.68,3.18C157.2,35,143.37,24,128,24A32,32,0,0,0,96,56V80H208A16,16,0,0,1,224,96Z" }, null, -1), z = [
  x
], B = { key: 3 }, N = /* @__PURE__ */ createElementVNode("path", { d: "M208,82H94V56a34,34,0,0,1,34-34c16.3,0,31,11.69,34.12,27.19a6,6,0,0,0,11.76-2.38C169.55,25.48,150.26,10,128,10A46.06,46.06,0,0,0,82,56V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }, null, -1), b = [
  N
], E = { key: 4 }, P = /* @__PURE__ */ createElementVNode("path", { d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z" }, null, -1), W = [
  P
], $ = { key: 5 }, j = /* @__PURE__ */ createElementVNode("path", { d: "M208,84H92V56a36,36,0,0,1,36-36c17.24,0,32.75,12.38,36.08,28.8a4,4,0,1,0,7.84-1.6C167.78,26.81,149.31,12,128,12A44.05,44.05,0,0,0,84,56V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }, null, -1), L = [
  j
], O = {
  name: "PhLockSimpleOpen"
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
    const s = r, d = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), V = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : d;
    }), l = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : _;
    }), p = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : h;
    }), u = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : V ? "scale(-1, 1)" : void 0);
    return (c, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: p.value,
      transform: u.value
    }, c.$attrs), [
      renderSlot(c.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", y, Z)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", C, M)) : a.value === "fill" ? (openBlock(), createElementBlock("g", S, z)) : a.value === "light" ? (openBlock(), createElementBlock("g", B, b)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E, W)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $, L)) : createCommentVNode("", true)
    ], 16, v));
  }
});
const _imports_0 = "" + buildAssetsURL("login.H8E4fbIS.png");
z$2.object({
  email: z$2.string({
    required_error: "email is required",
    invalid_type_error: "email must be a string"
  }).min(5, { message: "email must contain at least 5 characters" }),
  password: z$2.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string"
  })
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const showPassword = ref(false);
    const form = ref({
      email: "",
      password: ""
    });
    const errors = ref({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconLockSimple = G;
      const _component_PhosphorIconLockSimpleOpen = F;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row justify-evenly h-full w-full md:w-11/12 xl:w-9/12 gap-4 p-10 mx-auto" }, _attrs))}><div class="bg-login h-1/3 md:h-full md:w-1/2 rounded-2xl relative flex flex-col items-center justify-start pt-5"><h1 class="text-xl text-wrap lg:text-4xl text-base-100 font-bold text-center md:mt-44 px-5"> Wellcome to the Cat Adoption Panel </h1><img class="absolute bottom-0 w-1/4 md:w-11/12 lg:max-w-md"${ssrRenderAttr("src", _imports_0)}></div><div class="md:w-1/2 flex flex-col justify-center items-start gap-3 py-5 px-10"><div class="flex items-center gap-4 text-primary mb-5">`);
      _push(ssrRenderComponent(unref(PhCat), {
        size: 50,
        weight: "fill"
      }, null, _parent));
      _push(`<p class="text-xl"> Cat adoption plataform </p></div><div class="flex flex-col justify-start w-full"><h1 class="text-xl font-bold"> Login </h1><label class="form-control w-full my-5"><span class="label"><span class="label-text text-primary font-bold">Full name</span></span><input${ssrRenderAttr("value", unref(form).email)} class="${ssrRenderClass([{ "is-invalid": unref(errors).email }, "input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"])}" placeholder="Enter your full name" type="text">`);
      if (unref(errors).email) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).email)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full my-5"><span class="label"><span class="label-text text-primary font-bold">Password</span></span><label class="input w-full focus:outline-0 focus:border-primary placeholder:text-base-300 flex items-center gap-2"><input${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)} class="${ssrRenderClass([{ "is-invalid": unref(errors).password }, "input border border-0 w-full"])}"${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} placeholder="Enter your full name">`);
      if (unref(showPassword)) {
        _push(ssrRenderComponent(_component_PhosphorIconLockSimple, {
          size: 24,
          weight: "fill",
          onClick: ($event) => showPassword.value = false
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_PhosphorIconLockSimpleOpen, {
          size: 24,
          weight: "fill",
          onClick: ($event) => showPassword.value = true
        }, null, _parent));
      }
      _push(`</label>`);
      if (unref(errors).password) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).password)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><div class="w-full"><button class="btn btn-primary w-full"> Login </button>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "btn btn-link btn-xs btn-block my-5",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voltar `);
          } else {
            return [
              createTextVNode(" Voltar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CU7A32iT.mjs.map
