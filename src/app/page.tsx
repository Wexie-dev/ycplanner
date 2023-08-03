'use client';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function PageIndex() {
  const queryClient = new QueryClient();
  const [secretCode, setSecretCode] = useState('');
  const [bypass, setBypass] = useState(false);
  const secretSequence = ['ArrowLeft', 'ArrowUp', 'ArrowRight'];

  useEffect(() => {
    const handleKeyDown = (event: { code: string }) => {
      setSecretCode((prevCode) => prevCode + event.code); // Append the pressed key to the secret code

      // Check if the secret code matches the secret sequence
      if (secretCode === secretSequence.join('')) {
        // Perform the desired action when the secret sequence is entered correctly
        // For example, update the value of a variable
        setBypass(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown); // Add keydown event listener

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Clean up by removing the event listener
    };
  }, [secretCode, secretSequence]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden overflow-y-hidden">
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === 'development' || bypass ? <Home /> : <Maintenance />}
      </QueryClientProvider>
    </main>
  );
}
