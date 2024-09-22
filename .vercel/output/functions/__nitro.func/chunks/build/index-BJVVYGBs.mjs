import { _ as __nuxt_component_0 } from './nuxt-link-eznpH5_u.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, watch, ref, inject, openBlock, createElementBlock, renderSlot, createCommentVNode, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrLooseContain } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { d as defineStore, u as useRuntimeConfig } from './server.mjs';
import { z as z$3 } from 'zod';
import { vMaska } from 'maska/vue';
import { u as useCatStore } from './catsStore-B8AXD8Ym.mjs';
import { u as useNotify } from './use-notify-Bfz9ZjHx.mjs';
import { PhCat } from '@phosphor-icons/vue';
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

const y$1 = ["width", "height", "fill", "transform"], M$1 = { key: 0 }, A$1 = /* @__PURE__ */ createElementVNode("path", { d: "M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM200,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h64a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Z" }, null, -1), Z$1 = [
  A$1
], f$1 = { key: 1 }, w$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M200,40V216H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40Z",
  opacity: "0.2"
}, null, -1), L$1 = /* @__PURE__ */ createElementVNode("path", { d: "M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z" }, null, -1), k$2 = [
  w$2,
  L$1
], S$2 = { key: 2 }, x$2 = /* @__PURE__ */ createElementVNode("path", { d: "M141.66,133.66l-40,40A8,8,0,0,1,88,168V136H24a8,8,0,0,1,0-16H88V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z" }, null, -1), z$2 = [
  x$2
], C$2 = { key: 3 }, B$2 = /* @__PURE__ */ createElementVNode("path", { d: "M140.24,132.24l-40,40a6,6,0,0,1-8.48-8.48L121.51,134H24a6,6,0,0,1,0-12h97.51L91.76,92.24a6,6,0,0,1,8.48-8.48l40,40A6,6,0,0,1,140.24,132.24ZM200,34H136a6,6,0,0,0,0,12h58V210H136a6,6,0,0,0,0,12h64a6,6,0,0,0,6-6V40A6,6,0,0,0,200,34Z" }, null, -1), N$2 = [
  B$2
], b$2 = { key: 4 }, E$2 = /* @__PURE__ */ createElementVNode("path", { d: "M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z" }, null, -1), P$2 = [
  E$2
], W$2 = { key: 5 }, $$2 = /* @__PURE__ */ createElementVNode("path", { d: "M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM200,36H136a4,4,0,0,0,0,8h60V212H136a4,4,0,0,0,0,8h64a4,4,0,0,0,4-4V40A4,4,0,0,0,200,36Z" }, null, -1), j$2 = [
  $$2
], I$1 = {
  name: "PhSignIn"
}, F$1 = /* @__PURE__ */ defineComponent({
  ...I$1,
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
    }), g = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (h, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: g.value
    }, h.$attrs), [
      renderSlot(h.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", M$1, Z$1)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", f$1, k$2)) : a.value === "fill" ? (openBlock(), createElementBlock("g", S$2, z$2)) : a.value === "light" ? (openBlock(), createElementBlock("g", C$2, N$2)) : a.value === "regular" ? (openBlock(), createElementBlock("g", b$2, P$2)) : a.value === "thin" ? (openBlock(), createElementBlock("g", W$2, j$2)) : createCommentVNode("", true)
    ], 16, y$1));
  }
});
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="flex h-[30rem] max-w-96 flex-col gap-4"><div class="skeleton h-40 w-full"></div><div class="skeleton h-5 w-28"></div><div class="skeleton h-4 w-full"></div><div class="skeleton h-4 w-full"></div><div class="skeleton h-10 w-full rounded-md"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const v = ["width", "height", "fill", "transform"], y = { key: 0 }, f = /* @__PURE__ */ createElementVNode("path", { d: "M236,108a24,24,0,1,1-24-24A24,24,0,0,1,236,108ZM68,108a24,24,0,1,0-24,24A24,24,0,0,0,68,108ZM92,84A24,24,0,1,0,68,60,24,24,0,0,0,92,84Zm72,0a24,24,0,1,0-24-24A24,24,0,0,0,164,84Zm48,100a44,44,0,0,1-61.1,40.55,60.15,60.15,0,0,0-45.8,0A44,44,0,0,1,67,145.34,31.33,31.33,0,0,0,81.91,126.6a48,48,0,0,1,92.18,0A31.34,31.34,0,0,0,189,145.34,44,44,0,0,1,212,184Zm-24,0a20,20,0,0,0-10.49-17.6l-.1-.06a55.22,55.22,0,0,1-26.37-33,24,24,0,0,0-46.08,0,55.21,55.21,0,0,1-26.37,33.05l-.1.06A20,20,0,0,0,88,204a19.77,19.77,0,0,0,7.8-1.58l.13,0a84,84,0,0,1,64.14,0l.13,0A19.77,19.77,0,0,0,168,204,20,20,0,0,0,188,184Z" }, null, -1), w$1 = [
  f
], k$1 = { key: 1 }, x$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M232,108a20,20,0,1,1-20-20A20,20,0,0,1,232,108ZM64,108a20,20,0,1,0-20,20A20,20,0,0,0,64,108ZM92,80A20,20,0,1,0,72,60,20,20,0,0,0,92,80Zm72,0a20,20,0,1,0-20-20A20,20,0,0,0,164,80Zm19.24,75.85A43.46,43.46,0,0,1,162.57,130a36,36,0,0,0-69.14,0,43.49,43.49,0,0,1-20.67,25.9,32,32,0,0,0,27.73,57.62,72.49,72.49,0,0,1,55,0,32,32,0,0,0,27.73-57.62Z",
  opacity: "0.2"
}, null, -1), S$1 = /* @__PURE__ */ createElementVNode("path", { d: "M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z" }, null, -1), z$1 = [
  x$1,
  S$1
], C$1 = { key: 2 }, B$1 = /* @__PURE__ */ createElementVNode("path", { d: "M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z" }, null, -1), P$1 = [
  B$1
], N$1 = { key: 3 }, b$1 = /* @__PURE__ */ createElementVNode("path", { d: "M212,82a26,26,0,1,0,26,26A26,26,0,0,0,212,82Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,212,122ZM70,108a26,26,0,1,0-26,26A26,26,0,0,0,70,108ZM44,122a14,14,0,1,1,14-14A14,14,0,0,1,44,122ZM92,86A26,26,0,1,0,66,60,26,26,0,0,0,92,86Zm0-40A14,14,0,1,1,78,60,14,14,0,0,1,92,46Zm72,40a26,26,0,1,0-26-26A26,26,0,0,0,164,86Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,46Zm22.15,104.61a37.32,37.32,0,0,1-17.82-22.33,42,42,0,0,0-80.66,0A37.26,37.26,0,0,1,69.9,150.58,38,38,0,0,0,88,222a37.58,37.58,0,0,0,14.76-3,66.14,66.14,0,0,1,50.41,0A37.66,37.66,0,0,0,168,222a38,38,0,0,0,18.15-71.39ZM168,210a25.93,25.93,0,0,1-10.21-2.08,78.15,78.15,0,0,0-59.65,0A26,26,0,0,1,75.68,161.1a49.28,49.28,0,0,0,23.51-29.48,30,30,0,0,1,57.62,0,49.27,49.27,0,0,0,23.57,29.5A26,26,0,0,1,168,210Z" }, null, -1), E$1 = [
  b$1
], V$1 = { key: 4 }, W$1 = /* @__PURE__ */ createElementVNode("path", { d: "M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z" }, null, -1), $$1 = [
  W$1
], j$1 = { key: 5 }, q$1 = /* @__PURE__ */ createElementVNode("path", { d: "M212,84a24,24,0,1,0,24,24A24,24,0,0,0,212,84Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,212,124ZM68,108a24,24,0,1,0-24,24A24,24,0,0,0,68,108ZM44,124a16,16,0,1,1,16-16A16,16,0,0,1,44,124ZM92,84A24,24,0,1,0,68,60,24,24,0,0,0,92,84Zm0-40A16,16,0,1,1,76,60,16,16,0,0,1,92,44Zm72,40a24,24,0,1,0-24-24A24,24,0,0,0,164,84Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,164,44Zm21.18,108.36a39.32,39.32,0,0,1-18.77-23.52,40,40,0,0,0-76.82,0,39.3,39.3,0,0,1-18.73,23.51A36,36,0,0,0,102,217.17a68.14,68.14,0,0,1,51.95,0,36,36,0,0,0,31.23-64.79ZM168,212a27.8,27.8,0,0,1-11-2.23,76.16,76.16,0,0,0-58.11,0A27.72,27.72,0,0,1,88,212a28,28,0,0,1-13.29-52.65,47.23,47.23,0,0,0,22.56-28.29,32,32,0,0,1,61.46,0,47.26,47.26,0,0,0,22.6,28.3A28,28,0,0,1,168,212Z" }, null, -1), D = [
  q$1
], F = {
  name: "PhPawPrint"
}, I = /* @__PURE__ */ defineComponent({
  ...F,
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
    const s = r, Z2 = inject("weight", "regular"), d = inject("size", "1em"), c = inject("color", "currentColor"), m = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : Z2;
    }), l = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : d;
    }), _ = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : c;
    }), h = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : m ? "scale(-1, 1)" : void 0);
    return (A2, G2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: _.value,
      transform: h.value
    }, A2.$attrs), [
      renderSlot(A2.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", y, w$1)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", k$1, z$1)) : a.value === "fill" ? (openBlock(), createElementBlock("g", C$1, P$1)) : a.value === "light" ? (openBlock(), createElementBlock("g", N$1, E$1)) : a.value === "regular" ? (openBlock(), createElementBlock("g", V$1, $$1)) : a.value === "thin" ? (openBlock(), createElementBlock("g", j$1, D)) : createCommentVNode("", true)
    ], 16, v));
  }
});
const w = ["width", "height", "fill", "transform"], M = { key: 0 }, k = /* @__PURE__ */ createElementVNode("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }, null, -1), Z = [
  k
], x = { key: 1 }, C = /* @__PURE__ */ createElementVNode("path", {
  d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
  opacity: "0.2"
}, null, -1), L = /* @__PURE__ */ createElementVNode("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), S = [
  C,
  L
], V = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), A = [
  z
], B = { key: 3 }, H = /* @__PURE__ */ createElementVNode("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }, null, -1), N = [
  H
], b = { key: 4 }, E = /* @__PURE__ */ createElementVNode("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }, null, -1), P = [
  E
], W = { key: 5 }, $ = /* @__PURE__ */ createElementVNode("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), j = [
  $
], q = {
  name: "PhCheck"
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
    const l = c, d = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => {
      var _a;
      return (_a = l.weight) != null ? _a : d;
    }), i = computed(() => {
      var _a;
      return (_a = l.size) != null ? _a : _;
    }), p = computed(() => {
      var _a;
      return (_a = l.color) != null ? _a : h;
    }), g = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, D2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: g.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", M, Z)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", x, S)) : s.value === "fill" ? (openBlock(), createElementBlock("g", V, A)) : s.value === "light" ? (openBlock(), createElementBlock("g", B, N)) : s.value === "regular" ? (openBlock(), createElementBlock("g", b, P)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W, j)) : createCommentVNode("", true)
    ], 16, w));
  }
});
const useSystemStore = defineStore("systemStore", {
  getters: {
    getIsOpenToast: (state) => state.toast.show,
    getToast: (state) => state.toast
  },
  state: () => ({
    toast: ref({
      message: "",
      type: "",
      show: false
    })
  }),
  actions: {
    showToast(type, message) {
      this.toast = {
        message,
        type,
        show: true
      };
    },
    hideToast() {
      this.toast = {
        message: "",
        type: "",
        show: false
      };
    }
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdoptionSuccessModal",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useSystemStore();
    const open = computed(() => store.getIsOpenToast);
    watch(() => open.value, (value) => {
      toggleModal();
    });
    function toggleModal() {
      const modalElement = (void 0).getElementById("adopt-cat-modal");
      if (modalElement) {
        if (open.value) {
          (void 0).getElementById("adopt-cat-modal").showModal();
          setTimeout(() => {
            (void 0).getElementById("adopt-cat-modal").close();
          }, 3e3);
        } else {
          (void 0).getElementById("adopt-cat-modal").close();
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconCheck = G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div><dialog id="adopt-cat-modal" class="modal p-5"><div class="modal-box w-80"><div class="full"><div class="p-5 overflow-auto flex flex-col items-center justify-evenly text-center"><span class="text-success mb-5 bg-green-50 p-4 rounded-lg">`);
      _push(ssrRenderComponent(_component_PhosphorIconCheck, { size: 32 }, null, _parent));
      _push(`</span><h3 class="text-lg font-bold my-3"> Application Submitted! </h3><p class="font-normal text-md"> Tank you for submitting your adoption application! Our team will review your application and get back to you shortly. </p></div><div class="modal-action"><form class="w-full" method="dialog"><button class="btn btn-primary btn-block"> Close </button></form></div></div></div></dialog></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdoptionSuccessModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
z$3.object({
  cat_id: z$3.number({
    required_error: "Cat id is required",
    invalid_type_error: "Cat id must be a number"
  }),
  full_name: z$3.string({
    required_error: "Full Name is required",
    invalid_type_error: "Full Name must be a string"
  }).min(5, { message: "Full name must contain at least 5 characters" }),
  email: z$3.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string"
  }).email("Invalid email address"),
  phone: z$3.string({
    invalid_type_error: "Telephone must be a string"
  }).optional(),
  reason: z$3.string({
    required_error: "Reason is required",
    invalid_type_error: "Reason must be a string"
  }).max(100, { message: "The field cannot be longer than 100 characters" }),
  terms: z$3.boolean().refine((value) => value, "You must agree to the terms")
});
const useAdoptionStore = defineStore("adoptionStore", {
  state: () => ({
    cats: ref([]),
    errors: ref([]),
    loading: {
      fetchingCats: false,
      creatingCat: false,
      editingCat: false,
      deletingCat: false
    }
  }),
  getters: {
    getCats: (state) => state.cats,
    getErrors: (state) => state.errors,
    getLoading: (state) => {
      return (param) => state.loading[param];
    }
  },
  actions: {
    async adoptCat(param, catId) {
      const config = useRuntimeConfig();
      const systemStore = useSystemStore();
      await $fetch(`${config.public.baseUrl}/adopt/${catId}`, {
        method: "POST",
        body: param
      }).then((response) => {
        systemStore.showToast("success", `${response.message}`);
      }).catch((error) => {
        this.error = error;
        useNotify("error", "Adoption", "Error making the adoption request");
      });
    }
  }
});
const _sfc_main$1 = {
  __name: "AdoptModalComponent",
  __ssrInlineRender: true,
  props: {
    catId: { type: Number, required: true },
    isAdopted: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    useAdoptionStore();
    useCatStore();
    ref(false);
    const form = ref({
      full_name: "",
      email: "",
      phone: "",
      reason: "",
      terms: false
    });
    const errors = ref({
      full_name: "",
      email: "",
      phone: "",
      reason: "",
      terms: "",
      cat_id: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><button${ssrIncludeBooleanAttr(props.isAdopted) ? " disabled" : ""} class="btn w-full btn-primary"> Adopt </button><div><dialog${ssrRenderAttr("id", `${props.catId}-cat`)} class="modal p-5"><div class="modal-box w-full sm:w-11/12 md:w-1/2 xl:w-1/3 max-w-5xl"><div class="full"><div class=""><h3 class="text-lg font-bold mb-2"> Adoption form </h3><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500"> \u2715 </button></form><hr></div><div class="p-5 max-h-[70vh] overflow-auto"><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Full name</span></span><input${ssrRenderAttr("value", unref(form).full_name)} class="${ssrRenderClass([{ "is-invalid": unref(errors).full_name }, "input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"])}" placeholder="Enter your full name" type="text">`);
      if (unref(errors).full_name) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).full_name)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Email</span></span><input${ssrRenderAttr("value", unref(form).email)} class="${ssrRenderClass([{ "is-invalid": unref(errors).email }, "input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"])}" placeholder="Enter your email" type="email">`);
      if (unref(errors).email) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).email)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Telephone</span></span><input${ssrRenderAttrs((_temp0 = mergeProps({
        value: unref(form).phone,
        class: [{ "is-invalid": unref(errors).phone }, "input w-full focus:outline-0 focus:border-primary placeholder:text-base-300"],
        placeholder: "Enter your phone",
        type: "email"
      }, ssrGetDirectiveProps(_ctx, unref(vMaska), "(##) # ####-####")), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(form).phone))))}>`);
      if (unref(errors).phone) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(_ctx.erros.phone)}l</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Why would you want to adopt this cat?</span></span><textarea class="${ssrRenderClass([{ "is-invalid": unref(errors).reason }, "textarea w-full focus:outline-0 focus:border-primary placeholder:text-base-300"])}" placeholder="Write here..." rows="5" type="email">${ssrInterpolate(unref(form).reason)}</textarea>`);
      if (unref(errors).reason) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).reason)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><div class="form-control"><label class="label cursor-pointer flex justify-start gap-3"><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).terms) ? ssrLooseContain(unref(form).terms, null) : unref(form).terms) ? " checked" : ""} checked="checked" class="checkbox checkbox-primary" type="checkbox"><span class="label-text">I agree to take care of this cat</span></label>`);
      if (unref(errors).terms) {
        _push(`<small class="text-red-500">${ssrInterpolate(unref(errors).terms)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="modal-action"><form method="dialog"><button class="btn"> Cancel </button></form><button class="btn btn-primary"> Submit application </button></div></div></div></dialog></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdoptModalComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCatStore();
    const cats = computed(() => store.getCats);
    const loading = computed(() => store.getLoading("fetchingCats"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_PhosphorIconSignIn = F$1;
      const _component_skeleton_component = __nuxt_component_2;
      const _component_PhosphorIconPawPrint = I;
      const _component_adoption_success_modal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="flex flex-col w-full"><div class="flex justify-between items-center gap-3 py-5 px-3 text-primary"><div class="flex itmes-center gap-4">`);
      _push(ssrRenderComponent(unref(PhCat), {
        size: 32,
        weight: "fill"
      }, null, _parent));
      _push(`<p class="text-lg"> Cat adoption plataform </p></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "btn btn-link btn-xs",
        to: "/login"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Admin `);
            _push2(ssrRenderComponent(_component_PhosphorIconSignIn, {
              size: 16,
              weight: "fill"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Admin "),
              createVNode(_component_PhosphorIconSignIn, {
                size: 16,
                weight: "fill"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><hr><div class="px-5"><div class="py-5"><h1 class="text-2xl font-bold text-primary"> Cats for adoption </h1><p class="text-md"> Explore our list of lovable cats looking for their forever homes. </p></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-wrap justify-items-center items-center h-[80vh] overflow-auto md:pr-5"><!--[-->`);
        ssrRenderList(15, (item) => {
          _push(ssrRenderComponent(_component_skeleton_component, { key: item }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(cats) && unref(cats).length === 0) {
        _push(`<div class="flex flex-col justify-center items-center text-primary h-[50vh]">`);
        _push(ssrRenderComponent(_component_PhosphorIconPawPrint, {
          size: 52,
          weight: "fill"
        }, null, _parent));
        _push(`<h1 class="text-md"> Oops! No kittens found </h1></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-wrap justify-items-center items-center h-[80vh] overflow-auto md:pr-5"><!--[-->`);
        ssrRenderList(unref(cats), (cat, index) => {
          _push(`<div><div class="card bg-base-100 border border-base-200 h-[27rem] shadow-xl min-w-72 max-w-96"><div class="card-body max-w-96 p-5"><figure${ssrRenderAttr("data-tip", cat.isAdopted ? "This kitten already has a home!" : "This kitten doesn't have a home yet! He needs your love")} class="rounded-xl max-h-56 tooltip"><img${ssrRenderAttr("alt", `image-of-${cat.name}`)}${ssrRenderAttr("src", cat.image)}></figure><h2 class="card-title">${ssrInterpolate(cat.name)}</h2><p class="h-max-16 overflow-auto">${ssrInterpolate(cat.description)}</p><div class="card-actions justify-center">`);
          _push(ssrRenderComponent(_sfc_main$1, {
            "cat-id": cat.id,
            "is-adopted": cat.isAdopted
          }, null, _parent));
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_adoption_success_modal, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BJVVYGBs.mjs.map
