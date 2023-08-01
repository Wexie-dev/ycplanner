import React from 'react';
import { GalleryProps } from '@/types';

function Gallery(galleryProps: GalleryProps) {
  const title = galleryProps.title;
  const images = galleryProps.image;

  return (
    <section id="gallery" className="h-screen w-full pt-20">
      <div className="mb-[24px] mt-[24px] flex justify-center lg:mb-[32px] lg:mt-[32px] 2xl:mb-[56px] 2xl:mt-[56px]">
        <div className="font-butler text-[24px] font-normal text-[#36373A] lg:text-[26px] 2xl:text-5xl">
          {title}
        </div>
      </div>
      <div className="h-full w-full">
        <div className="mx:[60px] h-[1592px] lg:mx-[24px] lg:h-[424px] 2xl:mx-[72px] 2xl:h-[776px]">
          <div className="flex h-full w-full flex-col justify-center gap-[8px] lg:flex-row lg:gap-[8px] 2xl:gap-[16px]">
            <div className="mx-auto flex-col lg:mx-0">
              <img
                src={images[0].url}
                alt="Imagen 1"
                className="mb-[8px] h-[192px] w-[328px] bg-slate-500 object-cover lg:mb-[8px] lg:h-[176px] lg:w-[237px] 2xl:mb-[16px] 2xl:h-[320px] 2xl:w-[432px]"
              />
              <img
                src={images[1].url}
                alt="Imagen 2"
                className="h-[192px] w-[328px] bg-slate-500 object-cover lg:h-[240px] lg:w-[237px] 2xl:h-[440px] 2xl:w-[432px]"
              />
            </div>
            <div className="mx-auto flex-col lg:mx-0">
              <img
                src={images[2].url}
                alt="Imagen 3"
                className="mb-[8px] h-[192px] w-[328px] bg-slate-500 object-cover lg:mb-[8px] lg:h-[248px] lg:w-[240px] 2xl:mb-[16px] 2xl:h-[448px] 2xl:w-[432px]"
              />
              <img
                src={images[3].url}
                alt="Imagen 4"
                className="h-[192px] w-[328px] bg-slate-500 object-cover lg:h-[168px] lg:w-[240px] 2xl:h-[312px] 2xl:w-[432px]"
              />
            </div>
            <div className="mx-auto flex-col lg:mx-0">
              <img
                src={images[4].url}
                alt="Imagen 5"
                className="mb-[8px] h-[192px] w-[328px] bg-slate-500 object-cover lg:mb-[8px] lg:h-[208px] lg:w-[240px] 2xl:mb-[16px] 2xl:h-[380px] 2xl:w-[432px]"
              />
              <img
                src={images[5].url}
                alt="Imagen 6"
                className="h-[192px] w-[328px] bg-slate-500 object-cover lg:h-[208px] lg:w-[240px] 2xl:h-[380px] 2xl:w-[432px]"
              />
            </div>
            <div className="mx-auto flex-col lg:mx-0">
              <img
                src={images[6].url}
                alt="Imagen 7"
                className="mb-[8px] h-[192px] w-[328px] bg-slate-500 object-cover lg:mb-[8px] lg:h-[280px] lg:w-[235px] 2xl:mb-[16px] 2xl:h-[512px] 2xl:w-[432px]"
              />
              <img
                src={images[7].url}
                alt="Imagen 8"
                className="h-[192px] w-[328px] bg-slate-500 object-cover lg:h-[136px] lg:w-[235px] 2xl:h-[248px] 2xl:w-[432px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
