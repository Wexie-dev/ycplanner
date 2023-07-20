import Image from "next/image";
import Maintenance from "./components/Maintenance";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Maintenance />
    </main>
  );
}
