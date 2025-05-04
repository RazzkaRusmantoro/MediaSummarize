import { getUser } from '@/app/auth/getUser';
import PdfSummarizer from './pdf-summarizer-client';

export default async function PdfSummarizerPage() {
  const user = await getUser();

  return <PdfSummarizer />;
}