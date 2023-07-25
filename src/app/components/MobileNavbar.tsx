import React, { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import logo_navbar_open from '../../../public/images/YCPlanner-logo-mobileNavbar-open.svg';
import logo_navbar_closed from '../../../public/images/YCPlanner-logo-mobileNavbar-closed.svg';
import logo_navbar_sobreMi from '../../../public/images/mobileNavbar-icon-SobreMi.svg';
import logo_navbar_comoTrabajo from '../../../public/images/mobileNavbar-icon-ComoTrabajo.svg';
import logo_navbar_galeria from '../../../public/images/mobileNavbar-icon-Galeria.svg';
import logo_navbar_testimonios from '../../../public/images/mobileNavbar-icon-Testimonios.svg';
import logo_navbar_contactame from '../../../public/images/mobileNavbar-icon-Contactame.svg';

const navbarOptions = [
  {
    text: 'Sobre mi',
    icon: { src: logo_navbar_sobreMi, alt: 'Sobre Mi' },
    url: '#about',
    size: { width: 20, height: 20 },
  },
  {
    text: '¿Cómo trabajo?',
    icon: { src: logo_navbar_comoTrabajo, alt: '¿Cómo trabajo?' },
    url: '#',
    size: { width: 24, height: 22 },
  },
  {
    text: 'Galería',
    icon: { src: logo_navbar_galeria, alt: 'Galería' },
    url: '#',
    size: { width: 24, height: 17 },
  },
  {
    text: 'Testimonios',
    icon: { src: logo_navbar_testimonios, alt: 'Testimonios' },
    url: '#',
    size: { width: 23, height: 20 },
  },
  {
    text: 'Contactame',
    icon: { src: logo_navbar_contactame, alt: 'Contactame' },
    url: '#',
    size: { width: 25, height: 19 },
  },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed z-50 h-16 w-full bg-white shadow-lg md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-3 top-2 z-50 block ${
          isOpen ? 'left-[74%] duration-200 ease-in' : 'duration-200 ease-in'
        }`}
      >
        <svg
          className="h-12 w-12 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${isOpen ? 'hidden' : 'block text-[#97989C]'}`}
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={`${isOpen ? 'block text-white' : 'hidden'}`}
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Image
        width={50}
        height={44}
        className="fixed left-20 top-3"
        src={logo_navbar_closed}
        alt={''}
      />
      <div className="fixed left-36 top-6 font-butler text-sm font-normal text-[#97989C]">
        Wedding & Event Planner
      </div>
      <Transition
        show={isOpen}
        enter="transition-transform duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="shadow-3xl fixed inset-0 z-40 bg-white sm:hidden"
        style={{ width: '90%' }}
        ref={menuRef}
      >
        <div className="flex h-full flex-col text-black">
          <div className="flex h-[131px] w-full flex-col items-center gap-4 bg-[#A6837F]">
            <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-white pl-2 pt-1 shadow-lg ">
              <Image width={50} height={44} className="" src={logo_navbar_open} alt={''} />
            </div>
            <div className="flex font-butler text-base font-normal text-white">
              Wedding & Event Planner
            </div>
          </div>
          <div className="flex flex-col gap-8 pl-6 pt-11 text-base font-normal">
            {navbarOptions.map((option, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex items-center justify-center">
                  <Image
                    width={option.size.width}
                    height={option.size.height}
                    src={option.icon.src}
                    alt={option.icon.alt}
                  />
                </div>
                <div>
                  <a href={option.url} className="" onClick={closeMenu}>
                    {option.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default MobileNavbar;
