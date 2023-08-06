import React from 'react';
import Image from 'next/image';
import { AboutEvents } from '../../../types/index';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
function Events({ title, events }: { title: string; events: AboutEvents[] }) {
  const isMobile = useMediaQuery(mediaQueries.mobile);

  return (
    <div className="flex flex-col">
      <h6 className="my-6 text-xl font-medium">{title}</h6>
      <div className="overflow-x-auto sm:overflow-hidden">
        <div className="flex min-w-min space-x-2 overflow-x-scroll whitespace-nowrap xl:overflow-hidden">
          {events.map((event) => (
            <div className="flex flex-col items-center">
              <div className="xl-w-[400px] xl:-[360px] relative h-[328px] w-[216px] overflow-hidden rounded-sm md:h-[392px] md:w-[432px] lg:h-[274px] lg:w-[300px] 2xl:h-[392px] 2xl:w-[432px]">
                <Image
                  fill
                  alt={event.title}
                  src={isMobile ? event.mobileImage.url : event.image.url}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="mt-4">
                <span className="text-center text-2xl">{event.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
