import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pdvaczjsfmhyllcvvpdb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdmFjempzZm1oeWxsY3Z2cGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1ODI1MzQsImV4cCI6MjAyMjE1ODUzNH0.YrZVwyYzLTg9L7RyBbd9zifGR7Q2Zcutto4HKhuMOhU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
