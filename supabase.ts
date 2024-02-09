import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ufurdwbmfiwydoiulrre.supabase.co'
const supabaseKey =  process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string
export const supabase = createClient(supabaseUrl, supabaseKey)