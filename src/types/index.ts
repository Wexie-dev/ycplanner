// Define TypeScript types for sections content data
export interface GetContentResponse {
  banners: BannerProps[];
  abouts: AboutProps[];
  galleries: GalleryProps[];
  howIWorks: HowIWorkProps[];
}

export interface ImageContent {
  url: string;
  fileName: string;
  height: number;
  width: number;
}

export interface BannerProps {
  title?: string;
  subtitle?: string;
}

export interface AboutProps {
  title: string;
  description: string;
  subtitle: string;
  image: ImageContent;
  keyPoints: KeyPoints[];
  eventsTitle: string;
  events: AboutEvents[];
  closingText: string;
}

export interface KeyPoints {
  highlightedText: string;
  normalText: string;
}

export interface AboutEvents {
  image: ImageContent;
  mobileImage: ImageContent;
  title: string;
}

export interface GalleryProps {
  title: string;
  images: ImageContent[];
  mobileImages: ImageContent[];
}

export interface HowIWorkProps {
  title1?: string;
  image?: ImageContent;
  subtitle1?: string;
  paragraph1?: string;
  subtitle2?: string;
  paragraph2?: string;
  subtitle3?: string;
  paragraph3?: string;
  title2?: string;
  paragraph_service_list?: string[];
}
