import { createClient } from '@/utils/supabase/server'
import { logout } from '../logout/action';

export default async function PrivatePage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  const user = data?.user

  return (
    <>
      {user ? (
        <>
          <p>Hello {user.email}</p>
          <form action={logout}>
            <button type="submit">Log out</button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
