import { useContentsQuery } from "@/hooks/useContents";
import React from "react";
import About from "../sections/About";
import { BannerProps } from "@/types";
import Banner from "../sections/Banner";
import MobileNavbar from "../components/MobileNavbar";
import useMediaQuery, { mediaQueries } from "@/hooks/useMediaQueries";
import FullNavbar from "../components/FullNavbar";

export default function Home() {
  const { data: content, isLoading, isError, error } = useContentsQuery();
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
    <div className="w-full">
      <Banner {...bannerProps}></Banner>
      <About></About>
    </div>
  );
}
