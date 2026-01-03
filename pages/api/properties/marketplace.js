// pages/api/properties/marketplace.js
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export default async function handler(req, res) {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const { limit = 10 } = req.query;
      
      const { data, error } = await supabaseAdmin
        .from('properties')
        .select('*')
        .limit(parseInt(limit));

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
