import React from 'react';
import { AboutProps } from '@/types';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import { MobileDesign } from './About/AboutMobile';
import AboutDesktop from './About/AboutDesktop';

export default React.memo(function About(props: AboutProps) {
  const isMobile = useMediaQuery(mediaQueries.mobile);

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-40" id="about">
      {isMobile ? <MobileDesign {...props} /> : <AboutDesktop {...props} />}
    </section>
  );
});
