import { createClient } from '@supabase/supabase-js';
const URL = "https://dwwegkxzxvmhhsoaylxf.supabase.co"; 
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3d2Vna3h6eHZtaGhzb2F5bHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMDU5MjIsImV4cCI6MTk5NjU4MTkyMn0.s3o4Vq_PLLT9q7We8hLeVcxWYVhJKSn9jeCFykF2VUM"
export const supabase = createClient(URL, API_KEY)
  




