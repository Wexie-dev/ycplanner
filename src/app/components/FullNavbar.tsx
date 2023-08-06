import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/YaninaCorti-logo.svg';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import SmoothScrollLink from './SmoothScroll';

function FullNavbar() {
  const matchedLG = useMediaQuery(mediaQueries.tablet);

  return (
    <nav className="duration-50 left-0 top-0 z-50 flex w-full items-center bg-white shadow-lg ease-in sm:fixed md:h-[72px] 2xl:h-[80px]">
      <div className="container mr-0 px-4 md:ml-0 2xl:ml-[152px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Image width={matchedLG ? 48 : 72} height={matchedLG ? 40 : 64} src={logo} alt="Logo" />
            <div className="flex w-[350px] font-butler font-normal text-[#36373A] lg:text-[14px] 2xl:text-[20px]">
              Wedding & Event Planner
            </div>
          </div>
          {/* Add your navigation links here */}
          <ul className="hidden-[100px] font-montserrat mr-0 w-full justify-start gap-8 text-[#5B5A5A] md:justify-end lg:flex lg:space-x-3 lg:text-[16px] 2xl:mr-[22px] 2xl:space-x-8 2xl:text-[18px] 2xl:font-semibold">
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#about">Sobre mi</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#howIWork">¿Cómo trabajo?</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#gallery">Galería</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#">Testimonios</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out 2xl:mr-[88px]">
              <SmoothScrollLink to="#contactMe">Contactame</SmoothScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FullNavbar;
