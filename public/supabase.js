import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://aalzhahoyjvqbojwlsea.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbHpoYWhveWp2cWJvandsc2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5Njk5NTQsImV4cCI6MjA4NjU0NTk1NH0.7uBG5SXHpVz_ZeiJOag1-_jcFfZTfb0AOvNKd_bKUbQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
