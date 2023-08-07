import React from 'react';
import { GalleryProps } from '@/types';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';

function Gallery(galleryProps: GalleryProps) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const title = galleryProps.title;
  const images = galleryProps.images;
  const mobileImages = galleryProps.mobileImages;

  return (
    <section id="gallery" className="h-full w-full pt-16 lg:pt-20">
      <div className="mb-[24px] flex justify-center sm:mb-[32px] sm:mt-[32px] 2xl:mb-[56px] 2xl:mt-[56px]">
        <div className="font-butler text-[24px] font-normal text-[#36373A] sm:text-[26px] 2xl:text-5xl">
          {title}
        </div>
      </div>
      <div className="h-full w-full">
        <div className="mx-[10px] h-[1592px] sm:mx-[24px] sm:h-[424px] 2xl:mx-[72px] 2xl:h-[776px]">
          <div className="flex h-full w-full flex-col justify-center gap-[8px] sm:flex-row sm:gap-[8px] 2xl:gap-[16px]">
            <div className="mx-auto flex-col sm:mx-0">
              <img
                src={isMobile ? mobileImages[0].url : images[0].url}
                alt="Imagen 1"
                className="mb-[8px] h-[192px] w-[328px] object-cover sm:mb-[8px] sm:h-[176px] sm:w-[237px] xl:mb-[8px] xl:h-[211px] xl:w-[285px] 2xl:mb-[16px] 2xl:h-[320px] 2xl:w-[432px]"
              />
              <img
                src={isMobile ? mobileImages[1].url : images[1].url}
                alt="Imagen 2"
                className="h-[192px] w-[328px] object-cover sm:h-[240px] sm:w-[237px] xl:mb-[8px] xl:h-[288px] xl:w-[285px] 2xl:h-[440px] 2xl:w-[432px]"
              />
            </div>
            <div className="mx-auto flex-col sm:mx-0">
              <img
                src={isMobile ? mobileImages[2].url : images[2].url}
                alt="Imagen 3"
                className="mb-[8px] h-[192px] w-[328px] object-cover sm:mb-[8px] sm:h-[248px] sm:w-[240px] xl:mb-[8px] xl:h-[298px] xl:w-[288px] 2xl:mb-[16px] 2xl:h-[448px] 2xl:w-[432px]"
              />
              <img
                src={isMobile ? mobileImages[3].url : images[3].url}
                alt="Imagen 4"
                className="h-[192px] w-[328px] object-cover sm:h-[168px] sm:w-[240px] xl:mb-[8px] xl:h-[202px] xl:w-[288px] 2xl:h-[312px] 2xl:w-[432px]"
              />
            </div>
            <div className="mx-auto flex-col sm:mx-0">
              <img
                src={isMobile ? mobileImages[4].url : images[4].url}
                alt="Imagen 5"
                className="mb-[8px] h-[192px] w-[328px] object-cover sm:mb-[8px] sm:h-[208px] sm:w-[240px] xl:mb-[8px] xl:h-[250px] xl:w-[288px] 2xl:mb-[16px] 2xl:h-[380px] 2xl:w-[432px]"
              />
              <img
                src={isMobile ? mobileImages[5].url : images[5].url}
                alt="Imagen 6"
                className="h-[192px] w-[328px] object-cover sm:h-[208px] sm:w-[240px] xl:mb-[8px] xl:h-[250px] xl:w-[288px] 2xl:h-[380px] 2xl:w-[432px]"
              />
            </div>
            <div className="mx-auto flex-col sm:mx-0">
              <img
                src={isMobile ? mobileImages[6].url : images[6].url}
                alt="Imagen 7"
                className="mb-[8px] h-[192px] w-[328px] object-cover sm:mb-[8px] sm:h-[280px] sm:w-[235px] xl:mb-[8px] xl:h-[336px] xl:w-[282px] 2xl:mb-[16px] 2xl:h-[512px] 2xl:w-[432px]"
              />
              <img
                src={isMobile ? mobileImages[7].url : images[7].url}
                alt="Imagen 8"
                className="h-[192px] w-[328px] object-cover sm:h-[136px] sm:w-[235px] xl:mb-[8px] xl:h-[163px] xl:w-[282px] 2xl:h-[248px] 2xl:w-[432px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
