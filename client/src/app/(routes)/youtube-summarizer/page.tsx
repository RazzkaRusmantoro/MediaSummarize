import YoutubeSummarizerClient from './youtube-summarizer-client';
import { getUser } from '@/app/auth/getUser';

export default async function YoutubeSummarizer() {
  const user = await getUser();

  return <YoutubeSummarizerClient />;
}
