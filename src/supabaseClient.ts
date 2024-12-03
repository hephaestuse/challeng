import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ytsemhqpkrfukphvpzxe.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0c2VtaHFwa3JmdWtwaHZwenhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNTk4NTMsImV4cCI6MjA0ODczNTg1M30.tohPBhhGHqODobx-ufB8wQSua6m1Mksd6ZCfCkQcHJE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
