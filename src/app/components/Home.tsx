import { useContentsQuery } from "@/hooks/useContents";
import React from "react";
import About from "../sections/About";
import { BannerProps } from "@/types";
import Banner from "../sections/Banner";
import MobileNavbar from "../sections/MobileNavbar";
import useMediaQuery, { mediaQueries } from "@/hooks/useMediaQueries";
import FullNavbar from "../sections/FullNavbar";

export default function Home() {
  const { data: content, isLoading, isError, error } = useContentsQuery();
  console.log("🚀 ~ file: Home.tsx:6 ~ Home ~ content:", content);
  const isMobile = useMediaQuery(mediaQueries.mobile);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: </div>;

  const bannerProps: BannerProps = {
    title: content!.banners[0].title,
    subTitle: content!.banners[0].subTitle,
    backgroundImg: {
      url: content!.banners[0].backgroundImg.url,
      height: content!.banners[0].backgroundImg.height,
      width: content!.banners[0].backgroundImg.width,
      fileName: content!.banners[0].backgroundImg.fileName,
    },
  };

  return (
    <div>
      {isMobile ? <MobileNavbar></MobileNavbar> : <FullNavbar></FullNavbar>}
      <Banner {...bannerProps}></Banner>
      <About></About>
    </div>
  );
}
