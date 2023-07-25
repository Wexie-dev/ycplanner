import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/YaninaCorti-logo.svg';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import { Transition } from '@headlessui/react';

function FullNavbar() {
  const matchedMD = useMediaQuery(mediaQueries.tablet);

  return (
    <nav className="duration-50 left-0 top-0 w-full bg-white shadow-lg ease-in sm:fixed md:h-[72px] 2xl:h-[80px]">
      <div className="container px-4 md:ml-0 2xl:ml-[136px]">
        <div className="flex w-full items-center justify-between py-3">
          <div className="flex items-center">
            <Image width={matchedMD ? 48 : 72} height={matchedMD ? 40 : 64} src={logo} alt="Logo" />
            <div className="flex w-[350px] font-butler font-normal text-[#36373A] md:text-[14px] 2xl:text-[20px]">
              Wedding & Event Planner
            </div>
          </div>
          {/* Add your navigation links here */}
          <ul className="hidden-[100px] font-montserrat w-full justify-end gap-8 text-[#5B5A5A] md:flex md:space-x-3 md:text-[16px] 2xl:space-x-8 2xl:text-[18px] 2xl:font-semibold">
            <li className="transition-all duration-300 ease-in-out">
              <a className="scroll-smooth" href="#about">
                Sobre mi
              </a>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <a className="scroll-smooth" href="#ComoTrabajo">
                ¿Cómo trabajo?
              </a>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <a className="scroll-smooth" href="#Galeria">
                Galería
              </a>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <a className="scroll-smooth" href="#Testimonios">
                Testimonios
              </a>
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <a className="scroll-smooth" href="#Contactame">
                Contactame
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FullNavbar;
