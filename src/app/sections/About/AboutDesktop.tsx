import React from 'react';
import Image from 'next/image';
import { AboutProps } from '@/types';
import Events from '@/app/components/About/Events';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
export default function AboutDesktop({
  title,
  description,
  image,
  subtitle,
  keyPoints,
  eventsTitle,
  events,
  closingText,
}: AboutProps) {
  return (
    <>
      <div className="flex justify-evenly px-4 sm:max-lg:flex-col sm:max-md:px-16 md:px-8 xl:px-[100px] 2xl:px-[146px] 3xl:px-[218px]">
        <div className="flex-grow-1 md:px-4 md:max-lg:max-w-2xl">
          <div
            id="main-image-container"
            className={`relative sm:h-[400px] sm:w-full md:h-[482px] md:w-full lg:h-full lg:w-[525px] xl:h-[576px] xl:w-[584px]`}
          >
            <Image
              src={image?.url}
              alt={image.fileName}
              fill
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
        </div>
        <div className="flex-grow-2 text-left sm:max-w-md sm:max-lg:mt-10 md:max-w-3xl md:px-4 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <h1 className="mb-6 font-butler font-normal sm:text-[36px] lg:text-[48px]">{title}</h1>
          <pre
            className=" my-2 whitespace-pre-wrap font-sans text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="my-10">
            <h5 className="text-center font-anguilla text-[32px] text-typographyPink sm:text-left sm:text-[40px] md:text-[40px] xl:text-[56px] 2xl:text-[64px]">
              {subtitle}
            </h5>
          </div>
          {keyPoints.map((keyPoint) => (
            <p className="mb-5 text-left text-base text-typographyGray">
              <span className="font-bold text-typographyPink">
                {keyPoint.highlightedText.toLocaleUpperCase()},
              </span>{' '}
              {keyPoint.normalText}.
            </p>
          ))}
        </div>
      </div>
      <div className="my-6 flex justify-center px-5 sm:my-8 xl:my-32">
        <Events title={eventsTitle} events={events}></Events>
      </div>
      <div className="mb-20 flex justify-center md:mt-20">
        <h2 className="text-center font-anguilla leading-none text-typographyPink sm:text-[56px] md:text-[50px] xl:text-[100px]">
          {closingText}
        </h2>
      </div>
    </>
  );
}
