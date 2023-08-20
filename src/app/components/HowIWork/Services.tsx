import React from 'react';
import Image from 'next/image';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import howIWork_icon_lens from '../../../../public/images/howIWork-icon-lupa.svg';
import howIWork_icon_faq from '../../../../public/images/howIWork-icon-faq.svg';
import howIWork_icon_plan from '../../../../public/images/howIWork-icon-plan.svg';
import howIWork_icon_timing from '../../../../public/images/howIWork-icon-timing.svg';
import howIWork_icon_settings from '../../../../public/images/howIWork-icon-settings.svg';
import howIWork_icon_event from '../../../../public/images/howIWork-icon-event.svg';
import howIWork_icon_calendar from '../../../../public/images/howIWork-icon-calendar.svg';
import howIWork_icon_love from '../../../../public/images/howIWork-icon-love.svg';

export type HowIWorkServicesProps = {
  title2: string;
  paragraph_service_list: string[];
};

function Services({ title2, paragraph_service_list }: HowIWorkServicesProps) {
  const serviceDetails = [
    {
      icon: { src: howIWork_icon_lens, alt: 'icon_lens' },
    },
    {
      icon: { src: howIWork_icon_faq, alt: 'icon_faq' },
    },
    {
      icon: { src: howIWork_icon_plan, alt: 'icon_plan' },
    },
    {
      icon: { src: howIWork_icon_timing, alt: 'icon_timing' },
    },
    {
      icon: { src: howIWork_icon_settings, alt: 'icon_settings' },
    },
    {
      icon: { src: howIWork_icon_event, alt: 'icon_event' },
    },
    {
      icon: { src: howIWork_icon_calendar, alt: 'icon_calendar' },
    },
    {
      icon: { src: howIWork_icon_love, alt: 'icon_love' },
    },
  ];

  const isMobile = useMediaQuery(mediaQueries.mobile);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex justify-center pt-14 font-anguilla text-[40px] text-[#996058] lg:justify-start lg:pl-36 lg:text-[75px] 2xl:pt-[55px] 2xl:text-8xl">
        {title2}
      </div>
      <div className="flex flex-col px-[92px] pt-10 lg:flex-row lg:flex-wrap lg:px-0 lg:pt-6 2xl:p-0">
        {serviceDetails.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center pb-8 text-center text-sm font-normal text-[#36373A] lg:ml-[140px] lg:mt-14 lg:w-[300px] lg:pb-0 lg:text-base 2xl:ml-[136px] 2xl:mt-20"
          >
            <Image
              width={isMobile ? 32 : 56}
              height={isMobile ? 32 : 56}
              src={service.icon.src}
              alt={service.icon.alt}
            />
            <div className="pt-4">
              {paragraph_service_list ? paragraph_service_list[index] : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
