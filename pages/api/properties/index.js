// pages/api/properties/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseAdmin';
import { CreatePropertyInput } from '@/DATABASE_TYPES';

export default async function handler(
  req,
  res
) {
  if (req.method === 'POST') {
    try {
      const body = req.body;

      const { data, error } = await supabase
        .from('properties')
        .insert(body)
        .select()
        .single();

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(201).json(data);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else if (req.method === 'GET') {
    // Optional: return all properties
    const { data, error } = await supabase.from('properties').select('*');
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
