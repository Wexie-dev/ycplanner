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
          className={`absolute left-0 top-0 h-full w-full bg-mobileBanner bg-cover bg-center lg:bg-banner `}
        >
          <div className="opacity-85 h-full bg-gradient-to-b from-transparent via-transparent to-zinc-800 lg:hidden"></div>
        </div>

        {/* Sticky Navbar */}
        <MobileNavbar />
        <FullNavbar />

        {/* Banner Content */}
        <div className="absolute left-0 top-[300px] flex h-full w-full flex-col items-center justify-center text-white md:left-[10%] md:w-[672px] lg:left-[40%] lg:top-0 xl:left-[50%] 2xl:left-[60%]">
          <div className="font-bellina text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {bannerTitle}
          </div>
          <div className="mt-6 w-[220px] text-center font-sans text-lg font-medium sm:w-full md:text-xl lg:text-2xl xl:text-3xl">
            {bannerSubtitle}
          </div>
          <button
            onClick={handleScrollDown}
            className={`relative mt-8 h-6 w-6 -translate-x-1/2 transform animate-bounce`}
          >
            <Image src="/images/sections/banner/scrolldown-arrow.svg" alt="Scroll Down" fill />
          </button>
        </div>
      </div>
    </section>
  );
}
