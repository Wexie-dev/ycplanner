import React from 'react';
import Image from 'next/image';
import { AboutEvents } from '../../../types/index';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
function Events({ title, events }: { title: string; events: AboutEvents[] }) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const desktopEvents = events.filter((event) => event.title.toLowerCase().includes('mobile'));
  const mobileEvents = events.filter((event) => !event.title.toLowerCase().includes('mobile'));
  const filterEvents = isMobile ? mobileEvents : desktopEvents;
  return (
    <>
      <h6 className="my-6 text-xl font-medium">{title}</h6>
      <div className="overflow-x-auto">
        <div className="flex min-w-min space-x-2 overflow-x-scroll whitespace-nowrap">
          {filterEvents.map((event) => (
            <div className="flex flex-col items-center">
              <div className="relative h-[328px] w-[216px] overflow-hidden rounded-sm">
                <Image
                  fill
                  alt={event.title}
                  src={event.image.url}
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
    </>
  );
}

export default Events;
