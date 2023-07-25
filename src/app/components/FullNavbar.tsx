import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/images/YaninaCorti-logo.svg";
import useMediaQuery, { mediaQueries } from "@/hooks/useMediaQueries";
import { Transition } from "@headlessui/react";

function FullNavbar() {
  const matchedMD = useMediaQuery(mediaQueries.tablet);

  return (
    <nav className='ease-in duration-50 sm:fixed top-0 left-0 w-full 2xl:h-[80px] md:h-[72px] bg-white shadow-lg'>
      <div className="container 2xl:ml-[136px] md:ml-0 px-4">
        <div className="flex justify-between items-center py-3 w-full">
          <div className="flex items-center">
            <Image
              width={matchedMD ? 48 : 72}
              height={matchedMD ? 40 : 64}
              src={logo}
              alt="Logo"
            />
            <div className="flex font-butler 2xl:text-[20px] md:text-[14px] font-normal text-[#36373A] w-[350px]">
              Wedding & Event Planner
            </div>
          </div>
          {/* Add your navigation links here */}
          <ul className="hidden-[100px] md:flex 2xl:space-x-8 md:space-x-3 gap-8 md:text-[16px] 2xl:text-[18px] 2xl:font-semibold font-montserrat text-[#5B5A5A] w-full justify-end">
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
