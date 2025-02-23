"use client";

import { useParams } from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Image from 'next/image';
import { HeaderPage } from '@/components/UI/Header';
import Footer from "@/components/UI/Footer";
import { projects } from '@/data/projects/project';
import { useTranslations } from "next-intl";
import VanillaTilt from 'vanilla-tilt';

const Detail: React.FC = () => {
    const params = useParams();
    const id = params?.id;
    const locale = params?.locale as "en" | "vi";
    const t = useTranslations('Detail');

    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);
    useEffect(() => {
        const tiltElements = document.querySelectorAll<HTMLElement>('.tilt');
        tiltElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                VanillaTilt.init(el, {
                    max: 25,
                    speed: 200,
                    glare: true,
                    "max-glare": 0.5
                });
            }
        });
    }, []);

    const projectData = projects.find((project) => project.id === id);
    if (!projectData) {
        return <p>Dự án không tồn tại.</p>;
    }

    const projectLocaleData = projectData[locale];

    return (
        <div>
            <HeaderPage />
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="w-full object-cover rounded-3xl border border-gray-100 dark:border-gray-900 shadow-2xl shadow-gray-600/10 mt-10 tilt">
                    <Image
                        data-aos="fade-up"
                        src={projectLocaleData.image?.img}
                        className="rounded-3xl"
                        alt="thumbnails"
                        width={1440}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="mt-8 dark:text-white text-gray-800">
                    <h1 data-aos="fade-right" className="text-3xl md:text-5xl font-bold">{projectLocaleData.name}</h1>
                    <p data-aos="fade-right" className="mt-4 text-sm md:text-base">{projectLocaleData.description}</p>

                    <div className="flex flex-col md:flex-row mt-6">
                        <div className="md:w-3/12 w-full p-4 md:p-6 rounded-lg dark:text-white">
                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-semibold mb-2">{t('Platforms')}</h2>
                            <p data-aos="fade-right" className="mb-4 text-sm md:text-base">{projectLocaleData.platforms}</p>

                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-semibold mb-2">{t('Features')}</h2>
                            <ul className="mb-4 list-disc list-inside space-y-1 text-sm md:text-base">
                                {projectLocaleData.keyFeatures.map((feature, index) => (
                                    <li key={index} data-aos="fade-right">{feature}</li>
                                ))}
                            </ul>

                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-medium mb-2">{t('Technologies')}</h2>
                            <ul className="mb-4 list-disc list-inside space-y-1 text-sm md:text-base">
                                {projectLocaleData.technologies.map((tech, index) => (
                                    <li key={index} data-aos="fade-right">{tech}</li>
                                ))}
                            </ul>

                            <h2 data-aos="fade-right" className="text-xl md:text-2xl font-semibold mb-2">{t('Responsibility')}</h2>
                            <p data-aos="fade-right" className="text-sm md:text-base">{projectLocaleData.responsibilities}</p>
                        </div>

                        <div className="md:w-9/12 w-full">
                            <div className="grid grid-cols-1 gap-4 mt-10">
                                {projectLocaleData.bigImages.length > 0 ? (
                                    projectLocaleData.bigImages.map((image, index) => (
                                        <div key={index} data-aos="fade-left" className="w-full object-cover rounded-3xl border border-gray-100 dark:border-gray-900 shadow-2xl shadow-gray-600/10">
                                            <Image
                                                src={image.img}
                                                alt={image.alt}
                                                className="rounded-3xl"
                                                width={1440}
                                                height={1024}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center text-gray-500 mt-4"></div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                                {projectLocaleData.smallImages.length > 0 ? (
                                    projectLocaleData.smallImages.map((image, index) => (
                                        <div key={index} data-aos="fade-left" className="rounded-xl border border-gray-100 dark:border-gray-900 shadow-xl shadow-gray-600/10">
                                            <Image
                                                src={image.img}
                                                alt={image.alt}
                                                width={450}
                                                height={450}
                                                className="object-cover rounded-xl"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center text-gray-500 mt-4"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;
