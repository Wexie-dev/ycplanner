import { ImageContent, KeyPoints } from '@/types';
import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

export type AboutCardProps = {
  image: ImageContent;
  body: string;
  subtitle: string;
  keyPoints: KeyPoints[];
};
function Card({ image, body, subtitle, keyPoints }: AboutCardProps) {
  console.log("🚀 ~ file: Card.tsx:12 ~ Card ~ keyPoints:", keyPoints)
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
      <img className="h-74 w-full object-cover" src={image.url} alt={image.fileName} />
      <div className="p-6">
      <pre className="font-sans my-2 leading-relaxe whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: body }} />
        <Transition
          show={isExpanded}
          enter="transition-all duration-300"
          enterFrom="h-0 opacity-0"
          enterTo="h-auto opacity-100"
          leave="transition-all duration-300"
          leaveFrom="h-auto opacity-100"
          leaveTo="h-0 opacity-0"
        >
          <div className="my-10">
            <h5 className='text-center text-typographyPink font-bellina text-xl '>
              {subtitle}
            </h5>
          </div>
          {
            keyPoints.map((keyPoint) => (
              <p className='mb-5 text-base text-left text-typographyGray'>
                <span className='text-typographyPink font-bold'>{keyPoint.highlightedText.toLocaleUpperCase()},</span>
                {' '}
                {keyPoint.normalText}
              </p>
            ))
          }
        </Transition>
        <div className='flex w-full justify-center items-center text-lg'>
        <span
          onClick={toggleExpanded}
          className="mt-4 py-2 text-typographyPink cursor-pointer text-normal font-semibold"
        >
          {isExpanded ? 'Ocultar' : 'Leer Más'}
         
        </span>
        <img className={`ml-3 mt-[18px] ${isExpanded ? 'transform rotate-180' : ''}`} src="/images/sections/about/down-chevron.svg" />
        </div>
       
      </div>
    </div>
  );
}

export default Card;
