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
        urlPath: 'https://api.whatsapp.com/send?phone=',
        urlSrc: '+54 9 11 6653-9611',
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
        urlPath: 'https://www.instagram.com/',
        urlSrc: '@yc.planner',
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
        urlPath: 'mailto:',
        urlSrc: 'info@ycplanner.com.ar',
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
        urlPath: 'https://www.youtube.com/',
        urlSrc: '@yc.planner',
        mobileWidth: 40,
        mobileHeight: 32,
        desktopWidth: 46,
        desktopHeight: 40,
        alt: 'youtube',
      },
    },
  ];

  return (
    <section id="#footer" className="mt-4 h-[318px] w-full bg-[#A6837F]">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-[80px] 2xl:gap-[120px]">
        <div className="flex justify-center">
          <Image
            width={84}
            height={75}
            className="mt-6 lg:h-[152px] lg:w-[171px]"
            src={footer_logo}
            alt={'Footer Logo'}
          />
        </div>
        <div className="mt-5 pl-10 text-sm font-medium text-white lg:hidden">Encontrame en</div>
        <div className="mt-6 flex justify-center gap-10 lg:items-center xl:gap-[100px]">
          {socialMedia.map((item, index) => (
            <div key={index} className="">
              {index === 0 || index === 1 ? (
                <a
                  href={(item.icon.urlPath + item.icon.urlSrc).replace(/[ @+-]/g, '')}
                  target="_blank"
                >
                  <div className="flex items-center gap-4 lg:flex-col 2xl:flex-row">
                    <Image
                      width={isMobile ? item.icon.mobileWidth : item.icon.desktopWidth}
                      height={isMobile ? item.icon.mobileHeight : item.icon.desktopHeight}
                      src={item.icon.src}
                      alt={item.icon.alt}
                    ></Image>
                    <div className="hidden text-lg font-medium text-white lg:block">
                      {item.icon.urlSrc}
                    </div>
                  </div>
                </a>
              ) : (
                <a href={item.icon.urlPath + item.icon.urlSrc} target="_blank">
                  <div className="flex items-center gap-4 lg:flex-col 2xl:flex-row">
                    <Image
                      width={isMobile ? item.icon.mobileWidth : item.icon.desktopWidth}
                      height={isMobile ? item.icon.mobileHeight : item.icon.desktopHeight}
                      src={item.icon.src}
                      alt={item.icon.alt}
                    ></Image>
                    <div className="hidden text-lg font-medium text-white lg:block">
                      {item.icon.urlSrc}
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-8 flex justify-center">
          <div className="h-0.5 w-[90%] bg-white"></div>
        </div>
        <div className="mt-8 flex flex-col items-center text-center text-sm font-medium text-white xl:flex-row xl:justify-center xl:text-base">
          <div>Copyright © 2023 | Wexie Technology</div>
          <div className="flex">
            <span className="mx-1 hidden xl:block">|</span>Buenos Aires, Argentina
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
