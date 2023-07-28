// Define TypeScript types for sections content data
export interface GetContentResponse {
  banners: BannerProps[];
  abouts: AboutProps[];
  galleries: GalleryProps[];
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
  title?: string;
  description?: string;
  subTitle?: string;
  keyPoints?: KeyPoints[];
  events?: AboutEvents[];
}

export interface KeyPoints {
  highlightedText: string;
  normalText: string;
}

export interface AboutEvents {
  image: ImageContent;
  title: string;
}

export interface GalleryProps {
  title?: string;
  image?: ImageContent[];
}
