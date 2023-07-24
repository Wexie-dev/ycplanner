import { BannerProps } from "@/types";
import React from "react";
import FullNavbar from "../components/FullNavbar";
import MobileNavbar from "../components/MobileNavbar";

export default function Banner(bannerProps: BannerProps) {
  const bannerTitle = bannerProps.title ?? "Bienvenidos";
  const bannerSubtitle =
    bannerProps.subTitle ?? "¡Hagamos que tu evento sea único!";

  return (
    <section id="home" className="h-screen w-full overflow-x-hidden">
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-banner bg-cover bg-center"></div>

        {/* Sticky Navbar */}
        <MobileNavbar />
        <FullNavbar />

        {/* Banner Content */}
        <div className="absolute top-0 left-0 md:left-[60%] w-full h-full md:w-[672px] flex flex-col items-center justify-center text-white">
          <div className="text-8xl font-bellina">{bannerTitle}</div>
          <div className="mt-6  text-3xl font-sans">{bannerSubtitle}</div>
        </div>
      </div>
    </section>
  );
}
