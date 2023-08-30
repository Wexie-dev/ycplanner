import React from 'react';
import { HowIWorkProps } from '@/types';
import Info from '../components/HowIWork/Info';
import Services from '../components/HowIWork/Services';

function HowIWork({
  title1,
  image,
  subtitle1,
  paragraph1,
  subtitle2,
  paragraph2,
  subtitle3,
  paragraph3,
  title2,
  paragraph_service_list,
}: HowIWorkProps) {
  return (
    <section className="h-full w-full bg-[#E9EAED]" id="howIWork">
      {/* Como trabajo */}
      <Info
        title1={title1}
        image={image}
        subtitle1={subtitle1}
        paragraph1={paragraph1}
        subtitle2={subtitle2}
        paragraph2={paragraph2}
        subtitle3={subtitle3}
        paragraph3={paragraph3}
      ></Info>

      {/* Detalle del servicio */}
      <Services title2={title2} paragraph_service_list={paragraph_service_list}></Services>
    </section>
  );
}

export default React.memo(HowIWork);
