'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Supabase sign-up
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name }, // Store name in user metadata
    },
  });

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/confirm')
}