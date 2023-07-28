import React from 'react'
import { GalleryProps } from '@/types'

function Gallery(galleryProps: GalleryProps) {

const title = galleryProps.title;
const images = galleryProps.image;

  return (
    <section id="gallery" className="h-screen w-full pt-20">
    <div className="flex justify-center 2xl:mt-[56px] 2xl:mb-[56px] lg:mt-[32px] lg:mb-[32px] mt-[24px] mb-[24px]">
        <div className='font-butler text-[24px] lg:text-[26px] 2xl:text-5xl font-normal text-[#36373A]'>{title}</div>
    </div>
    <div className='w-full h-full'>
        <div className='mx:[60px] lg:mx-[24px] 2xl:mx-[72px] h-[1592px] lg:h-[424px] 2xl:h-[776px]'>
        <div className="w-full h-full flex flex-col lg:flex-row justify-center gap-[8px] lg:gap-[8px] 2xl:gap-[16px]">
        <div className='flex-col mx-auto lg:mx-0'>
        <img
            src={images[0].url}
            alt="Imagen 1"
            className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[320px] lg:w-[237px] lg:h-[176px] bg-slate-500 mb-[8px] lg:mb-[8px] 2xl:mb-[16px] object-cover"
              />
        <img src={images[1].url} alt="Imagen 2" className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[440px] lg:w-[237px] lg:h-[240px] bg-slate-500 object-cover"/>
        </div>
        <div className='flex-col mx-auto lg:mx-0'>
            <img src={images[2].url} alt="Imagen 3" className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[448px] lg:w-[240px] lg:h-[248px] bg-slate-500 mb-[8px] lg:mb-[8px] 2xl:mb-[16px] object-cover"/>
            <img src={images[3].url} alt="Imagen 4" className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[312px] lg:w-[240px] lg:h-[168px] bg-slate-500 object-cover"/>
        </div>
        <div className='flex-col mx-auto lg:mx-0'>
            <img src={images[4].url} alt="Imagen 5" className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[380px] lg:w-[240px] lg:h-[208px] bg-slate-500 mb-[8px] lg:mb-[8px] 2xl:mb-[16px] object-cover"/>
            <img src={images[5].url} alt="Imagen 6" className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[380px] lg:w-[240px] lg:h-[208px] bg-slate-500 object-cover"/>
        </div>
        <div className='flex-col mx-auto lg:mx-0'>
            <img src={images[6].url} alt="Imagen 7" className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[512px] lg:w-[235px] lg:h-[280px] bg-slate-500 mb-[8px] lg:mb-[8px] 2xl:mb-[16px] object-cover"/>
            <img src={images[7].url} alt="Imagen 8" className="w-[328px] h-[192px] 2xl:w-[432px] 2xl:h-[248px] lg:w-[235px] lg:h-[136px] bg-slate-500 object-cover"/>
        </div>
      </div>
        </div>
    </div>
    </section>
  )
}

export default Gallery