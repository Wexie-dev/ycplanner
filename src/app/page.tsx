'use client';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function PageIndex() {
  const queryClient = new QueryClient();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === 'development' ? <Home /> : <Maintenance />}
      </QueryClientProvider>
    </main>
  );
}
