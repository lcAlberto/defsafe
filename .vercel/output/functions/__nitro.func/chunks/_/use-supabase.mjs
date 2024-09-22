import { createClient } from '@supabase/supabase-js';
import { u as useRuntimeConfig } from '../runtime.mjs';

function useSupabase() {
  const config = useRuntimeConfig();
  const supabaseKey = config.app.supabaseKey;
  const supabaseUrl = config.app.supabaseUrl;
  return createClient(supabaseUrl, supabaseKey);
}

export { useSupabase as u };
//# sourceMappingURL=use-supabase.mjs.map
