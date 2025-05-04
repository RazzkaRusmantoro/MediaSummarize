import { NextApiRequest, NextApiResponse } from 'next';
import { getUser } from '@/app/auth/getUser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await getUser();

    if (!user) {
      return res.status(200).json({ user: null });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error in /api/getUser:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}