import { BannerProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import FullNavbar from '../components/FullNavbar';
import MobileNavbar from '../components/MobileNavbar';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import WhatsappButton from '../components/WhatsappButton';
import ScrollToTopButton from '../components/HowIWork/ScrollToTopButton';

function Banner(bannerProps: BannerProps) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const bannerTitle = bannerProps.title ?? 'Bienvenidos';
  const bannerSubtitle = bannerProps.subtitle ?? '¡Hagamos que tu evento sea único!';
  const desktopBannerImg = bannerProps.bgImage?.url;
  const mobileBannerImg = bannerProps.mobileBgImage?.url;
  const remoteBannerImg = isMobile ? mobileBannerImg : desktopBannerImg;

  const useDefaultBannerImg = Boolean(remoteBannerImg);

  const handleScrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <section
      id="home"
      className="h-screen w-full overflow-x-hidden overflow-y-hidden sm:h-full xl:h-screen"
    >
      <div className="relative h-screen w-screen overflow-hidden sm:h-[505px] md:h-[620px] xl:h-screen">
        {/* Background Image */}
        <div
          style={useDefaultBannerImg ? { backgroundImage: `url(${remoteBannerImg})` } : {}}
          className={`lg:bg-to absolute left-0 top-0 h-full w-full ${
            useDefaultBannerImg ? 'bg-mobileBanner lg:bg-banner' : null
          } bg-cover bg-center sm:bg-tabletBanner`}
        >
          <div className="opacity-85 h-full bg-gradient-to-b from-transparent via-transparent to-zinc-800 lg:hidden"></div>
        </div>

        {/* Sticky Navbar */}
        <MobileNavbar />
        <FullNavbar />

        {/* Banner Content */}
        <div className="absolute left-0 top-[28%] flex h-full w-full flex-col items-center justify-center text-white sm:top-[120px] md:left-[10%] md:w-[672px] lg:left-[40%] lg:top-[80px] xl:left-[50%] 2xl:left-[54%] 3xl:left-[56%]">
          <div className="font-anguilla text-[76px] leading-none md:text-[92px] lg:text-[114px] xl:text-[166px]">
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

        <div className="fixed bottom-8 right-5 z-40 ">
          <div className="flex flex-col items-center justify-center gap-y-5">
            {/* Whatsapp Sticky Button */}
            <WhatsappButton />
            {/* Scroll to top Sticky Button */}
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Banner);
