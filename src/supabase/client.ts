import { createClient } from "@supabase/supabase-js";

const URL = "https://yyknfyrwtbhttcrroxdm.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5a25meXJ3dGJodHRjcnJveGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NDE5NjIsImV4cCI6MjAwOTUxNzk2Mn0.f5971jPMuZScNaQS58DhiHdrVMu6-chXPWHrnY5bVYE";

const supabase = createClient(URL, anonKey);

export default supabase;
