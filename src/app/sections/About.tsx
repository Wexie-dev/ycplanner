import React from 'react';
import Image from 'next/image';
import { AboutProps } from '@/types';
import Events from '../components/About/Events';
import Card from '../components/About/Card';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';

export default function About({
  title,
  description,
  image,
  subtitle,
  keyPoints,
  eventsTitle,
  events,
  closingText,
}: AboutProps) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const MobileDesign = () => (
    <>
      <h1 className="my-8 text-center font-butler text-[32px] font-normal">{title}</h1>
      <Card image={image} body={description} subtitle={subtitle} keyPoints={keyPoints}></Card>
      <Events title={eventsTitle} events={events}></Events>
    </>
  );
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-40" id="about">
      {isMobile ? (
        <MobileDesign />
      ) : (
        <>
          <div className="flex justify-between px-4 md:px-8 lg:px-12 xl:px-[100px] 2xl:px-[146px] 3xl:px-[218px]">
            <div className=" relative ml-5 flex-initial sm:w-[250px] md:h-[482px] md:w-[369px] lg:h-[460px] lg:w-[468px] xl:h-[576px] xl:w-[584px]">
              <Image alt={image.fileName} src={image.url} fill objectFit="cover" />
            </div>
            <div className="flex-1 text-left sm:max-w-sm md:max-w-xs lg:max-w-md xl:max-w-md 2xl:max-w-2xl">
              <h1 className="mb-6 font-butler font-normal md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]">
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
          <div className="my-32 flex justify-center">
            <Events title={eventsTitle} events={events}></Events>
          </div>
          <div className="mb-20 flex justify-center">
            <h2 className="text-center font-anguilla leading-none text-typographyPink md:text-[64px] xl:text-[100px]">
              {closingText}
            </h2>
          </div>
        </>
      )}
    </section>
  );
}
