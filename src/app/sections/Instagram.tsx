// components/InstagramPhotos.tsx
import { InstagramPhoto } from '@/services/instagram';
import { useInstagramPhotos } from '@/hooks/useInstagramPhotos';
import Image from 'next/image';
import WarningImg from '../../../public/images/warning.png';

const InstagramPhotos = () => {
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
      <div className="mb-[24px] mt-[24px] flex justify-center sm:mb-[32px] sm:mt-[32px] 2xl:mb-[123px] 2xl:mt-[56px]">
        <h4 className="font-butler text-[24px] font-normal text-[#36373A] sm:text-[26px] 2xl:text-5xl">
          Seguime en Instagram
        </h4>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-8 place-self-center md:grid-cols-3 xl:grid-cols-4">
        {photos!.map((photo: InstagramPhoto) => (
          <a
            key={photo.id}
            href={photo.permalink}
            className="relative h-[155px] w-[155px] md:h-[218px] md:w-[218px] lg:h-[272px] lg:w-[272px] xl:h-[340px] xl:w-[340px] 2xl:h-[424px] 2xl:w-[424px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {photo.media_type === 'VIDEO' ? (
              <video controls className="h-auto w-full">
                <source src={photo.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={photo.media_url}
                alt={`Instagram Post ${photo.id}`}
                className="h-auto w-full rounded object-cover"
                fill
                priority
                quality={100}
              />
            )}
          </a>
        ))}
      </div>
    </>
  );

  return (
    <section
      className="xl-mb-[285px] mb-[102px] mt-8 h-auto px-4 lg:px-8 xl:mt-[223px] xl:px-16 3xl:px-[75px]"
      id="instagram"
    >
      {isLoading ? <LoadingState /> : error ? <ErrorState /> : <Content />}
    </section>
  );
};

export default InstagramPhotos;
