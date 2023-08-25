import React from 'react';
import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import whatsapp from '../../../public/images/whatsapp-sticky-icon.svg';

function WhatsappButton() {
  const [showButton, setShowButton] = useState(false);
  const [showAtBottom, setShowAtBottom] = useState(true);
  useLayoutEffect(() => {
    const handleScroll = () => {
      const isOnBanner = window.scrollY < 700;
      const footerHeight = document.getElementById('footer')?.offsetHeight ?? 300;
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - footerHeight;

      if (scrolledToBottom) setShowButton(false);
      else setShowButton(true);

      if (isOnBanner) setShowAtBottom(true);
      else setShowAtBottom(false);
    };

    setTimeout(() => {
      setShowButton(true);
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      className={`z-50 transition-all duration-500 ${
        showButton ? 'opacity-100 ease-out' : '-z-50 opacity-0 ease-in'
      }
      ${showAtBottom ? 'translate-y-20' : 'translate-y-0'}`}
      href="https://api.whatsapp.com/send?phone=5491166539611"
      target="_blank"
    >
      <Image
        width={40}
        height={40}
        className="lg:h-[54px] lg:w-[54px]"
        src={whatsapp}
        alt="Whatsapp Sticky Logo"
      />
    </a>
  );
}

export default WhatsappButton;
