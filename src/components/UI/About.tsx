/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslations } from "next-intl";
import { FiArrowDownCircle } from "react-icons/fi";
import { useParams } from "next/navigation";
export const AboutPage = () => {
  const t = useTranslations("Info");
  const params = useParams();
  const locale = params.locale;
  console.log(locale);
  return (
    <div className="container mx-auto max-w-7xl pt-24 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12">

        {/* Hình ảnh và chữ nền */}
        <div className="relative flex-1 flex justify-center">
          <img
            data-aos="fade-up"
            src="/images/avt.png"
            alt="art cover"
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[512px] z-10"
            loading="lazy"
          />
          <h2 className="absolute text-center inset-0 z-0 text-[30px] sm:text-[40px] lg:text-[60px] font-bold opacity-30 text-gray-300 dark:text-black  lg:text-left mt-16">
            Full Stack Developer <br /> Designer  <br /> Mobile Developer
          </h2>
        </div>

        {/* Phần giới thiệu */}
        <div
          data-aos="fade-up"
          className="flex-1 flex flex-col gap-4 text-center lg:text-left"
        >
          <h3 className="text-2xl lg:text-3xl text-black dark:text-white">{t('hi')}</h3>
          <h3 className="text-3xl lg:text-5xl font-bold text-black dark:text-white">
            {t('name')}
          </h3>
          <p className="mt-4 text-lg lg:text-xl font-light text-gray-800 dark:text-gray-100">
            {t('bio')}
          </p>
          <div className="flex justify-center lg:justify-start">
          <a
  download={`${locale}/CV-KhanhLinh.pdf`}
  href={`/${locale}/CV-KhanhLinh.pdf`}
  className="font-medium flex justify-center items-center w-36 sm:w-48 mt-8 mb-6 sm:mb-0 border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
  aria-label="Download CV"
>
  <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
  <span className="text-sm sm:text-base font-general-medium duration-100">
    {locale === "kr" ? "다운로드 CV" : locale === "vi" ? "Tải xuống CV" : "Download CV"}
  </span>
</a>

          </div>
        </div>
      </div>
    </div>
  );
};
