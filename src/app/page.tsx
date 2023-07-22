"use client";
import Home from "./components/Home";
import Maintenance from "./components/Maintenance";
import { QueryClient, QueryClientProvider } from "react-query";

export default function PageIndex() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <QueryClientProvider client={new QueryClient()}>
        {process.env.NODE_ENV === "development" ? <Home /> : <Maintenance />}
      </QueryClientProvider>
    </main>
  );
}
