import React from 'react';
import Image from 'next/image';
import YaniLogo from '../../../public/images/YaninaCorti-logo.svg';

function Maintenance() {
  return (
    <section
      id="Construction"
      className="flex h-screen w-screen items-center justify-center bg-[#F5F5F5]"
    >
      <div className="flex h-[595px] w-[360px] flex-col items-center rounded-[10px] border-2 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:h-[448px] md:w-[517px] lg:h-[537px] lg:w-[620px] xl:h-[537px] xl:w-[744px]">
        <div className="mt-[62px] h-[130px] w-[159px] md:mt-[51px] lg:mt-16 lg:h-[162px] lg:w-[199px] xl:mt-20">
          <Image width={199} height={162} alt="Logo Yanina" src={YaniLogo} />
        </div>
        <div className="md:text-4 lg:text-5 mt-[36px] text-2xl font-normal text-[#4D4C4C] md:mt-3 lg:mt-4 xl:mt-5">
          ¡Próximamente!
        </div>
        <div className="mt-10 text-center text-base text-[#4D4C4C] md:mt-3 md:w-[355px] lg:mt-4 lg:w-[444px] xl:mt-5 xl:w-[555px]">
          Estoy construyendo mi web para que puedas conocer más sobre mí y cómo puedo ayudarte a
          planificar el día más especial de tu vida.
        </div>
        <div className="mt-7 text-center text-base text-[#4D4C4C] md:mt-[18px] lg:mt-[22px]">
          Mientras tanto 👇
        </div>
        <div className="mt-7 flex h-[45px] w-[241px] items-center justify-center rounded-[10px] bg-[#C2857D] font-semibold text-white md:mt-[18px] lg:mt-[22px]">
          <a href="https://www.instagram.com/yc.planner/">Contactame en Instagram</a>
        </div>
      </div>
    </section>
  );
}

export default Maintenance;
