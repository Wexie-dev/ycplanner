import React from 'react';
import Image from 'next/image';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import howIWork_icon_lens from '../../../public/images/howIWork-icon-lupa.svg';
import howIWork_icon_faq from '../../../public/images/howIWork-icon-faq.svg';
import howIWork_icon_plan from '../../../public/images/howIWork-icon-plan.svg';
import howIWork_icon_timing from '../../../public/images/howIWork-icon-timing.svg';
import howIWork_icon_settings from '../../../public/images/howIWork-icon-settings.svg';
import howIWork_icon_event from '../../../public/images/howIWork-icon-event.svg';
import howIWork_icon_calendar from '../../../public/images/howIWork-icon-calendar.svg';
import howIWork_icon_love from '../../../public/images/howIWork-icon-love.svg';
import { HowIWorkProps } from '@/types';

function HowIWork(howIWorkProps: HowIWorkProps) {
  const isMobile = useMediaQuery(mediaQueries.mobile);

  const title1 = howIWorkProps.title1;
  const image = howIWorkProps.image?.url;
  const subtitle1 = howIWorkProps.subtitle1;
  const paragraph1 = howIWorkProps.paragraph1;
  const subtitle2 = howIWorkProps.subtitle2;
  const paragraph2 = howIWorkProps.paragraph2;
  const subtitle3 = howIWorkProps.subtitle3;
  const paragraph3 = howIWorkProps.paragraph3;
  const title2 = howIWorkProps.title2;
  const service_list = howIWorkProps.paragraph_service_list;

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

  return (
    <section className="h-screen w-full bg-[#E9EAED] pt-16 lg:pt-[72px]" id="howIWork">
      {/* Como trabajo */}
      <div className="bg-[#E9EAED] text-[#36373A] 2xl:flex 2xl:h-[975px]">
        <div className="flex justify-center pt-2 font-butler text-2xl font-normal lg:text-5xl 2xl:hidden">
          {title1}
        </div>
        <div className="static h-[373px] lg:h-[872px]">
          <Image
            width={isMobile ? 312 : 729}
            height={isMobile ? 376 : 872}
            className="relative z-20 ml-4 mt-8 lg:ml-[128px] lg:mt-[86px] 2xl:ml-[221px]"
            src={`${image}`}
            alt={''}
          />
          <div className="relative -top-[392px] left-10 z-10 h-[352px] w-[304px] bg-[#AD837E] opacity-50 drop-shadow-[0_11px_48px_0_rgb(#00000033)] lg:-top-[910px] lg:left-[184px] lg:h-[826px] lg:w-[712px] 2xl:left-[272px]"></div>
        </div>
        <div className="pl-10 font-normal lg:pl-32 lg:pr-80 2xl:pl-[20%] 2xl:pr-[230px]">
          <div className="hidden pt-24 font-butler text-2xl font-normal lg:text-5xl 2xl:flex">
            {title1}
          </div>
          <div className="flex pt-10 font-butler text-2xl lg:text-4xl 2xl:pt-16">{subtitle1}</div>
          <div className="flex pr-10 pt-2 text-base lg:pt-4">{paragraph1}</div>
          <div className="flex pt-6 font-butler text-2xl lg:pt-9 lg:text-4xl 2xl:pt-10">
            {subtitle2}
          </div>
          <div className="">
            {paragraph2?.split('.').map((paragraph, index) => (
              <p className="flex pb-2 pr-10 pt-2 text-base lg:pt-4" key={index}>
                {paragraph}.
              </p>
            ))}
          </div>
          <div className="flex pt-8 font-bellina text-5xl text-[#996058] lg:pt-12 lg:text-[80px]">
            {subtitle3}
          </div>
          <div className="flex pb-12 pr-10 pt-8 text-base lg:pt-12">{paragraph3}</div>
        </div>
      </div>

      {/* Detalle del servicio */}
      <div className="bg-[#F5F5F5]">
        <div className="flex justify-center pt-12 font-bellina text-[40px] text-[#996058] lg:justify-start lg:pl-36 lg:pt-[100px] lg:text-[75px] 2xl:text-8xl">
          {title2}
        </div>
        <div className="flex flex-col px-[92px] pt-14 lg:flex-row lg:flex-wrap lg:px-0 lg:pb-10 lg:pt-6 2xl:p-0">
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
              <div className="pt-4">{service_list ? service_list[index] : null}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
