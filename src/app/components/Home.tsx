import { useContentsQuery } from "@/hooks/useContents";
import React from "react";

export default function Home() {
  const { data: content, isLoading, isError, error } = useContentsQuery();
  console.log("🚀 ~ file: Home.tsx:6 ~ Home ~ content:", content);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: </div>;
  return <div>Home</div>;
}
