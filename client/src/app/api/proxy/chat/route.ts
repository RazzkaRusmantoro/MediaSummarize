import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { summary, message } = await request.json();
  console.log('Received summary and message:', { summary, message });

  try {
    const backendResponse = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ summary, message }),
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error('Backend error:', errorText);
      return NextResponse.json({ error: 'Backend error: ' + errorText }, { status: 500 });
    }

    const data = await backendResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch chat response' }, { status: 500 });
  }
}