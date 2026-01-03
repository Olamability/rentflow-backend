import { supabase } from '@/lib/supabase'

export default async function handler(req, res) {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { data, error } = await supabase.from('properties').select('*')
  if (error) return res.status(400).json({ error: error.message })
  res.status(200).json(data)
}
