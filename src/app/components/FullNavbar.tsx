import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/YaninaCorti-logo.svg';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import SmoothScrollLink from './SmoothScroll';

function FullNavbar() {
  const matchedLG = useMediaQuery(mediaQueries.tablet);

  return (
    <nav className="duration-50 left-0 top-0 z-50 hidden items-center bg-white shadow-lg ease-in md:fixed md:flex md:h-[72px] md:w-full 2xl:h-[80px]">
      <div className="mr-0 px-4 md:ml-0 md:w-full xl:ml-[8%]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Image width={matchedLG ? 48 : 72} height={matchedLG ? 40 : 64} src={logo} alt="Logo" />
            <div className="flex w-full font-butler font-normal text-[#36373A] lg:text-sm 2xl:text-[20px]">
              Wedding & Event Planner
            </div>
          </div>
          {/* Add your navigation links here */}
          <ul className="font-montserrat ml-6 mr-[2%] flex gap-8 font-semibold text-[#5B5A5A] md:text-xs lg:ml-12 lg:space-x-3 lg:text-base 2xl:space-x-8 2xl:text-lg">
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
              <SmoothScrollLink to="#testimonies">Testimonios</SmoothScrollLink>
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
