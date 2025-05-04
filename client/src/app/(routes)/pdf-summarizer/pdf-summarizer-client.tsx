"use client";

import { useState } from 'react';
import ParticleBackground from "../../components/particle-background";
import Navbar from "../../components/navbar";
import styles from './style.module.css';
import Chatbox from "../../components/chatbox";

const parseBoldText = (text: string): string => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

export default function PdfSummarizer() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  // Handle file drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  // Handle drag over
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  // Handle drag leave
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Handle summarization
  const handleSummarize = async () => {
    if (!file) {
      alert('Please upload a PDF file first.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/summarize-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to summarize the PDF.');
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error(error);
      alert('An error occurred while summarizing the PDF.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="relative min-h-screen">
        {/* Particle Background */}
        <ParticleBackground />

        <div className="relative z-10 pt-24 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-5xl font-bold mb-4">PDF Summarizer</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Upload a PDF file below to generate a concise summary of its content.
          </p>

          {/* Drag-and-drop file upload area */}
          <div
            className={`w-full max-w-4xl p-8 border-2 border-dashed rounded-lg ${
              isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-300 bg-gray-800/10'
            } transition-all`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center space-y-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-gray-400">
                {file
                  ? `Selected file: ${file.name}`
                  : 'Drag & drop a PDF file here or click to upload'}
              </p>
            </label>
          </div>

          {/* Display the selected file name */}
          {file && (
            <div className="mt-4 text-gray-300">
              <p>Selected file: <span className="font-semibold">{file.name}</span></p>
              <button
                onClick={handleSummarize}
                disabled={loading}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
              >
                {loading ? <div className={styles.loader}></div> : 'Summarize PDF'}
              </button>
            </div>
          )}

          {/* Display the summary */}
          {summary && (
            <div className="mt-8 w-full max-w-[90%] flex flex-col md:flex-row gap-6">

              {/* Summary (Right Side) */}
              <div className="w-full md:w-[100%] p-6 bg-white rounded-lg text-left opacity-0 animate-fade-in-up">
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