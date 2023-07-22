// Define TypeScript types for sections content data
export interface GetContentResponse {
  banners: BannerProps[];
  abouts: AboutProps[];
}

export interface BannerProps {
  backgroundImg: {
    url: string;
    fileName: string;
    height: number;
    width: number;
  };
  title?: string;
  subTitle?: string;
}

export interface AboutProps {
  title: string;
}
