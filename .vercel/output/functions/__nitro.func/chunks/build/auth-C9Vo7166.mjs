import { f as defineNuxtRouteMiddleware, c as navigateTo } from './server.mjs';
import { u as useCookie } from './cookie-BtMhqDlC.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@kyvg/vue3-notification';
import '@supabase/supabase-js';

const auth = defineNuxtRouteMiddleware(() => {
  const accessToken = useCookie("token");
  if (!accessToken.value) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-C9Vo7166.mjs.map
