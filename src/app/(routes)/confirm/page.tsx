"use client";

import ParticleBackground from "../../components/particle-background";
import Navbar from "../../components/navbar";

export default function ConfirmPage() {
  return (
    <>
      <main className="relative h-screen">
        <Navbar />
        <ParticleBackground />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-6">
          <h1 className="text-4xl font-bold mb-4">Email Sent!</h1>
          <p className="text-lg text-gray-300">
            We have sent a confirmation email to your address. Please check your inbox to confirm your email.
          </p>
        </div>
      </main>
    </>
  );
}
