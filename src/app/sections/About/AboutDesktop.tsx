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
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const aboutDimensions = {
    tablet: {
      width: 369,
      height: 482,
    },
    desktop: {
      width: 584,
      height: 576,
    },
  };

  const dimensions = isTablet ? aboutDimensions.tablet : aboutDimensions.desktop;
  const { width, height } = dimensions;
  return (
    <>
      <div className="flex justify-evenly px-4 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[146px] 3xl:px-[218px]">
        <div className="flex-grow-1">
          <div className="relative">
            <Image
              src={image?.url}
              alt={image.fileName}
              width={width}
              height={height}
              layout="responsive"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex-grow-2 text-left sm:max-w-sm md:max-w-xs md:px-4 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <h1 className="mb-6 font-butler font-normal sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]">
            {title}
          </h1>
          <pre
            className=" my-2 whitespace-pre-wrap font-sans text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="my-10">
            <h5 className="text-center font-anguilla text-[32px] text-typographyPink sm:text-left sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[64px] ">
              {subtitle}
            </h5>
          </div>
          {keyPoints.map((keyPoint) => (
            <p className="mb-5 text-left text-base text-typographyGray">
              <span className="font-bold text-typographyPink">
                {keyPoint.highlightedText.toLocaleUpperCase()},
              </span>{' '}
              {keyPoint.normalText}
            </p>
          ))}
        </div>
      </div>
      <div className="my-6 flex justify-center sm:my-8 xl:my-32">
        <Events title={eventsTitle} events={events}></Events>
      </div>
      <div className="mb-20 flex justify-center">
        <h2 className="text-center font-anguilla leading-none text-typographyPink sm:text-[56px] md:text-[64px] xl:text-[100px]">
          {closingText}
        </h2>
      </div>
    </>
  );
}
