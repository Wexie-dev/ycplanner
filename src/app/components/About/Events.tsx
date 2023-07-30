import React from 'react';
import Image from 'next/image';
import { AboutEvents } from '../../../types/index';
function Events({ title, events }: { title: string; events: AboutEvents[] }) {
  return (
    <>
      <h6 className="text-xl">{title}</h6>
      <div className="flex-start gap-x- flex overflow-auto overflow-x-auto whitespace-nowrap">
        {events.map((event) => (
          <div className="relative h-[328px] w-[216px] overflow-hidden rounded-sm">
            <Image
              fill
              alt={event.title}
              src={event.image.url}
              objectFit="cover"
              objectPosition="center"
            />
            <div className="mt-4">
              <span className="text-2xl">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Events;
