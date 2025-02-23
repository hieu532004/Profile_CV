"use client";
import { IoSearch } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projects } from "@/data/projects/project";
import { Project } from "@/types/project";


export const Products: React.FC = () => {
  
    const t = useTranslations("Projects");
    const params = useParams();
    const locale = params?.locale as "en" | "vi" | "kr";
    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...'; // Thêm dấu '...' nếu cắt ngắn
        }
        return description;
    };
    
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProjects = projects.filter((project) =>
        selectedCategory ? project[locale].platforms == selectedCategory : true
    );

    return (
        <div className="max-w-7xl mx-auto pt-24">
            <section className="py-5 sm:py-10 mt-5 sm:mt-10">
                <div data-aos="fade-up" data-aos-duration="500" className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-gray-200">
                        {t("projects")}
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className="mt-10 sm:mt-16">
                    <h3 className="font-general-regular text-center text-secondary-dark dark:text-gray-200 text-md sm:text-xl mb-3">
                        {t("searchPlaceholder")}
                    </h3>
                    <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
                        <div className="flex justify-between gap-2">
                            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                                <IoSearch className="dark:text-gray-200" />
                            </span>
                            <input
                                className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-gray-700"
                                id="name"
                                name="name"
                                type="search"
                                placeholder={t("search")}
                                aria-label="Name"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="font-general-medium px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-gray-200"
                        >
                            <option value="">{t("All")}</option>
                            <option value="Web">{t("Website")}</option>
                            <option value="Mobile">{t("Mobile")}</option>
                            <option value="Design">{t("Design")}</option>
                        </select>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 mt-6 ">
                    {filteredProjects.map((project: Project) => {
                        const projectData = project[locale]; // Access localized data
                        return (
                            <div key={project.id} className="max-w-full sm:max-w-md dark:bg-[#293041] border border-gray-200 rounded-lg shadow dark:border-gray-700 tilt">
                                <Link href={`/${locale}/projects/${project.id}`}>
                                    <Image
                                        src={projectData.image.img}
                                        alt={projectData.image.alt}
                                        width={500}
                                        height={300}
                                        className="rounded-t-lg w-full object-cover hover:"
                                    />
                                </Link>
                                <div className="p-4 md:p-5">
                                    <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                                        {projectData.name}
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {truncateDescription(projectData.description, 60)}
                                    </p>
                                    <Link href={`/${locale}/projects/${project.id}`} className="flex flex-row gap-2 items-center text-primary hover:opacity-80 text-[#b2254d]">
                                        {t("readMore")}
                                        <RiShareBoxLine  className="mr-2"/>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </section>
        </div>
    );
};
