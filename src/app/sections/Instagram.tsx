// components/InstagramPhotos.tsx
import { InstagramPhoto } from '@/services/instagram';
import { useInstagramPhotos } from '@/hooks/useInstagramPhotos';
const WarningImg = '../../../public/images/warning.png';

const InstagramPhotos = () => {
  const { data: photos, isLoading, isError, error } = useInstagramPhotos();
  console.log('🚀 ~ file: Instagram.tsx:7 ~ InstagramPhotos ~ error:', error);
  console.log('🚀 ~ file: Instagram.tsx:7 ~ InstagramPhotos ~ data:', photos);
  console.log('🚀 ~ file: Instagram.tsx:7 ~ InstagramPhotos ~ isError:', isError);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-typographyPink"></div>
      </div>
    );
  }

  if (isError || !photos) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mb-4 text-lg font-bold text-red-600">No se pudo cargar el contenido</div>
        <div className="h-40">
          <img src={WarningImg}></img>
        </div>
      </div>
    );
  }

  return (
    <section id="instagram">
      <div className="mb-[24px] mt-[24px] flex justify-center sm:mb-[32px] sm:mt-[32px] 2xl:mb-[56px] 2xl:mt-[56px]">
        <h4 className="font-butler text-[24px] font-normal text-[#36373A] sm:text-[26px] 2xl:text-5xl">
          Seguime en Instagram
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo: InstagramPhoto) => (
          <a key={photo.id} href={photo.permalink} target="_blank" rel="noopener noreferrer">
            <img
              src={photo.media_url}
              alt={`Instagram Post ${photo.id}`}
              className="h-auto w-full rounded"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramPhotos;
