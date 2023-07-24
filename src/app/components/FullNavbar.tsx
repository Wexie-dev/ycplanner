import React from "react";
import Image from "next/image";
import logo from "../../../public/images/YaninaCorti-logo.svg";

function FullNavbar() {
  return (
    <nav className="sm:fixed top-0 left-0 w-full h-[80px] bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Image width={72} height={57} src={logo} alt="Logo" />
            <div className="flex font-butler text-[20px] font-normal">
              Wedding & Event Planner
            </div>
          </div>
          {/* Add your navigation links here */}
          <ul className="hidden md:flex space-x-8">
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
