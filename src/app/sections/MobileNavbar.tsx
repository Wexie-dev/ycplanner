import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import logo_navbar_open from "../../../public/images/YCPlanner-logo-mobileNavbar-open.svg";
import logo_navbar_closed from "../../../public/images/YCPlanner-logo-mobileNavbar-closed.svg";

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

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <section id="mobileNavbar" className="w-full h-full">
      <div className="w-screen bg-white shadow-lg h-16 fixed z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`block fixed top-2 left-3 z-50 ${
            isOpen ? "left-[64%] ease-in duration-200" : "ease-in duration-200"
          }`}
        >
          <svg
            className="w-12 h-12 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${isOpen ? "hidden" : "block text-[#97989C]"}`}
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`${isOpen ? "block text-white" : "hidden"}`}
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
          className="fixed top-3 left-20"
          src={logo_navbar_closed}
          alt={""}
        />
        <div className="fixed top-6 left-36 font-butler text-sm font-normal text-[#97989C]">
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
          className="sm:hidden fixed inset-0 bg-white z-40 shadow-3xl"
          style={{ width: "80%" }}
          ref={menuRef}
        >
          <div className="flex flex-col h-full text-black">
            <div className="w-full h-[131px] bg-[#A6837F] flex flex-col items-center gap-4">
              <div className="bg-white shadow-lg rounded-full w-16 h-16 flex justify-center items-center mt-4 pl-2 pt-1 ">
                <Image
                  width={50}
                  height={44}
                  className=""
                  src={logo_navbar_open}
                  alt={""}
                />
              </div>
              <div className="flex font-butler text-sm font-normal text-white">
                Wedding & Event Planner
              </div>
            </div>
            <div className="flex flex-col gap-8 pt-11 pl-6 font-normal text-base">
              <div className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    width={24}
                    height={23}
                    className=""
                    src={""}
                    alt={""}
                  />
                </div>
                <div>
                  <a href="#about" className="" onClick={closeMenu}>
                    Sobre mi
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    width={24}
                    height={22}
                    className=""
                    src={""}
                    alt={""}
                  />
                </div>
                <div>
                  <a href="#" className="" onClick={closeMenu}>
                    ¿Cómo trabajo?
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    width={24}
                    height={17}
                    className=""
                    src={""}
                    alt={""}
                  />
                </div>
                <div>
                  <a href="#" className="" onClick={closeMenu}>
                    Galería
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    width={23}
                    height={20}
                    className=""
                    src={""}
                    alt={""}
                  />
                </div>
                <div>
                  <a href="#" className="" onClick={closeMenu}>
                    Testimonios
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    width={25}
                    height={19}
                    className=""
                    src={""}
                    alt={""}
                  />
                </div>
                <div>
                  <a href="#" className="" onClick={closeMenu}>
                    Contactame
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
}

export default MobileNavbar;
