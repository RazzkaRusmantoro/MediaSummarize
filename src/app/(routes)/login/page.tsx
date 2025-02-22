"use client";

import { login } from "./action";
import ParticleBackground3 from "../../components/particle-background-3";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Login() {
    return (
        <main className="relative flex flex-col md:flex-row min-h-screen">
            {/* Background Particles */}
            <div className="absolute inset-0 -z-10">
                <ParticleBackground3 />
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-[100%] flex items-center justify-center bg-opacity-100">
                <div className="w-full max-w-lg text-[#161616] flex flex-col items-center justify-start p-6 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-6 md:mt-10 text-center">
                        <Typewriter
                            words={["Log in to Account"]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={80}
                            delaySpeed={8000}
                        />
                    </h1>

                    {/* OAuth Buttons */}
                    <button className="flex w-full md:w-[100%] items-center justify-center gap-2 rounded border border-slate-300 bg-white p-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 mb-4">
                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-5 w-5" />
                        Continue with GitHub
                    </button>
                    <button className="flex w-full md:w-[100%] items-center justify-center gap-2 rounded border border-slate-300 bg-white p-3 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 mb-6">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                        Continue with Google
                    </button>

                    <span className="mb-4 text-sm md:text-base text-center">or use your email for signing in:</span>

                    {/* Form Inputs */}
                    <form className="w-full md:w-[100%] flex flex-col gap-4" autoComplete="off">
                        <div className="relative w-full">
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white "
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <input
                                type="email"
                                placeholder="Email"
                                autoComplete="off"
                                readOnly
                                id = "email"
                                name = "email"
                                onFocus={(e) => e.target.removeAttribute("readOnly")}
                                className="w-full p-3 pl-10 rounded border-none bg-black bg-opacity-20 text-white outline-none focus:border-black placeholder:text-white appearance-none"
                            />
                        </div>

                        <div className="relative w-full">
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z"
                                    fill="white"
                                />
                                <path
                                    d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                                    fill="white"
                                />
                                <path
                                    d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"
                                    fill="white"
                                />
                                <path
                                    d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126"
                                    stroke="#white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <input
                                type="password"
                                placeholder="Password"
                                autoComplete="new-password"
                                readOnly
                                id = "password"
                                name = "password"
                                onFocus={(e) => e.target.removeAttribute("readOnly")}
                                className="w-full p-3 pl-10 rounded border-none bg-black bg-opacity-20 text-white outline-none focus:border-black placeholder:text-white appearance-none"
                            />
                        </div>

                        <button 
                            className="w-full md:w-[50%] mx-auto group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-[#161616] px-10 font-medium text-white transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] bg-[#161616] mt-7 text-lg"
                            type="submit"
                            formAction = {login}
                        >
                            <b>Sign in!</b>
                        </button>
                    </form>
                    <Link href ="/register" className = "text-base mt-5">
                        <span className="mt-5 relative cursor-pointer after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                            Don't have an account?
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
