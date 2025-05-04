"use client"

import React from "react";
import ParticleBackground from "./particle-background";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="mb-24 relative">
            {/* Particle background */}
            <ParticleBackground />
            <div className="mx-auto max-w-4xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                    <span className="block">
                        <Typewriter
                            words={["Summarize anything in seconds."]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={80}
                            delaySpeed={8000}
                        />
                    </span>
                    <span className="block">
                        <Typewriter
                            words={["Start using our services today."]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={80}
                            delaySpeed={8000}
                        />
                    </span>
                </h2>
                
                {/* Fade-in animation for paragraph */}
                <motion.p 
                    className="mt-4 text-lg leading-6 max-w-xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    This website can transcribe and summarize any media you provide for easy note-taking, whether it's a YouTube video link or a PDF. It quickly extracts the relevant information and provides a concise summary, making it easy to understand<br /> the key points without having to go through the entire content.
                </motion.p>
                
                {/* Fade-in animation for button */}
                <motion.button 
                    className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-10 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] bg-white mt-7 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    <b>Get Started for Free!</b>
                </motion.button>
                
                {/* Fade-in animation for preview link */}
                <motion.div 
                    className="mt-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}
                >
                    <p className="relative inline-block font-bold cursor-pointer">
                        <span className="underline-animation absolute bottom-0 left-0 w-full h-0.5 bg-white animate-underline-animation"></span>
                        Check out our preview!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
