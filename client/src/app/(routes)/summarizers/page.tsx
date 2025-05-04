import { createClient } from '@/utils/supabase/server';
import { logout } from '../logout/action';
import ParticleBackground from "../../components/particle-background";
import Link from 'next/link';

export default async function PrivatePage() {
  
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const user = data?.user;
  

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative">

      {/* Welcome Message */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-4xl font-bold mb-2">Welcome, {user?.email}!</h1>
        <p className="text-lg text-gray-300">Choose your summarizer tool below</p>
      </div>

      {/* Summarizer Options */}
      <div className="flex flex-col md:flex-row gap-6 z-10">
        {/* YouTube Summarizer Card */}
        <Link
          href="/youtube-summarizer"
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer w-96 h-64"
        >
          <h2 className="text-2xl font-semibold mb-4">YouTube Summarizer</h2>
          <p className="text-gray-300 text-center">
            Summarize YouTube videos quickly and efficiently.
          </p>
        </Link>

        {/* PDF Summarizer Card */}
        <Link
          href="/pdf-summarizer"
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer w-96 h-64"
        >
          <h2 className="text-2xl font-semibold mb-4">PDF Summarizer</h2>
          <p className="text-gray-300 text-center">
            Summarize PDF documents with ease.
          </p>
        </Link>
      </div>

      {/* Logout Button */}
      <form action={logout} className="mt-8 z-10">
        <button
          type="submit"
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer w-96 h-20 text-lg font-semibold"
        >
          Log Out
        </button>
      </form>
    </div>
  );
}