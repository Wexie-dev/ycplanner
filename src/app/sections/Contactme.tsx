import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ContactMePayload, postContactMe } from '@/services/contact';
import '../sections/DatePicker.css';

import planta from '../../../public/images/plant.svg';
import weddingpic from '../../../public/images/weddingpic.png';
import calendar from '../../../public/images/calendar.svg';
import Spinner from '../components/Spinner';

type InitialValues = Partial<ContactMePayload>;

function Contactme() {
  const [customError, setCustomError] = useState<undefined | string>();
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState({
    name: true,
    email: true,
    phone: true,
  });

  const handleFocus = (inputName: string) => {
    setIsPlaceholderVisible((prevVisibility) => ({
      ...prevVisibility,
      [inputName]: false,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, inputName: string) => {
    if (!e.target.value) {
      setIsPlaceholderVisible((prevVisibility) => ({
        ...prevVisibility,
        [inputName]: true,
      }));
    }
  };

  const contactMeValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Muy corto').max(35, 'Muy largo').required('Campo obligatorio'),
    email: Yup.string()
      .max(45, 'Muy largo')
      .required('Campo obligatorio')
      .email('Correo no válido'),
    phone: Yup.string().max(20, 'Muy largo').required('Campo obligatorio'),
    date: Yup.date().required('Campo obligatorio'),
    notes: Yup.string().max(200, 'Muy largo'),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = formik.values as ContactMePayload;
    mutation.mutate(payload);
  };

  const formik = useFormik<InitialValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: null,
      notes: '',
    },
    validationSchema: contactMeValidationSchema,
    onSubmit: () => {},
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

  const Error = ({ error }: { error: unknown }) => {
    const errorToRender = error as Error;
    return (
      <div className="mt-2 text-sm text-red-700">
        {errorToRender?.message ?? 'Hubo un error. Por favor inténtalo nuevamente'}
      </div>
    );
  };

  const Success = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 500);
    });
    return (
      <div className={`flex h-full flex-col justify-center text-center `}>
        <div
          className={`min-height-60 ${
            show
              ? 'translate-y-0 opacity-100 transition-transform duration-500 ease-out'
              : 'translate-y-4 opacity-0 transition-transform duration-1000 ease-in'
          }`}
        >
          <div className="font-butler text-3xl font-medium text-typographyPink xl:text-4xl 2xl:text-6xl 3xl:text-8xl">
            ¡Gracias!
          </div>
          <div className="mt-2 text-base font-normal text-[#5B5A5A] lg:text-lg 2xl:text-xl">
            <p>Tu respuesta ha sido enviada.</p>
            <p>En breve te responderé</p>
          </div>{' '}
        </div>
      </div>
    );
  };

  const mutation = useMutation(postContactMe, {
    onError() {
      setCustomError('Hubo un error enviando el formulario. Por favor intenta nuevamente!');
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = event.target.value.replace(/[^+\d]/g, '');
    formik.setFieldValue('phone', inputPhoneNumber);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9+]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <section id="contactMe" className="w-full pt-16">
      <div className="flex flex-col items-center bg-[#D7D8DB] lg:mt-28 lg:h-[530px] lg:flex-row-reverse lg:justify-around xl:h-[640px]">
        <div className="relative -mt-12 flex h-[392px] w-[344px] justify-center sm:h-[470px] sm:w-[400px] lg:ml-4 lg:mt-0 lg:h-[530px] lg:w-[466px] xl:h-[636px] xl:w-[540px] 2xl:h-[884px] 2xl:w-[777px]">
          <Image
            fill
            src={weddingpic}
            alt="Wedding"
            className="top-[-50px]"
            sizes="(max-width: 768px) 33vw, 50vw"
            quality={100}
          />
        </div>
        <div className="mb-8 mt-6 min-h-[740px] w-[328px] rounded-lg bg-white drop-shadow-lg sm:min-h-[736px] sm:w-[420px] md:min-h-[756px] md:w-[460px] lg:min-h-[765px] xl:min-h-[775px] xl:w-[524px] 2xl:min-h-[820px] 2xl:w-[600px] 3xl:min-h-[848px] 3xl:w-[725px]">
          <div className="rotate -[-5deg] transform">
            <Image
              width={223}
              height={99}
              className="absolute -right-1 -top-5"
              src={planta}
              alt="Planta"
            />
          </div>

          {mutation.isSuccess ? (
            <Success />
          ) : (
            <div
              id="form-container"
              className="h-full px-7 md:px-10 xl:px-12 2xl:px-[80px] 3xl:px-[140px]"
            >
              <div>
                <h1 className="pt-[92px] text-center font-butler text-2xl font-normal text-[#C2857D] lg:text-3xl 2xl:text-5xl">
                  ¿Hacemos equipo?
                </h1>
                <div className="mt-5 text-center text-sm font-normal text-[#36373A] lg:text-base">
                  <p>Me encantaría conocerlos y así poder armar su evento personalizado!</p>
                  <p className="mt-2">¿Me cuentan cuál es su idea?</p>
                </div>
              </div>
              <form
                className="mt-8 flex flex-col gap-6"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                name="contact"
                method="post"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    No llenes esto si eres humano: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={(e) => handleBlur(e, 'name')}
                    onFocus={() => handleFocus('name')}
                    placeholder={isPlaceholderVisible.name ? 'Nombre*' : ''}
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
                    onBlur={(e) => handleBlur(e, 'email')}
                    onFocus={() => handleFocus('email')}
                    placeholder={isPlaceholderVisible.email ? 'Email*' : ''}
                    className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-xs text-red-700">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <input
                    type="text"
                    pattern="[0-9]+"
                    id="phone"
                    name="phone"
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onBlur={(e) => handleBlur(e, 'phone')}
                    onFocus={() => handleFocus('phone')}
                    placeholder={isPlaceholderVisible.phone ? 'Teléfono*' : ''}
                    className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
                  />
                  {formik.errors.phone && formik.touched.phone ? (
                    <div className="text-xs text-red-700">{formik.errors.phone}</div>
                  ) : null}
                </div>
                <div className="relative">
                  <DatePicker
                    selected={formik.values.date}
                    onChange={(date) => formik.setFieldValue('date', date)}
                    onBlur={() => formik.setFieldTouched('date', true)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Fecha estimada del evento*"
                    className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-b-2 border-[#C2857D] pb-4 pl-0 text-base font-semibold leading-normal placeholder-[#5B5A5A] focus:outline-none 2xl:text-lg"
                    wrapperClassName="w-full"
                    calendarClassName="my-calendar"
                    minDate={new Date()}
                  />
                  {formik.errors.date && formik.touched.date ? (
                    <div className="text-xs text-red-700">{formik.errors.date}</div>
                  ) : null}
                  <Image
                    width={26}
                    height={26}
                    src={calendar}
                    alt="Calendario"
                    className="absolute -right-1 top-1/2 mr-2 -translate-y-6 transform"
                  />
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
                    onChange={formik.handleChange}
                    placeholder="Escribí acá"
                    className="focus:shadow-outline-[#C2857D] block w-full appearance-none border-2 border-[#C2857D] pl-3 pt-3 text-lg font-light placeholder-[#BEB0B0] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button
                    type="submit"
                    className={`mb-3 mt-4 flex h-[40px] w-[144px] items-center justify-center rounded-lg bg-[#C2857D] text-center text-base font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#C2857D] focus:ring-offset-2 xl:h-[48px] xl:w-[240px] ${
                      isBtnDisabled ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                  >
                    {mutation.isLoading ? <Spinner /> : 'Enviar'}
                  </button>
                  {mutation.isError && <Error error={customError} />}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Contactme);
