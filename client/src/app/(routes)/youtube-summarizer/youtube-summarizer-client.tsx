"use client";

import { useState } from 'react';
import ParticleBackground from "../../components/particle-background";
import Navbar from "../../components/navbar";
import styles from './style.module.css';
import Chatbox from "../../components/chatbox";

const parseBoldText = (text: string): string => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

export default function YoutubeSummarizerClient() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!url) {
      alert('Please enter a valid YouTube URL');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/proxy/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (response.ok) {
        setSummary(data.summary);
      } else {
        console.error(data.error);
        alert('Failed to generate summary');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Extract the YouTube video ID from the URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(url);

  return (
    <>
      <main className="relative min-h-screen">

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
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              className="p-3 bg-blue-600 min-w-[150px] text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex items-center justify-center gap-2"
              onClick={handleSummarize}
              disabled={loading}
            >
              {loading ? <div className={styles.loader}></div> : 'Summarize'}
            </button>
          </div>

          {summary && (
            <div className="mt-8 w-full max-w-[90%] flex flex-col md:flex-row gap-6">
              {/* YouTube Video Player (Left Side) */}
              <div className="w-full md:w-1/2">
                {videoId && (
                  <div className="relative aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              {/* Summary (Right Side) */}
              <div className="w-full md:w-1/2 p-6 bg-white rounded-lg text-left opacity-0 animate-fade-in-up">
                <h2 className="text-2xl font-bold mb-4 text-black">Summary</h2>
                <div className="max-h-96 overflow-y-auto">
                  <p
                    className="text-black whitespace-pre-line opacity-0 animate-fade-in-delay"
                    dangerouslySetInnerHTML={{ __html: parseBoldText(summary) }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Render Chatbox only when summary is available */}
          {summary && <Chatbox summary={summary} />}
        </div>
      </main>
    </>
  );
}