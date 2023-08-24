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
  return (
    <div className="text-[#36373A] xl:flex xl:justify-center xl:pb-10 xl:pt-16">
      <div className="flex justify-center pb-4 pt-10 font-butler text-2xl font-normal sm:text-3xl md:pt-[60px] md:text-3xl lg:pt-[75px] lg:text-5xl xl:hidden">
        {title1}
      </div>
      <div className="relative sm:flex sm:items-center sm:justify-center xl:block">
        <div className="relative h-[376px] w-[312px] md:h-[489px] md:w-[405px] lg:h-[872px] lg:w-[729px] xl:h-[586px] xl:w-[486px] 2xl:mb-28 2xl:h-[872px] 2xl:w-[729px]">
          <Image
            fill
            className="relative z-20 ml-4 mt-8 lg:mt-20 xl:ml-24 xl:mt-[55px] 2xl:mb-8 2xl:ml-10 2xl:mt-20"
            src={`${image?.url}`}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={'yanina'}
          />
        </div>
        <div className="absolute left-10 top-4 z-10 h-[352px] w-[304px] bg-[#AD837E] opacity-50 shadow-2xl sm:left-[32%] md:h-[458px] md:w-[395px] lg:left-[21%] lg:top-12 lg:h-[826px] lg:w-[712px] xl:left-[27%] xl:top-8 xl:h-[550px] xl:w-[474px] xl:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] 2xl:left-[13%] 2xl:top-10 2xl:h-[826px] 2xl:w-[712px]"></div>
      </div>

      <div className="ml-10 font-normal lg:ml-32 xl:ml-[200px] xl:mr-20 2xl:ml-[190px] 2xl:w-[575px]">
        <div className="hidden pt-10 font-butler text-2xl font-normal lg:text-4xl xl:flex 2xl:pt-24 2xl:text-5xl">
          {title1}
        </div>
        <div className="flex pt-20 font-butler text-2xl lg:pt-32 lg:text-4xl xl:pt-16 xl:text-3xl 2xl:text-4xl">
          {subtitle1}
        </div>
        <div className="flex pr-10 pt-2 text-base lg:pt-4">{paragraph1}</div>
        <div className="flex pt-6 font-butler text-2xl lg:pt-9 lg:text-4xl xl:pt-6 xl:text-3xl 2xl:pt-10 2xl:text-4xl">
          {subtitle2}
        </div>
        <pre
          className="my- flex whitespace-pre-wrap pr-10 font-sans text-base lg:pt-4"
          dangerouslySetInnerHTML={{ __html: paragraph2 }}
        />
        <div className="flex pt-6 font-anguilla text-5xl text-[#996058] lg:pt-6 lg:text-[80px]">
          {subtitle3}
        </div>
        <div className="flex pb-12 pr-10 pt-6 text-base lg:pt-6">{paragraph3}</div>
      </div>
    </div>
  );
}

export default Info;
