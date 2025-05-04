import Link from 'next/link';
import Image from 'next/image';
import { getUser } from '@/app/auth/getUser';

const Navbar = async () => {
  const user = await getUser();

  return (
    <nav className="text-white p-4 bg-transparent top-0 left-0 w-full z-50">
      <div className="mx-auto flex items-center w-full px-4 md:w-[1200px] my-3">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/title.png" alt="Site Logo" width={600} height={600} priority />
          </Link>
        </div>
        <div className="flex items-center w-full justify-evenly">
          {/* AI YouTube link */}
          <div className="flex items-center space-x-1">
            <Link href="/ai-youtube" className="text-base">
              AI YouTube
            </Link>
            <span className="text-xs">▼</span>
          </div>

          {/* AI PDF link */}
          <div className="flex items-center space-x-1">
            <Link href="/ai-pdf" className="text-base">
              AI PDF
            </Link>
            <span className="text-xs">▼</span>
          </div>

          {/* Pricing link */}
          <div className="flex items-center space-x-1">
            <Link href="/pricing" className="text-base">
              Pricing
            </Link>
            <span className="text-xs">▼</span>
          </div>
        </div>
        <div>
          <Link href={user ? "/summarizers" : "/register"} className="text-base">
            <div className="relative group">
              <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
                <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

                <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                  <button
                    name="text"
                    className="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black"
                  >
                    Open
                  </button>
                </div>
                <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-blue-200 to-purple-200 blur-[30px]"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;