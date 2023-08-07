import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import whatsapp from '../../../public/images/whatsapp-sticky-icon.svg';

function WhatsappButton() {
  const [scrollReachedBottom, setScrollReachedBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setScrollReachedBottom(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      className={`${scrollReachedBottom ? 'hidden' : ''}`}
      href="https://api.whatsapp.com/send?phone=5491134780185"
      target="_blank"
    >
      <Image
        width={40}
        height={40}
        className="fixed bottom-16 right-5 z-40 lg:h-[54px] lg:w-[54px]"
        src={whatsapp}
        alt="Whatsapp Sticky Logo"
      />
    </a>
  );
}

export default WhatsappButton;
