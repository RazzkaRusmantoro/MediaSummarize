import { redirect } from 'next/navigation';
import YoutubeSummarizerClient from './YoutubeSummarizerClient';
import { getUser } from '@/app/auth/getUser';

export default async function YoutubeSummarizer() {
  const user = await getUser();

  return <YoutubeSummarizerClient />;
}
