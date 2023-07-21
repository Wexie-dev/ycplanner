import { useContentsQuery } from "@/hooks/useContents";
import React from "react";
import About from "../sections/About";
import Banner from "../sections/Banner";

export default function Home() {
  const { data: content, isLoading, isError, error } = useContentsQuery();
  console.log("🚀 ~ file: Home.tsx:6 ~ Home ~ content:", content);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: </div>;
  return (
    <div>
      <Banner></Banner>
      <About></About>
    </div>
  );
}
