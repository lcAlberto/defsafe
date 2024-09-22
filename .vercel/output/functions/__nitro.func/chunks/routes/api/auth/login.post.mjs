import { d as defineEventHandler, r as readBody, c as createError } from '../../../runtime.mjs';
import { u as useSupabase } from '../../../_/use-supabase.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@supabase/supabase-js';

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { data, error } = await useSupabase().auth.signInWithPassword(body);
    if (error) {
      throw createError({
        statusCode: (error == null ? void 0 : error.statusCode) || 500,
        message: (error == null ? void 0 : error.message) || "Internal Server Error",
        fatal: true
      });
    } else
      return {
        message: "Welcome!",
        status: 200,
        data
      };
  } catch (e) {
    throw createError({
      statusCode: (e == null ? void 0 : e.statusCode) || 500,
      message: (e == null ? void 0 : e.message) || "Internal Server Error",
      fatal: true
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
