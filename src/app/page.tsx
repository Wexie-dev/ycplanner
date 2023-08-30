import { fetchContent } from '@/services/cms-api';
import Home from './pages/Home';
export default async function PageIndex() {
  const content = await fetchContent();
  return (
    <main className="fade-in flex min-h-screen flex-col items-center justify-between overflow-x-hidden overflow-y-hidden">
      <Home content={content} />
    </main>
  );
}
