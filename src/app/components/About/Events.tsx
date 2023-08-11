import React from 'react';
import Image from 'next/image';
import { AboutEvents } from '../../../types/index';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
function Events({ title, events }: { title: string; events: AboutEvents[] }) {
  const isMobile = useMediaQuery(mediaQueries.mobile);

  return (
    <div className="flex flex-col">
      <h6 className="my-6 text-xl font-medium">{title}</h6>
      <div className="overflow-x-auto xl:overflow-hidden">
        <div className="flex min-w-min space-x-2 overflow-x-scroll whitespace-nowrap lg:space-x-4 lg:overflow-hidden">
          {events.map((event) => (
            <div className="flex flex-col items-center">
              <div className="relative h-[328px] w-[216px] overflow-hidden rounded-sm sm:h-[256px] sm:w-[200px] md:h-[392px] md:w-[432px] lg:h-[254px] lg:w-[240px] xl:h-[324px] xl:w-[300px] 2xl:h-[384px] 2xl:w-[360px] 3xl:h-[392px] 3xl:w-[432px]">
                <Image
                  fill
                  alt={event.title}
                  src={isMobile ? event.mobileImage.url : event.image.url}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="mt-4">
                <span className="text-center text-lg xl:text-xl xl:font-medium 2xl:text-2xl">
                  {event.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
