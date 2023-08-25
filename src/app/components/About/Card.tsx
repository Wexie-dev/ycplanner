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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
      <img className="h-74 w-full object-cover" src={image.url} alt={image.fileName} />
      <div className="p-6">
        <pre
          className="leading-relaxe my-2 whitespace-pre-wrap font-sans"
          dangerouslySetInnerHTML={{ __html: body }}
        />
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
            <h5 className="text-left font-anguilla text-[32px] text-typographyPink ">{subtitle}</h5>
          </div>
          {keyPoints.map((keyPoint) => (
            <p className="mb-5 text-left text-base text-typographyGray">
              <span className="font-bold text-typographyPink">
                {keyPoint.highlightedText.toLocaleUpperCase()},
              </span>{' '}
              {keyPoint.normalText}
            </p>
          ))}
        </Transition>
        <div
          onClick={toggleExpanded}
          className="flex w-full cursor-pointer items-center justify-center text-lg"
        >
          <span className="text-normal mt-4  py-2 font-semibold text-typographyPink">
            {isExpanded ? 'Ocultar' : 'Leer Más'}
          </span>
          <img
            className={`ml-3 mt-[18px] ${isExpanded ? 'rotate-180 transform' : ''}`}
            src="/images/sections/about/down-chevron.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
