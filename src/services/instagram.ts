// utils/instagramAPI.js
import axios from 'axios';

const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
const accountID = process.env.INSTAGRAM_ACCOUNT_ID;

export type InstagramPhoto = {
  id: string;
  media_url: string;
  permalink: string;
};

export async function fetchInstagramPhotos(): Promise<InstagramPhoto[]> {
  const response = await axios.get(
    `https://graph.instagram.com/${accountID}/media?fields=media_url,permalink&limit=4&access_token=${accessToken}`,
  );
  return response.data.data;
}
