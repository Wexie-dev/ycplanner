import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/YaninaCorti-logo.svg';

function FullNavbar() {
  return (
    <nav className="left-0 top-0 h-[80px] w-full bg-white shadow-lg sm:fixed">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Image width={72} height={57} src={logo} alt="Logo" />
            <div className="flex font-butler text-[20px] font-normal">Wedding & Event Planner</div>
          </div>
          {/* Add your navigation links here */}
          <ul className="hidden space-x-8 md:flex">
            <li>Sobre mi</li>
            <li>¿Cómo trabajo?</li>
            <li>Galería</li>
            <li>Testimonios</li>
            <li>Contactame</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FullNavbar;
