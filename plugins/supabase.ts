import {createClient} from "@supabase/supabase-js";

export default defineNuxtPlugin((app) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.app?.databaseUrl || "",
    config.app?.supabaseKey || ""
  );

  app.provide("db", supabase);
});
