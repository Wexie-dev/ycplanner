import { useContentsQuery } from '@/hooks/useContents';
import React from 'react';
import About from '../sections/About';
import Banner from '../sections/Banner';
import Gallery from '../sections/Gallery';
import MobileNavbar from '../components/MobileNavbar';
import { AboutProps, BannerProps, HowIWorkProps, GalleryProps } from '@/types';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import HowIWork from '../sections/HowIWork';

export default function Home() {
  const { data: content, isLoading, isError } = useContentsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: </div>;

  const bannerProps: BannerProps = {
    title: content!.banners[0].title,
    subTitle: content!.banners[0].subTitle,
  };

  const aboutProps: AboutProps = {
    title: content!.abouts[0].title,
    description: content!.abouts[0].description,
    subTitle: content!.abouts[0].subTitle,
    keyPoints: content!.abouts[0].keyPoints,
    events: content!.abouts[0].events,
  };

  const galleryProps: GalleryProps = {
    title: content!.galleries[0].title,
    image: content!.galleries[0].image,
  }
  const howIWorkProps: HowIWorkProps = {
    title1: content!.howIWorks[0].title1,
    image: content!.howIWorks[0].image,
    subtitle1: content!.howIWorks[0].subtitle1,
    paragraph1: content!.howIWorks[0].paragraph1,
    subtitle2: content!.howIWorks[0].subtitle2,
    paragraph2: content!.howIWorks[0].paragraph2,
    subtitle3: content!.howIWorks[0].subtitle3,
    paragraph3: content!.howIWorks[0].paragraph3,
    title2: content!.howIWorks[0].title2,
    paragraph_service_list: content!.howIWorks[0].paragraph_service_list,
  };

  return (
    <div className="w-full">
      <Banner {...bannerProps}></Banner>
      <About {...aboutProps}></About>
      <Gallery {...galleryProps}></Gallery>
      <HowIWork {...howIWorkProps}></HowIWork>
    </div>
  );
}
