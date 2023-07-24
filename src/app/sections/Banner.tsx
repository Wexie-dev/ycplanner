import { BannerProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import FullNavbar from '../components/FullNavbar';
import MobileNavbar from '../components/MobileNavbar';

export default function Banner(bannerProps: BannerProps) {
  const bannerTitle = bannerProps.title ?? 'Bienvenidos';
  const bannerSubtitle = bannerProps.subTitle ?? '¡Hagamos que tu evento sea único!';

  const handleScrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <section id="home" className="h-screen w-full overflow-x-hidden">
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Background Image */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-mobileBanner lg:bg-banner bg-cover bg-center `}
        >
          <div className="lg:hidden h-full bg-gradient-to-b from-transparent via-transparent to-zinc-800 opacity-85"></div>
        </div>

        {/* Sticky Navbar */}
        <MobileNavbar />
        <FullNavbar />

        {/* Banner Content */}
        <div className="absolute top-[300px] lg:top-0 left-0 md:left-[10%] lg:left-[40%] xl:left-[50%] 2xl:left-[60%] w-full h-full md:w-[672px] flex flex-col items-center justify-center text-white">
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bellina">
            {bannerTitle}
          </div>
          <div className="font-medium text-center w-[220px] sm:w-full mt-6 text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans">
            {bannerSubtitle}
          </div>
          <button
            onClick={handleScrollDown}
            className={`relative w-6 h-6 mt-8 transform -translate-x-1/2 animate-bounce`}
          >
            <Image src="/images/sections/banner/scrolldown-arrow.svg" alt="Scroll Down" fill />
          </button>
        </div>
      </div>
    </section>
  );
}
