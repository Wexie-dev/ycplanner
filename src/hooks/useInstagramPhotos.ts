import { InstagramPhoto, fetchInstagramPhotos } from '@/services/instagram';
import { useQuery } from 'react-query';

export function useInstagramPhotos() {
  return useQuery<InstagramPhoto[]>('instagramPhotos', () => fetchInstagramPhotos());
}
