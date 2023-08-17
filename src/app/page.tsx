import { fetchContent } from '@/services/cms-api';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

export default async function PageIndex() {
  const content = await fetchContent();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden overflow-y-hidden">
      <Home content={content} />
    </main>
  );
}
