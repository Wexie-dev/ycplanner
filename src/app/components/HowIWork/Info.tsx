import React from 'react';
import Image from 'next/image';
import { ImageContent } from '@/types';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';

export type HowIWorkInfoProps = {
  title1: string;
  image: ImageContent;
  subtitle1: string;
  paragraph1: string;
  subtitle2: string;
  paragraph2: string;
  subtitle3: string;
  paragraph3: string;
};

function Info({
  title1,
  image,
  subtitle1,
  paragraph1,
  subtitle2,
  paragraph2,
  subtitle3,
  paragraph3,
}: HowIWorkInfoProps) {
  const isMobile = useMediaQuery(mediaQueries.mobile);

  return (
    <div className="bg-[#E9EAED] text-[#36373A] 2xl:flex 2xl:justify-center">
      <div className="flex justify-center pt-2 font-butler text-2xl font-normal lg:text-5xl 2xl:hidden">
        {title1}
      </div>
      <div className="relative sm:flex sm:items-center sm:justify-center 2xl:block">
        <div className="relative h-[376px] w-[312px] md:h-[489px] md:w-[405px] lg:h-[872px] lg:w-[729px] 2xl:mb-28">
          <Image
            fill
            className="relative z-20 ml-4 mt-8 lg:mt-20 2xl:mb-8 2xl:mt-20"
            src={`${image?.url}`}
            quality={100}
            alt={''}
          />
        </div>
        <div className="absolute left-10 top-4 z-10 h-[352px] w-[304px] bg-[#AD837E] opacity-50 drop-shadow-[0_11px_48px_0_#00000040] sm:left-[32%] md:h-[458px] md:w-[395px] lg:left-[21%] lg:top-12 lg:h-[826px] lg:w-[712px] 2xl:left-16 2xl:top-10"></div>
      </div>

      <div className="ml-10 font-normal lg:ml-32 2xl:ml-[150px] 2xl:w-[575px]">
        <div className="hidden pt-24 font-butler text-2xl font-normal lg:text-5xl 2xl:flex">
          {title1}
        </div>
        <div className="flex pt-16 font-butler text-2xl lg:pt-32 lg:text-4xl 2xl:pt-16">
          {subtitle1}
        </div>
        <div className="flex pr-10 pt-2 text-base lg:pt-4">{paragraph1}</div>
        <div className="flex pt-6 font-butler text-2xl lg:pt-9 lg:text-4xl 2xl:pt-10">
          {subtitle2}
        </div>
        <div className="">
          {paragraph2?.split('.').map((paragraph, index) => (
            <p className="flex pb-2 pr-10 pt-2 text-base lg:pt-4" key={index}>
              {paragraph}.
            </p>
          ))}
        </div>
        <div className="flex pt-2 font-anguilla text-5xl text-[#996058] lg:pt-6 lg:text-[80px]">
          {subtitle3}
        </div>
        <div className="flex pb-12 pr-10 pt-2 text-base lg:pt-6">{paragraph3}</div>
      </div>
    </div>
  );
}

export default Info;
