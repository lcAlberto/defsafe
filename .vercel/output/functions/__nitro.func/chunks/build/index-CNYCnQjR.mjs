import { useSSRContext, defineComponent, ref, mergeProps, unref, computed, inject, openBlock, createElementBlock, renderSlot, createCommentVNode, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
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
import './use-notify-Bfz9ZjHx.mjs';

const v$1 = ["width", "height", "fill", "transform"], y$1 = { key: 0 }, V = /* @__PURE__ */ createElementVNode("path", { d: "M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z" }, null, -1), f$1 = [
  V
], H = { key: 1 }, w$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
  opacity: "0.2"
}, null, -1), A$1 = /* @__PURE__ */ createElementVNode("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" }, null, -1), k$1 = [
  w$1,
  A$1
], S$1 = { key: 2 }, x$1 = /* @__PURE__ */ createElementVNode("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z" }, null, -1), z$1 = [
  x$1
], C$1 = { key: 3 }, B$1 = /* @__PURE__ */ createElementVNode("path", { d: "M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM94.1,209.41a2,2,0,0,1-1.41.59H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z" }, null, -1), N$1 = [
  B$1
], P$1 = { key: 4 }, b$1 = /* @__PURE__ */ createElementVNode("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" }, null, -1), E$1 = [
  b$1
], W$1 = { key: 5 }, $$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L133.17,61.17h0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17Zm-129,134.63A4,4,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.83L136,69.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z" }, null, -1), j$1 = [
  $$1
], q$1 = {
  name: "PhPencilSimple"
}, G$1 = /* @__PURE__ */ defineComponent({
  ...q$1,
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
    const a = c, d = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => {
      var _a;
      return (_a = a.weight) != null ? _a : d;
    }), i = computed(() => {
      var _a;
      return (_a = a.size) != null ? _a : _;
    }), p = computed(() => {
      var _a;
      return (_a = a.color) != null ? _a : h;
    }), g = computed(() => a.mirrored !== void 0 ? a.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, D) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: g.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", y$1, f$1)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", H, k$1)) : s.value === "fill" ? (openBlock(), createElementBlock("g", S$1, z$1)) : s.value === "light" ? (openBlock(), createElementBlock("g", C$1, N$1)) : s.value === "regular" ? (openBlock(), createElementBlock("g", P$1, E$1)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W$1, j$1)) : createCommentVNode("", true)
    ], 16, v$1));
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EditCatModal",
  __ssrInlineRender: true,
  props: {
    catData: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    ref(false);
    useCatStore();
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconPencilSimple = G$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><button class="bg-transparent text-primary bg-sweet-primary border border-none rounded-md p-2">`);
      _push(ssrRenderComponent(_component_PhosphorIconPencilSimple, {
        size: 15,
        weight: "fill"
      }, null, _parent));
      _push(`</button><div><dialog${ssrRenderAttr("id", `${props.catData.id}-edit-cat-modal`)} class="modal p-5"><div class="modal-box w-full sm:w-11/12 md:w-1/2 xl:w-1/3 max-w-5xl"><div class="full"><div class=""><h3 class="text-lg font-bold mb-2"> Edit ${ssrInterpolate(props.catData.name)}</h3><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500"> \u2715 </button></form><hr></div><div class="p-5 max-h-[70vh] overflow-auto"><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">image</span></span><input${ssrRenderAttr("value", unref(form).image)} class="${ssrRenderClass([{ "is-invalid": unref(errors).image }, "input input-bordered w-full focus:outline-0 focus:border-primary font-normal placeholder:text-base-300"])}" placeholder="Enter your image" type="text">`);
      if (unref(errors).image) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).image)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Full name</span></span><input${ssrRenderAttr("value", unref(form).name)} class="${ssrRenderClass([{ "is-invalid": unref(errors).name }, "input input-bordered w-full focus:outline-0 focus:border-primary font-normal placeholder:text-base-300"])}" placeholder="Enter your full name" type="text">`);
      if (unref(errors).name) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).name)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="form-control w-full"><span class="label"><span class="label-text text-primary font-bold">Why would you want to adopt this cat?</span></span><textarea class="${ssrRenderClass([{ "is-invalid": unref(errors).description }, "textarea input-bordered w-full focus:outline-0 focus:border-primary font-normal placeholder:text-base-300"])}" placeholder="Write here..." rows="5" type="image">${ssrInterpolate(unref(form).description)}</textarea>`);
      if (unref(errors).description) {
        _push(`<span class="label"><span class="label-text-alt text-red-500">${ssrInterpolate(unref(errors).description)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div><div class="modal-action"><form method="dialog"><button class="btn"> Cancel </button></form><button class="btn btn-primary"> Save </button></div></div></div></dialog></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cats/EditCatModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Z = ["width", "height", "fill", "transform"], v = { key: 0 }, y = /* @__PURE__ */ createElementVNode("path", { d: "M216,48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM188,204H68V72H188ZM76,20A12,12,0,0,1,88,8h80a12,12,0,0,1,0,24H88A12,12,0,0,1,76,20Z" }, null, -1), f = [
  y
], w = { key: 1 }, k = /* @__PURE__ */ createElementVNode("path", {
  d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
  opacity: "0.2"
}, null, -1), A = /* @__PURE__ */ createElementVNode("path", { d: "M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z" }, null, -1), S = [
  k,
  A
], x = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z" }, null, -1), C = [
  z
], B = { key: 3 }, N = /* @__PURE__ */ createElementVNode("path", { d: "M216,50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM82,24a6,6,0,0,1,6-6h80a6,6,0,0,1,0,12H88A6,6,0,0,1,82,24Z" }, null, -1), b = [
  N
], E = { key: 4 }, P = /* @__PURE__ */ createElementVNode("path", { d: "M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z" }, null, -1), W = [
  P
], $ = { key: 5 }, j = /* @__PURE__ */ createElementVNode("path", { d: "M216,52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM84,24a4,4,0,0,1,4-4h80a4,4,0,0,1,0,8H88A4,4,0,0,1,84,24Z" }, null, -1), T = [
  j
], q = {
  name: "PhTrashSimple"
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
  setup(r) {
    const s = r, d = inject("weight", "regular"), c = inject("size", "1em"), _ = inject("color", "currentColor"), H2 = inject("mirrored", false), a = computed(() => {
      var _a;
      return (_a = s.weight) != null ? _a : d;
    }), h = computed(() => {
      var _a;
      return (_a = s.size) != null ? _a : c;
    }), u = computed(() => {
      var _a;
      return (_a = s.color) != null ? _a : _;
    }), p = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : H2 ? "scale(-1, 1)" : void 0);
    return (l, D) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: h.value,
      height: h.value,
      fill: u.value,
      transform: p.value
    }, l.$attrs), [
      renderSlot(l.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", v, f)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", w, S)) : a.value === "fill" ? (openBlock(), createElementBlock("g", x, C)) : a.value === "light" ? (openBlock(), createElementBlock("g", B, b)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E, W)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $, T)) : createCommentVNode("", true)
    ], 16, Z));
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DeleteModal",
  __ssrInlineRender: true,
  props: {
    catId: { type: Number, required: true },
    disabled: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    ref(false);
    useCatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconTrashSimple = G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-9964bf2e><button class="${ssrRenderClass([{ "btn-disabled text-gray-500 tooltip": props.disabled }, "bg-transparent text-error bg-sweet-danger border border-none rounded-md p-2"])}"${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""} data-tip="You cannot delete this cat because he is adopted!" role="button" tabindex="-1" data-v-9964bf2e>`);
      _push(ssrRenderComponent(_component_PhosphorIconTrashSimple, {
        size: 15,
        weight: "fill"
      }, null, _parent));
      _push(`</button><div data-v-9964bf2e><dialog${ssrRenderAttr("id", `delete-cat-${props.catId}`)} class="modal p-5" data-v-9964bf2e><div class="modal-box max-w-72" data-v-9964bf2e><div class="full" data-v-9964bf2e><div class="p-5 h-52 overflow-auto flex flex-col items-center justify-evenly text-center" data-v-9964bf2e><span class="text-error mb-5" data-v-9964bf2e>`);
      _push(ssrRenderComponent(_component_PhosphorIconTrashSimple, {
        size: 32,
        weight: "fill"
      }, null, _parent));
      _push(`</span><h3 class="text-lg font-bold my-3" data-v-9964bf2e> Are You Sure? </h3><p class="font-normal text-md" data-v-9964bf2e> Are you sure you want to delete this cat profile? This action cannot be undone. </p></div><div class="modal-action grid grid-cols-2" data-v-9964bf2e><form class="w-full" method="dialog" data-v-9964bf2e><button class="btn w-full" data-v-9964bf2e> Cancel </button></form><button class="btn btn-error w-full text-white" data-v-9964bf2e> Delete </button></div></div></div></dialog></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cats/DeleteModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DeleteModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9964bf2e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  __ssrInlineRender: true,
  props: {
    cat: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(_attrs)}><td><div class="flex items-center gap-3"><div class="avatar"><div class="mask mask-circle h-14 w-14"><img${ssrRenderAttr("src", props.cat.image)} alt="Avatar Tailwind CSS Component"></div></div></div></td><td><div class="flex flex-col"><span>${ssrInterpolate(props.cat.name)}</span>`);
      if (props.cat.isAdopted) {
        _push(`<div class="badge badge-primary badge-sm text-xs"> Adopted </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></td><td>${ssrInterpolate(props.cat.description)}</td><th><div class="flex">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        "cat-data": props.cat
      }, null, _parent));
      _push(ssrRenderComponent(DeleteModal, {
        "cat-id": props.cat.id,
        disabled: props.cat.isAdopted
      }, null, _parent));
      _push(`</div></th></tr>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cats/TableRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCatStore();
    const cats = computed(() => store.getCats);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))} data-v-1ca8c023><div class="card bg-white border border-base-200 w-full" data-v-1ca8c023><div class="card-body" data-v-1ca8c023><div class="overflow-x-auto !h-[72vh] overflow-auto pr-5 pb-5" data-v-1ca8c023><table class="table" data-v-1ca8c023><thead data-v-1ca8c023><tr class="text-primary" data-v-1ca8c023><th data-v-1ca8c023>Image</th><th data-v-1ca8c023>Name</th><th data-v-1ca8c023>Description</th><th data-v-1ca8c023>Actions</th></tr></thead><tbody data-v-1ca8c023><!--[-->`);
      ssrRenderList(unref(cats), (cat, index2) => {
        _push(ssrRenderComponent(_sfc_main$1, { cat }, null, _parent));
      });
      _push(`<!--]--></tbody></table></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cats/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ca8c023"]]);

export { index as default };
//# sourceMappingURL=index-CNYCnQjR.mjs.map
