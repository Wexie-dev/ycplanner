import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

export type AboutCardProps = {
  imageSrc: string;
  title: string;
  body: string;
};
function AboutCard({ imageSrc, title, body }: AboutCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
      <img className="h-64 w-full object-cover" src={imageSrc} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Transition
          show={isExpanded}
          enter="transition-all duration-300"
          enterFrom="h-0 opacity-0"
          enterTo="h-auto opacity-100"
          leave="transition-all duration-300"
          leaveFrom="h-auto opacity-100"
          leaveTo="h-0 opacity-0"
        >
          {(ref) => (
            <p ref={ref} className="mt-2 leading-relaxed">
              {body}
            </p>
          )}
        </Transition>
        <button
          onClick={toggleExpanded}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

export default AboutCard;
