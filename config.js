import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yyfvehzoacydmerritto.supabase.co'
const supabaseAnonKey = 'sb_publishable_33Paks2cQAh7aF7t_PwVPA_dhsvv3X-'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
