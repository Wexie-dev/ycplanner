import { ContactMeProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import planta from '../../../public/images/plant.svg';
import weddingpic from '../../../public/images/weddingpic.png';

function Contactme() {
  const isMobile = useMediaQuery(mediaQueries.mobile);

  return (
    <section id="contactMe" className="w-full pt-16">
      <div className="flex flex-col items-center bg-[#D7D8DB] lg:mt-36 lg:h-[530px] lg:flex-row-reverse lg:justify-center xl:h-[640px]">
        <div className="flex justify-center lg:ml-4">
          <Image
            width={344}
            height={392}
            src={weddingpic}
            className="lg:h-[530px] lg:w-[466px] 2xl:h-[884px] 2xl:w-[777px]"
            alt="Wedding"
            quality={100}
          />
        </div>
        <div className="mb-8 mt-6 h-[742px] w-[328px] rounded-lg bg-white drop-shadow-lg md:w-[460px] lg:h-[760px] 2xl:h-[848px] 2xl:w-[725px]">
          <div className="rotate -[-5deg] transform">
            <Image
              width={223}
              height={99}
              className="absolute -right-1 -top-5"
              src={planta}
              alt="Planta"
            />
          </div>
          <div className="md:px-5 2xl:px-[140px]">
            <h1 className="pt-[92px] text-center font-butler text-2xl font-normal text-[#C2857D] lg:text-3xl 2xl:text-5xl">
              ¿Hacemos equipo?
            </h1>
            <div className="mx-6 mt-5 text-center text-sm font-normal text-[#36373A] lg:text-base">
              <p className="">
                Me encantaría conocerlos y así poder armar su evento personalizado!
              </p>
              <p className="mt-2">¿Me cuentan cuál es su idea?</p>
            </div>
          </div>
          <form className="mx-7 mt-8 flex flex-col gap-6 md:px-5 2xl:px-[140px]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre*"
              className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email*"
              className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
            />
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Teléfono*"
              className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
            />
            <input
              type="text"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              id="date"
              name="date"
              placeholder="Fecha estimada del evento*"
              className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
            />
            <div>
              <label
                htmlFor="Adelanto"
                className="mb-2 block font-semibold text-[#5B5A5A] xl:text-lg"
              >
                ¿Quieren adelantarme algo?
              </label>
              <textarea
                id="adelanto"
                name="adelanto"
                rows={3}
                placeholder="Escribí acá"
                className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-2 border-[#C2857D] pl-3 pt-3 text-lg font-light placeholder-[#BEB0B0] focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex h-[40px] w-[144px] items-center justify-center rounded-lg bg-[#C2857D] text-center text-base font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#C2857D] focus:ring-offset-2 xl:h-[48px] xl:w-[240px]"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactme;
