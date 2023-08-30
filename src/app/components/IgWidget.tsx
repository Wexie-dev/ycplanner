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
      <div className="mb-[28px] ml-0 flex h-[37px] w-[220px] items-center bg-gray-100 sm:max-lg:ml-8 md:h-[42px] md:w-[320px] xl:h-[54px] xl:w-[380px] 2xl:mb-[40px] 3xl:h-[68px] 3xl:w-[407px]">
        <div className="mr-[5px] flex h-full w-[42px] justify-center md:mr-[9px] md:w-[60px] xl:w-[78px]">
          <Image src={logo} alt="Logo" className="mr-2" />
        </div>
        <div className="flex h-full w-[173px] items-center justify-around rounded-[20px] bg-white pl-4 md:w-[319px]">
          <div className="w-[80px] text-[14px] font-semibold text-black md:w-[100px] md:text-[18px]">
            yc.planner
          </div>
          <a
            href="https://www.instagram.com/yc.planner/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-3/4 items-center rounded-xl bg-gray-100 px-[10px] py-1 text-[12px] text-black hover:bg-gray-200 md:px-6 md:py-2 md:text-[16px]"
          >
            Follow
          </a>
        </div>
      </div>
    </Transition>
  );
}

export default React.memo(IgWidget);
