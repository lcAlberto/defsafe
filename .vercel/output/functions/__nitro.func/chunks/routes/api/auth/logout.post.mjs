import { d as defineEventHandler } from '../../../runtime.mjs';
import { u as useSupabase } from '../../../_/use-supabase.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@supabase/supabase-js';

const logout_post = defineEventHandler(async () => {
  return await useSupabase().auth.signOut();
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
