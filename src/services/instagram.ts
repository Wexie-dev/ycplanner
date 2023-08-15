// utils/instagramAPI.js
import axios from 'axios';

const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
const accountID = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_ID;

export type InstagramPhoto = {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
};

export async function fetchInstagramPhotos(amount: number = 4): Promise<InstagramPhoto[]> {
  const response = await axios.get(
    `https://graph.instagram.com/${accountID}/media?fields=media_url,permalink,video_url,media_type,thumbnail_url&limit=${amount}&access_token=${accessToken}`,
  );
  return response.data.data;
}
