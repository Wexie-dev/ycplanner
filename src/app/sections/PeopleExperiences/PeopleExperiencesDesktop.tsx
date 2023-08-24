import { Testimony } from '@/types';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import quoteIcon from '../../../../public/images/testimony_quote_icon.svg';
import leftArrow from '../../../../public/images/testimony_leftArrow_icon.svg';
import rightArrow from '../../../../public/images/testimony_rightArrow_icon.svg';
import Title from '@/app/components/Title';

function PeopleExperiencesDesktop(props: { testimonies: Testimony[] }) {
  const testimonies = props.testimonies;
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    const testimonyCard = cardRefs.current[index];
    if (testimonyCard) {
      testimonyCard.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      setSelectedButton(index);
    }
  };

  const handleArrowClick = (direction: 'previous' | 'next') => {
    let newIndex;
    if (direction === 'previous') {
      newIndex = selectedButton === 0 ? testimonies.length - 1 : selectedButton - 1;
    } else {
      newIndex = selectedButton === testimonies.length - 1 ? 0 : selectedButton + 1;
    }
    handleButtonClick(newIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center xl:mt-7 2xl:mt-0">
      <div className="mb-5">
        <Title>Experiencias Compartidas</Title>
      </div>
      <div className="mt-[30px] flex flex-row items-center xl:mt-[56px] 2xl:mt-32 3xl:ml-[72px] 3xl:mt-[56px]">
        <div
          className="absolute left-[24px] h-[26px] w-[16px] cursor-pointer 3xl:left-[72px] 3xl:h-[46px] 3xl:w-[28px]"
          onClick={() => handleArrowClick('previous')}
        >
          <Image fill src={leftArrow} alt="leftArrow" />
        </div>
        {testimonies.map((testimony, index) => (
          <div
            className="flex h-[360px] w-[892px] flex-row items-center 3xl:h-[648px] 3xl:w-[1628px]"
            id={`testimony-${index}`}
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ display: selectedButton === index ? 'flex' : 'none' }}
          >
            {/* Imagen */}
            <div className="absolute left-[6%] flex h-[360px] w-[400px] whitespace-nowrap xl:h-[432px] xl:w-[480px] 2xl:h-[518px] 2xl:w-[576px] 3xl:h-[648px] 3xl:w-[728px] ">
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
              className="absolute left-[39.5%] h-[320px] w-[552px] bg-white shadow-[0px_4px_4px_0px_#00000040] xl:h-[384px] xl:w-[662px] 2xl:h-[461px] 2xl:w-[794px] 3xl:left-[41%] 3xl:h-[584px] 3xl:w-[1008px]"
            >
              <div className="m-4 flex h-[288px] flex-col items-center justify-center border border-solid border-[#C2857D] xl:m-5 xl:h-[346px] 2xl:m-6 2xl:h-[415px] 3xl:m-8 3xl:h-[520px]">
                <div className="relative h-[24px] w-[32px] xl:h-[29px] xl:w-[39px] 2xl:h-[35px] 2xl:w-[47px] 3xl:h-[44px] 3xl:w-[59px]">
                  <Image fill src={quoteIcon} alt="quote" />
                </div>
                <div className="mt-2 text-sm font-semibold xl:text-lg 3xl:mt-4 3xl:text-2xl">
                  {testimony?.title}
                </div>
                <div className="mt-3 px-[55px] text-center text-[9px] font-normal xl:text-xs 2xl:text-sm 3xl:mt-6 3xl:px-[110px] 3xl:text-base">
                  {testimony?.description}
                </div>
                <div className="mt-2 text-sm font-semibold 2xl:text-base 3xl:mt-4">
                  {testimony?.names}
                </div>
                <div className="mt-1 px-4 text-xs font-normal 2xl:text-base 3xl:mt-2">
                  {testimony?.date}
                </div>
              </div>
            </div>
            <div className="h-2"></div>
            <div
              className="absolute right-[24px] h-[26px] w-[16px] cursor-pointer 3xl:right-[72px] 3xl:h-[46px] 3xl:w-[28px]"
              onClick={() => handleArrowClick('next')}
            >
              <Image fill src={rightArrow} alt="rightArrow" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-7">
        {testimonies.map((_, index) => (
          <button
            key={index}
            className={`mb-2 mt-10 h-4 w-4 rounded-full xl:mt-16 2xl:mt-32 3xl:mt-16 ${
              selectedButton === index ? 'bg-[#C2857D]' : 'bg-[#D9D9D9]'
            } shadow-[0px_4px_4px_0px_#00000040]`}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default PeopleExperiencesDesktop;
