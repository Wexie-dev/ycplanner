import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/YaninaCorti-logo.svg';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import SmoothScrollLink from './SmoothScroll';

function FullNavbar() {
  const matchedLG = useMediaQuery(mediaQueries.tablet);

  return (
    <nav className="duration-50 left-0 top-0 hidden w-full bg-white shadow-lg ease-in sm:fixed lg:block lg:h-[72px] 2xl:h-[80px] z-10">
      <div className="container px-4 lg:ml-0 2xl:ml-[136px]">
        <div className="flex w-full items-center justify-between py-3">
          <div className="flex items-center">
            <Image width={matchedLG ? 48 : 72} height={matchedLG ? 40 : 64} src={logo} alt="Logo" />
            <div className="flex w-[350px] font-butler font-normal text-[#36373A] lg:text-[14px] 2xl:text-[20px]">
              Wedding & Event Planner
            </div>
          </div>
          {/* Add your navigation links here */}
          <ul className="hidden-[100px] font-montserrat w-full justify-end gap-8 text-[#5B5A5A] lg:flex lg:space-x-3 lg:text-[16px] 2xl:space-x-8 2xl:text-[18px] 2xl:font-semibold">
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#about">Sobre mi</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#">¿Cómo trabajo?</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#gallery">Galería</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#">Testimonios</SmoothScrollLink>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <SmoothScrollLink to="#">Contactame</SmoothScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FullNavbar;
