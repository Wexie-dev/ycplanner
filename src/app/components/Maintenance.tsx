import React from "react";
import Image from "next/image";
import YaniLogo from "../../../public/images/YaninaCorti-logo.svg";

function Maintenance() {
  return (
    <section
      id="Construction"
      className="flex justify-center items-center w-screen h-screen bg-[#F5F5F5]"
    >
      <div className="flex items-center flex-col w-[360px] md:w-[517px] lg:w-[620px] xl:w-[744px] h-[595px] md:h-[448px] lg:h-[537px] xl:h-[537px] bg-white border-2 rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="w-[159px] h-[130px] lg:w-[199px] lg:h-[162px] mt-[62px] md:mt-[51px] lg:mt-16 xl:mt-20">
          <Image width={199} height={162} alt="Logo Yanina" src={YaniLogo} />
        </div>
        <div className="mt-[36px] md:mt-3 lg:mt-4 xl:mt-5 font-normal text-2xl md:text-4 lg:text-5 text-[#4D4C4C]">
          ¡Próximamente!
        </div>
        <div className="md:w-[355px] lg:w-[444px] xl:w-[555px] mt-10 md:mt-3 lg:mt-4 xl:mt-5 text-base text-center text-[#4D4C4C]">
          Estoy construyendo mi web para que puedas conocer más sobre mí y cómo
          puedo ayudarte a planificar el día más especial de tu vida.
        </div>
        <div className="mt-7 md:mt-[18px] lg:mt-[22px] text-base text-center text-[#4D4C4C]">
          Mientras tanto 👇
        </div>
        <div className="flex justify-center items-center mt-7 md:mt-[18px] lg:mt-[22px] w-[241px] h-[45px] bg-[#C2857D] text-white font-semibold rounded-[10px]">
          <a href="https://www.instagram.com/yc.planner/">
            Contactame en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Maintenance;
