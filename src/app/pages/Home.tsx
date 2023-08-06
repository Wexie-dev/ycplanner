import { useContentsQuery } from '@/hooks/useContents';
import React from 'react';
import About from '../sections/About';
import Banner from '../sections/Banner';
import Gallery from '../sections/Gallery';
import { AboutProps, BannerProps, HowIWorkProps, GalleryProps } from '@/types';
import HowIWork from '../sections/HowIWork';
import Footer from '../components/Footer';

export default function Home() {
  const { data: content, isLoading, isError } = useContentsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: </div>;

  const bannerProps: BannerProps = {
    title: content!.banners[0].title,
    subtitle: content!.banners[0].subtitle,
  };

  const aboutProps: AboutProps = {
    title: content!.abouts[0].title,
    image: content!.abouts[0].image,
    subtitle: content!.abouts[0].subtitle,
    description: content!.abouts[0].description,
    keyPoints: content!.abouts[0].keyPoints,
    eventsTitle: content!.abouts[0].eventsTitle,
    events: content!.abouts[0].events,
    closingText: content!.abouts[0].closingText,
  };

  const galleryProps: GalleryProps = {
    title: content!.galleries[0].title,
    images: content!.galleries[0].images,
    mobileImages: content!.galleries[0].mobileImages,
  };
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
      <HowIWork {...howIWorkProps}></HowIWork>
      <Gallery {...galleryProps}></Gallery>
      <Footer></Footer>
    </div>
  );
}
