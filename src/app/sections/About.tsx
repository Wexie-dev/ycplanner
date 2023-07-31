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
    </>
  );
  return (
    <section className="pt-8 lg:pt-24 xl:pt-40" id="about">
      {isMobile ? (
        <MobileDesign />
      ) : (
        <>
          <div className="flex justify-between px-4 lg:px-12 xl:px-[221px]">
            <div className="relative h-[576px] w-[584px] flex-initial">
              <Image alt={image.fileName} src={image.url} fill />
            </div>
            <div className="max-w-2xl flex-1 text-left">
              <h1 className="mb-6 font-butler text-[48px] font-normal">{title}</h1>
              <pre
                className="my-2 whitespace-pre-wrap font-sans leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div className="my-10">
                <h5 className="text-center font-bellina text-xl text-typographyPink lg:text-[50px] xl:text-[64px] ">
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
            <h2 className="text-center font-bellina text-[100px] text-typographyPink">
              {closingText}
            </h2>
          </div>
        </>
      )}
    </section>
  );
}
