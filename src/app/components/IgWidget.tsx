import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import logo from '../../../public/images/instalogo.svg';
function IgWidget({ show = true }: { show?: boolean }) {
  return (
    <Transition
      show={show}
      enter="transition-transform duration-500 ease-out"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-300 ease-in"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="mb-[28px] ml-0 flex h-[37px] w-[220px] items-center bg-gray-100 sm:ml-2 md:h-[68px] md:w-[407px] 2xl:mb-[40px] 2xl:ml-[22px]">
        <div className="mr-[5px] flex h-full w-[42px] justify-center md:mr-[9px] md:w-[78px]">
          <Image src={logo} alt="Logo" className="mr-2 h-[37px] w-[42px] md:h-[68px] md:w-[78px]" />
        </div>
        <div className="flex h-full w-[173px] items-center justify-around rounded-[20px] bg-white pl-1 md:w-[319px] md:pl-8">
          <div className="w-[80px] text-[14px] font-bold text-black md:w-[100px] md:text-[18px]">
            yc.planner
          </div>
          <a
            href="https://www.instagram.com/yc.planner/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[24px] rounded-xl bg-gray-100 px-[10px] py-1 text-[12px] text-black md:h-[40px] md:px-6 md:py-2 md:text-[16px]"
          >
            Follow
          </a>
        </div>
      </div>
    </Transition>
  );
}

export default React.memo(IgWidget);
