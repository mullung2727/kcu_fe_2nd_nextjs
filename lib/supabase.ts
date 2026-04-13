import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_KCU_FE_2ND_NEXTJSSUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)