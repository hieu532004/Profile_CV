"use client";
import React from "react";
// import Typical from "react-typical";
import { useTranslations } from "next-intl";
// import Image from 'next/image';
import CountUp from "react-countup";
import ComputersCanvas from "./ComputersCanvas";
export const Banner: React.FC = () => {
  const t = useTranslations('Info')

  return (
    <div className="max-w-7xl mx-auto">
     
     <div className="w-full  h-[600px]">
  <ComputersCanvas />
</div>

      {/* Additional section for projects portfolio can be added here */}
      <div className="mt-10 lg:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm py-10">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex flex-wrap justify-center gap-10 container mx-auto font-general-medium"
        >
          <StatItem value={5} label={t('year')} />
          <StatItem value="8k+" label={t('github')}  />
          <StatItem value="92%" label={t('feedback')}  />
          <StatItem value="89%" label={t('completed')}  />
        </div>
      </div>
    </div>
  );
};



const StatItem = ({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) => (
  <div className="text-center">
    <h2 className="text-4xl text-secondary-dark dark:text-secondary-light mb-2">
      <CountUp
        end={typeof value === "string" ? parseFloat(value) : value}
        duration={2}
        separator=","
        suffix={
          typeof value === "string" &&
          isNaN(parseFloat(value[value.length - 1]))
            ? value.slice(-1)
            : ""
        }
      />
    </h2>
    <span className="font-general-regular block text-md text-ternary-dark dark:text-ternary-light">
      {label}
    </span>
  </div>
);