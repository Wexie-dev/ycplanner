import { useContentsQuery } from '@/hooks/useContents';
import React from 'react';
import About from '../sections/About';
import { BannerProps } from '@/types';
import Banner from '../sections/Banner';
import MobileNavbar from '../components/MobileNavbar';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import FullNavbar from '../components/FullNavbar';

export default function Home() {
  const { data: content, isLoading, isError } = useContentsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: </div>;

  const bannerProps: BannerProps = {
    title: content!.banners[0].title,
    subTitle: content!.banners[0].subTitle,
  };

  return (
    <div className="w-full">
      <Banner {...bannerProps}></Banner>
      <About></About>
    </div>
  );
}
