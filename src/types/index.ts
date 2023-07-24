// Define TypeScript types for sections content data
export interface GetContentResponse {
  banners: BannerProps[];
  abouts: AboutProps[];
}

export interface ImageContent {
  url: string;
  fileName: string;
  height: number;
  width: number;
}

export interface BannerProps {
  title?: string;
  subTitle?: string;
}

export interface AboutProps {
  title: string;
}
