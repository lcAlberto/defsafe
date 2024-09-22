import {createClient} from "@supabase/supabase-js";

export default defineNuxtPlugin((app) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.app?.supabaseUrl || "",
    config.app?.supabaseKey || ""
  );
  
  app.provide("db", supabase);
});
