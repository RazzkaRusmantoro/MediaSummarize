"use client";

import ParticleBackground from "../../components/particle-background";
import Navbar from "../../components/navbar";

export default function YoutubeSummarizerClient() {
  return (
    <>
      <main className="relative min-h-screen">
        {/* Fixed Navbar at the top */}
        <Navbar />

        {/* Particle Background */}
        <ParticleBackground />

        <div className="relative z-10 pt-24 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-5xl font-bold mb-4">YouTube Video Summarizer</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Enter a YouTube video link below to generate a concise summary of its content.
          </p>
          <div className="flex items-center gap-4 w-full max-w-screen-md">
            <input
              type="text"
              className="flex-1 p-3 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
            <button
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              Generate Summary
            </button>
          </div>
        </div>
      </main>
    </>
  );
}