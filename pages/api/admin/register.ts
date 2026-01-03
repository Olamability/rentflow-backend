// pages/api/admin/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, full_name, phone, admin_code } = req.body;

    if (!email || !password || !full_name || !phone || !admin_code) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // 1️⃣ Check if admin code exists and is not used
    const { data: codeRecord, error: codeError } = await supabaseAdmin
      .from('admin_codes')
      .select('*')
      .eq('code', admin_code)
      .eq('is_used', false)
      .single();

    if (codeError || !codeRecord) {
      return res.status(400).json({ error: 'Invalid or already used admin code' });
    }

    // 2️⃣ Check if code is expired
    if ((codeRecord as any).expires_at && new Date((codeRecord as any).expires_at) < new Date()) {
      return res.status(400).json({ error: 'Admin code has expired' });
    }

    // 3️⃣ Create the user in Supabase Auth
    const { data, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      user_metadata: {
        full_name,
        phone,
        role: (codeRecord as any).role, // role assigned from code
        admin_code,
      },
    });

    if (authError || !data?.user) throw authError;
    const user = data.user;

    // 4️⃣ Insert user into public.users table
    const { error: dbError } = await supabaseAdmin
      .from('users')
      .insert({
        id: user.id,
        email,
        full_name,
        role: (codeRecord as any).role,
      } as any);

    if (dbError) throw dbError;

    // 5️⃣ Insert into correct profile table
    if ((codeRecord as any).role === 'admin' || (codeRecord as any).role === 'super_admin') {
      await supabaseAdmin.from('admin_profiles').insert({
        user_id: user.id,
        is_super_admin: (codeRecord as any).role === 'super_admin',
      } as any);
    }

    // 6️⃣ Mark the code as used
    await (supabaseAdmin
      .from('admin_codes') as any)
      .update({
        is_used: true,
        used_at: new Date(),
        used_by: user.id,
      })
      .eq('id', (codeRecord as any).id);

    return res.status(200).json({ message: 'Admin registered successfully', user_id: user.id });
  } catch (error: any) {
    console.error('Admin registration error:', error);
    return res.status(500).json({ error: error.message });
  }
}
