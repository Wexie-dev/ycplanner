import React from 'react';
import Image from 'next/image';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import footer_logo from '../../../public/images/footer-logo.svg';
import whatsapp from '../../../public/images/footer-whatsapp-icon.svg';
import instagram from '../../../public/images/footer-instagram-icon.svg';
import mail from '../../../public/images/footer-mail-icon.svg';
import youtube from '../../../public/images/footer-youtube-icon.svg';

function Footer() {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const socialMedia = [
    {
      icon: {
        src: whatsapp,
        url: '',
        mobileWidth: 32,
        mobileHeight: 32,
        desktopWidth: 40,
        desktopHeight: 40,
        alt: 'whatsapp',
      },
    },
    {
      icon: {
        src: instagram,
        url: 'https://www.instagram.com/yc.planner/',
        mobileWidth: 32,
        mobileHeight: 32,
        desktopWidth: 40,
        desktopHeight: 40,
        alt: 'instagram',
      },
    },
    {
      icon: {
        src: mail,
        url: isMobile ? 'mailto:roccotc@gmail.com' : '',
        mobileWidth: 48,
        mobileHeight: 32,
        desktopWidth: 56,
        desktopHeight: 40,
        alt: 'mail',
      },
    },
    {
      icon: {
        src: youtube,
        url: 'https://www.youtube.com/@yc.planner',
        mobileWidth: 40,
        mobileHeight: 32,
        desktopWidth: 46,
        desktopHeight: 40,
        alt: 'youtube',
      },
    },
  ];

  return (
    <section id="#footer" className="h-full w-full">
      <div className="mt-4 flex h-[318px] flex-col bg-[#A6837F]">
        <div className="flex justify-center">
          <Image width={84} height={75} className="mt-6" src={footer_logo} alt={'Footer Logo'} />
        </div>
        <div className="mt-5 pl-10 text-sm font-medium text-white">Encontrame en</div>
        <div className="mt-6 flex justify-center gap-10">
          {socialMedia.map((item, index) => (
            <div key={index} className="">
              <a href={item.icon.url} target="_blank">
                <Image
                  width={isMobile ? item.icon.mobileWidth : item.icon.desktopWidth}
                  height={isMobile ? item.icon.mobileHeight : item.icon.desktopHeight}
                  src={item.icon.src}
                  alt={item.icon.alt}
                ></Image>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="h-0.5 w-[90%] bg-white"></div>
        </div>
        <div className="mt-8 flex flex-col items-center text-center text-sm font-medium text-white">
          <div>Copyright © 2023 | Wexie Technology</div>
          <div>Buenos Aires, Argentina</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
