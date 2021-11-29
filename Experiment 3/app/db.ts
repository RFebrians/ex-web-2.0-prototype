import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "https://vkriqcdehjjwtzueuscm.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzkzNDQ0NiwiZXhwIjoxOTUzNTEwNDQ2fQ.q-mvXRaDA6YpnJlqZ5a-DFF911hLN8zleu5e1ypAd_w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
