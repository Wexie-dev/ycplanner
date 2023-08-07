import { ContactMeProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import planta from '../../../public/images/plant.svg';
import weddingpic from '../../../public/images/weddingpic.png';

function Contactme(contactMeProps: ContactMeProps) {
  const matchedSM = useMediaQuery(mediaQueries.mobile);

  return (
    <section id="contactMe" className={`mt-[60px] bg-[#D7D8DB] 2xl:mt-[40px]`}>
      <div className="flex w-full flex-col-reverse items-center 2xl:flex-row 2xl:items-start 2xl:justify-evenly">
        <div className="flex justify-center">
          <div className="relative mb-[32px] block h-[742px] w-[328px] rounded bg-white shadow-2xl 2xl:h-[848px] 2xl:w-[725px]">
            <div className="rotate -[-5deg] transform">
              <Image
                width={matchedSM ? 223 : 225}
                height={matchedSM ? 99 : 100}
                className="absolute -right-1 -top-5"
                src={planta}
                alt="Planta"
              />
            </div>
            <>
              <h1 className="mt-[92px] text-center font-butler text-[24px] font-normal text-[#C2857D]">
                ¿Hacemos equipo?
              </h1>
              <div className="flex flex-col justify-center">
                <p className="mx-[25px] mt-[19px] text-center text-[14px] font-normal text-[#36373A]">
                  Me encantaría conocerlos y así poder armar su evento personalizado!
                </p>
                <p className="mx-[56px] mt-[8px] text-center text-[14px] font-normal text-[#36373A]">
                  ¿Me cuentan cuál es su idea?
                </p>
              </div>
              <form className="mx-auto w-[276px]">
                <div className="mb-[24px]">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre*"
                    className="focus:shadow-outline-[#C2857D] px-26 mt-[24px] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-[16px] font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none"
                  />
                </div>
                <div className="mb-[24px]">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    className="focus:shadow-outline-[#C2857D] px-26 mt-[24px] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-[16px] font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none"
                  />
                </div>
                <div className="mb-[24px]">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Teléfono*"
                    className="focus:shadow-outline-[#C2857D] px-26 mt-[24px] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-[16px] font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none"
                  />
                </div>
                <div className="mb-[24px]">
                  <input
                    type="date"
                    id="estimate"
                    name="estimate"
                    placeholder="Fecha estimada del evento*"
                    className="focus:shadow-outline-[#C2857D] px-26 mt-[24px] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-[16px] font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none"
                  />
                </div>
                <div className="">
                  <div className="mt-[8px]">
                    <label htmlFor="Adelanto" className="mb-2 block font-semibold text-[#5B5A5A]">
                      ¿Quieren adelantarme algo?
                    </label>
                    <input
                      type="text"
                      id="adelanto"
                      name="adelanto"
                      placeholder="Escribí acá"
                      className="block h-[96px] w-full rounded-sm border-2 border-[#C2857D] text-[18px] font-light placeholder-[#BEB0B0] shadow-sm focus:border-[#C2857D] focus:outline-none focus:ring-[#C2857D]"
                    />
                  </div>
                </div>
                <div className="mt-[32px] flex flex-col items-center justify-center">
                  <button
                    type="submit"
                    className="flex h-[40px] w-[144px] items-center justify-center rounded-lg bg-[#C2857D] text-center text-[16px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#C2857D] focus:ring-offset-2"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </>
          </div>
        </div>
        <div className="mx-auto h-[392px] w-full">
          <div className="relative flex justify-center">
            <Image
              width={matchedSM ? 344 : 777}
              height={matchedSM ? 392 : 884}
              src={weddingpic}
              className="absolute -top-10"
              alt="Wedding"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactme;
