export const summarizeVideo = async (url: string) => {
    const response = await fetch('/api/proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to generate summary');
    }
  
    return response.json();
  };