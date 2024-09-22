import {createClient} from "@supabase/supabase-js";

export default function () {
  const config = useRuntimeConfig()
  const supabaseKey = config.app.supabaseKey
  const supabaseUrl = config.app.supabaseUrl;
  return createClient(supabaseUrl, supabaseKey)
}