import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import whatsapp from '../../../public/images/whatsapp-sticky-icon.svg';

function WhatsappButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.getElementById('footer')?.offsetHeight ?? 320;
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - footerHeight;

      if (scrolledToBottom) setShowButton(false);
      else setShowButton(true);
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
      className={`transition-opacity duration-500 ${
        showButton ? 'opacity-100 ease-out' : 'opacity-0 ease-in'
      }`}
      href="https://api.whatsapp.com/send?phone=5491134780185"
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
