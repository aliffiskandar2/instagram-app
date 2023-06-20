import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zwozpztykflewxouzcdp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3b3pwenR5a2ZsZXd4b3V6Y2RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMjE5OTMsImV4cCI6MjAwMjc5Nzk5M30.dI_aTW70N3cYqx28G3qluhdgnEGpytgqdK45DVeRqpI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)