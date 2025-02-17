"use client";

import ParticleBackground from "../components/particle-background";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/navbar";
import Link from 'next/link';

export default function Login() {
    return (
        <main className="flex flex-col md:flex-row min-h-screen">
            <ParticleBackground />

            {/* Right Side - Form */}
            <div className="w-full md:w-[100%] flex items-center justify-center bg-opacity-100" style={{ backgroundColor: "rgba(56, 56, 56, 0)" }}>
                <div className="w-full max-w-lg text-white flex flex-col items-center justify-start p-6">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-6 md:mt-10 text-center">
                        <Typewriter
                            words={["Create Account"]}
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
                    
                    <span className="mb-4 text-sm md:text-base text-center">or use your email for registration:</span>

                    {/* Form Inputs */}
                    <form className="w-full md:w-[100%] flex flex-col gap-4" autoComplete="off">
                        <div className="relative w-full">
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
                                fill="currentColor"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"/>
                            </svg>
                            <input
                                type="text"
                                placeholder="Full Name"
                                autoComplete="off"
                                readOnly
                                onFocus={(e) => e.target.removeAttribute("readOnly")}
                                className="w-full p-3 pl-10 rounded border-none bg-black bg-opacity-20 text-white outline-none focus:border-black placeholder:text-white appearance-none"
                            />
                        </div>

                        <div className="relative w-full">
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
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
                                    stroke="white"
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
                                onFocus={(e) => e.target.removeAttribute("readOnly")}
                                className="w-full p-3 pl-10 rounded border-none bg-black bg-opacity-20 text-white outline-none focus:border-black placeholder:text-white appearance-none"
                            />
                        </div>

                        <button 
                            className="w-full md:w-[50%] mx-auto group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-10 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] bg-white mt-7 text-lg"
                            type="submit"
                        >
                            <b>Sign up!</b>
                        </button>
                    </form>
                    <Link href ="/login" className = "text-base mt-5">
                        <span className="relative cursor-pointer after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            Already have an account?
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
