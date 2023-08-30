import { Testimony } from '@/types';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import mobileArrow from '../../../../public/images/testimony_mobile_arrow.svg';
import quoteIcon from '../../../../public/images/testimony_quote_icon.svg';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import Title from '@/app/components/Title';

function PeopleExperiencesMobile(props: { testimonies: Testimony[] }) {
  const testimonies = props.testimonies;
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const [isExpanded, setIsExpanded] = useState<boolean[]>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const toggleExpand = (index: number) => {
    setIsExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const handleButtonClick = (index: number) => {
    const testimonyCard = cardRefs.current[index];
    if (testimonyCard) {
      testimonyCard.scrollIntoView({
        behavior: 'smooth',
        inline: isTablet ? 'nearest' : 'center',
        block: 'nearest',
      });
      setSelectedButton(index);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Title>Experiencias Compartidas</Title>
      <div className="mr-4 mt-4 flex w-full items-center justify-end gap-1">
        <p className="text-xs font-semibold text-[#C2857D] md:text-base">Desliza</p>
        <div className="relative h-[14px] w-[18px] md:h-[17px] md:w-[22px]">
          <Image fill src={mobileArrow} alt="arrow" />
        </div>
      </div>
      <div className="mt-[10px] flex w-full overflow-x-auto">
        {testimonies.map((testimony, index) => (
          <div id={`testimony-${index}`} key={index}>
            {/* Imagen */}
            <div className="relative ml-4 flex h-[312px] w-[328px] overflow-x-scroll whitespace-nowrap shadow-[0px_4px_4px_0px_#00000040]">
              <Image
                fill
                src={`${testimony?.image.url}`}
                alt={`${testimony?.names}`}
                quality={100}
              />
            </div>
            {/* Card */}
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`ml-4 min-h-[420px] max-h-[${
                isExpanded[index] ? 'none' : '420px'
              }] w-[328px] transition-all duration-300`}
            >
              <div
                className={`flex flex-col items-center shadow-[0px_4px_4px_0px_#00000040] ${
                  isExpanded[index] ? 'h-auto' : 'h-[420px]'
                } transition-all duration-300`}
              >
                <div className="relative mt-[30px] h-[68px] w-[74px]">
                  <Image fill src={quoteIcon} alt="quote" />
                </div>
                <div className="mt-2 text-base font-semibold">{testimony?.title}</div>
                <div className="mt-4 px-4 text-base font-normal">
                  {testimony.description.length > 240 && !isExpanded[index]
                    ? `${testimony.description.slice(0, 240)}...`
                    : testimony.description}
                </div>
                <div
                  className={`mt-4 text-base font-semibold ${
                    testimony.description.length > 239 && !isExpanded[index] ? 'hidden' : 'block'
                  }`}
                >
                  {testimony?.names}
                </div>
                <div
                  className={`mt-2 px-4 text-base font-normal ${
                    testimony.description.length > 239 && !isExpanded[index] ? 'hidden' : 'block'
                  }`}
                >
                  {testimony?.date}
                </div>
                {testimony.description.length > 239 && (
                  <div
                    onClick={() => {
                      toggleExpand(index);
                      if (cardRefs.current[index]) {
                        cardRefs.current[index]!.style.height = isExpanded[index]
                          ? '420px'
                          : 'auto';
                      }
                    }}
                    className="my-4 flex w-full cursor-pointer items-center justify-center gap-2 text-lg"
                  >
                    <span className="text-normal py-2 font-semibold text-typographyPink">
                      {isExpanded[index] ? 'Ocultar' : 'Leer más'}
                    </span>
                    <img
                      alt="arrow down button"
                      className={` ${isExpanded[index] ? 'rotate-180 transform' : ''}`}
                      src="/images/sections/about/down-chevron.svg"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="h-2"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-7">
        {testimonies.map((_, index) => (
          <button
            key={index}
            className={`mb-2 mt-6 h-4 w-4 rounded-full ${
              selectedButton === index ? 'bg-[#C2857D]' : 'bg-[#D9D9D9]'
            } shadow-[0px_4px_4px_0px_#00000040]`}
            aria-label={`button testimonies ${index + 1}`}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default PeopleExperiencesMobile;
