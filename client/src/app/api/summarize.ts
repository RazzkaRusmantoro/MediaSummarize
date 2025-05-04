// pages/api/summarize.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  // Path to your Python script
  const pythonScriptPath = path.join(process.cwd(), 'scripts', 'summarize.py');

  // Execute the Python script
  exec(`python3 ${pythonScriptPath} "${url}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      return res.status(500).json({ message: 'Error processing the video' });
    }

    if (stderr) {
      console.error(`Python script stderr: ${stderr}`);
      return res.status(500).json({ message: 'Error processing the video' });
    }

    // Parse the output from the Python script
    try {
      const summary = JSON.parse(stdout);
      return res.status(200).json(summary);
    } catch (parseError) {
      console.error(`Error parsing Python script output: ${parseError}`);
      return res.status(500).json({ message: 'Error processing the video' });
    }
  });
}