// components/InstagramPhotos.tsx
import { InstagramPhoto } from '@/services/instagram';
import { useInstagramPhotos } from '@/hooks/useInstagramPhotos';
import Image from 'next/image';
import WarningImg from '../../../public/images/warning.png';
import React, { useRef } from 'react';
import IgWidget from '../components/IgWidget';
import useElementVisibility from '@/hooks/useElementVisibility';
import { Transition } from '@headlessui/react';

const InstagramPhotos = () => {
  const igRef = useRef(null);
  const isVisible = useElementVisibility(igRef);

  const { data: photos, isLoading, error } = useInstagramPhotos();

  const LoadingState = () => {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-typographyPink"></div>
      </div>
    );
  };

  const ErrorState = () => {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mb-4 text-lg font-bold text-typographyPink">
          No se pudo cargar el contenido
        </div>
        <div className="h-8 w-8">
          <Image src={WarningImg} alt="warning" />
        </div>
      </div>
    );
  };

  const Content = () => (
    <>
      <div className="mb-[24px] mt-[24px] flex justify-center sm:mb-[8px] sm:mt-[32px] xl:mb-[16px] 2xl:mt-[56px]">
        <h4 className="font-butler text-[24px] font-normal text-[#36373A] sm:text-[26px] xl:text-4xl 2xl:text-5xl">
          Seguime en Instagram
        </h4>
      </div>
      <IgWidget />
      <div id="ig-gallery">
        <Transition
          show={isVisible}
          enter="transition-opacity duration-500 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="grid grid-cols-2 place-items-center gap-8 place-self-center md:grid-cols-3 xl:grid-cols-4">
            {photos!.map((photo: InstagramPhoto) => (
              <a
                key={photo.id}
                href={photo.permalink}
                className="23xl:w-[424px] relative h-[155px] w-[155px] md:h-[218px] md:w-[218px] lg:h-[272px] lg:w-[272px] xl:h-[296px] xl:w-[296px] 2xl:h-[360px] 2xl:w-[360px] 3xl:h-[424px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {photo.media_type === 'VIDEO' ? (
                  <video controls className="h-full w-full" controlsList="nodownload">
                    <source src={photo.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={photo.media_url}
                    alt={`Instagram Post ${photo.id}`}
                    className="rounded object-cover"
                    fill
                    priority
                    quality={100}
                  />
                )}
              </a>
            ))}
          </div>
        </Transition>
      </div>
    </>
  );

  return (
    <section
      ref={igRef}
      className="xl-mb-[285px] mb-[102px] mt-8 h-auto px-5 sm:mt-16 lg:px-8 lg:max-xl:mt-44 xl:mt-[223px] xl:px-16 3xl:px-[75px]"
      id="instagram"
    >
      {isLoading ? <LoadingState /> : error ? <ErrorState /> : <Content />}
    </section>
  );
};

export default React.memo(InstagramPhotos);
