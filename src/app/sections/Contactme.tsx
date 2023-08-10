import { ContactMeProps } from '@/types';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import planta from '../../../public/images/plant.svg';
import weddingpic from '../../../public/images/weddingpic.png';

type ContactMePayload = {
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  notes?: string;
};

type InitialValues = Partial<ContactMePayload>;

function Contactme() {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const [customError, setCustomError] = useState<undefined | string>();

  const contactMeValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Muy corto').max(35, 'Muy largo').required('Nombre requerido'),
    email: Yup.string().max(45, 'Muy largo').required('Correo requerido').email('Correo no válido'),
    phone: Yup.string().max(20, 'Muy largo').required('Número requerido'),
    date: Yup.date().required('Fecha requerida'),
    notes: Yup.string().max(200, 'Muy largo'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: null,
      notes: '',
    },
    validationSchema: contactMeValidationSchema,
    onSubmit: (values) => {
      const payload = values as ContactMePayload;
    },
  });

  const isBtnDisabled = useMemo(
    () =>
      !formik.values.name ||
      !formik.values.email ||
      !formik.values.phone ||
      !formik.values.date ||
      formik.isSubmitting ||
      !formik.isValid ||
      !formik.dirty,
    [formik.isSubmitting, formik.isValid, formik.dirty],
  );

  const ResponseMessage = () => {
    if (customError) {
      return <div className="text-center text-sm text-red-600">{customError}</div>;
    } else {
      return <div className="text-center text-sm text-green-600">Enviado correctamente</div>;
    }
  };

  const Success = () => (
    <div className="h-[750px] w-[348px] text-center sm:w-[685px]">
      <div className="mt-[314px] font-butler text-6xl font-medium text-typographyPink sm:mt-[393px] sm:text-8xl">
        ¡Gracias!
      </div>
      <div className="text-[16px] font-normal text-[#5B5A5A] sm:text-[18px]">
        Tu respuesta ha sido enviada
      </div>
    </div>
  );

  console.log(formik.errors, formik.touched);

  return (
    <section id="contactMe" className="w-full pt-16">
      <div className="flex flex-col items-center bg-[#D7D8DB] lg:mt-36 lg:h-[530px] lg:flex-row-reverse lg:justify-center xl:h-[640px]">
        <div className="relative flex h-[392px] w-[344px] justify-center lg:ml-4 lg:h-[530px] lg:w-[466px] 2xl:h-[884px] 2xl:w-[777px]">
          <Image fill src={weddingpic} className="" alt="Wedding" quality={100} />
        </div>
        <div className="mb-8 mt-6 h-[755px] w-[328px] rounded-lg bg-white drop-shadow-lg md:w-[460px] lg:h-[775px] 2xl:h-[848px] 2xl:w-[725px]">
          <div className="rotate -[-5deg] transform">
            <Image
              width={223}
              height={99}
              className="absolute -right-1 -top-5"
              src={planta}
              alt="Planta"
            />
          </div>

          <div>
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
            <form
              method="POST"
              className="mx-7 mt-8 flex flex-col gap-6 md:px-5 2xl:px-[140px]"
              data-netlify="true"
            >
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Nombre*"
                  className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="text-xs text-red-700">{formik.errors.name}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Email*"
                  className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-xs text-red-700">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Teléfono*"
                  className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="text-xs text-red-700">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div>
                <DatePicker
                  selected={formik.values.date}
                  onChange={(date) => formik.setFieldValue('date', date)}
                  onBlur={() => formik.setFieldTouched('date', true)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Fecha estimada del evento*"
                  className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
                  wrapperClassName="w-full"
                />
                {formik.errors.date && formik.touched.date ? (
                  <div className="text-xs text-red-700">{formik.errors.date}</div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block font-semibold text-[#5B5A5A] xl:text-lg"
                >
                  ¿Quieren adelantarme algo?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Escribí acá"
                  className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-2 border-[#C2857D] pl-3 pt-3 text-lg font-light placeholder-[#BEB0B0] focus:outline-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`flex h-[40px] w-[144px] items-center justify-center rounded-lg bg-[#C2857D] text-center text-base font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#C2857D] focus:ring-offset-2 xl:h-[48px] xl:w-[240px] ${
                    isBtnDisabled ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Contactme);
