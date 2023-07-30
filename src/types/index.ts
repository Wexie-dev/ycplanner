// Define TypeScript types for sections content data
export interface GetContentResponse {
  banners: BannerProps[];
  abouts: AboutProps[];
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
  subTitle?: string;
}

export interface AboutProps {
  title: string;
  description: string;
  subTitle: string;
  image: ImageContent;
  keyPoints: KeyPoints[];
  eventsTitle: string;
  events: AboutEvents[];
}

export interface KeyPoints {
  highlightedText: string;
  normalText: string;
}

export interface AboutEvents {
  image: ImageContent;
  title: string;
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
