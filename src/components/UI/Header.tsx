"use client";
import React, { useState } from "react";
import ThemeToggle from "../Effects/ThemeToggle";
import LanguageSwitcher from "../Effects/LanguageSwitcher";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export const HeaderPage: React.FC = () => {
  const t = useTranslations("Header");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Hàm cuộn mượt đến phần được chỉ định
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Đóng menu nếu đang mở
    setMenuOpen(false);
  };

  return (
    <nav className="flex container   pb-2    mx-auto px-4 md:px-8 lg:px-16 justify-between items-center pt-4 text-gray-600 dark:text-gray-200">
      {/* Logo */}
      <div data-aos="fade-right" data-aos-duration="500" className="flex items-center cursor-pointer">
        <Image
          src="/images/avatar.svg"
          alt="Dark Logo"
          width={40}
          height={40}
        />
        <h1 className="ml-3 font-bold text-lg">HIEU CODER</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6" data-aos="fade-down" data-aos-duration="500">
        <Link href={"/#about"} className="text-lg md:text-md sm:mt-1" onClick={() => scrollToSection('about')}>{t("about")}</Link>
        <Link href={"/#projects"} className="text-lg md:text-md sm:mt-1" onClick={() => scrollToSection('projects')}>{t("projects")}</Link>
        <Link href={"/#skills"} className="text-lg md:text-md sm:mt-1" onClick={() => scrollToSection('skills')}>{t("skills")}</Link>
        <Link href={"/#Contact"} className="text-lg md:text-md sm:mt-1" onClick={() => scrollToSection('Contact')}>{t("contact")}</Link>
        
      </div>

      {/* Hire Me button + Theme and Language Switcher */}
      <div data-aos="fade-left" data-aos-duration="500" className="hidden md:flex space-x-2 items-center">
        <span className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300" aria-label="Hire Me Button">
          <button>{t("hire")}</button>
        </span>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center space-x-2">
        <ThemeToggle />
        <LanguageSwitcher />
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full mt-8 bg-gray-50 z-10 dark:bg-gray-800 flex flex-col items-center space-y-3 py-4 md:hidden">
          <Link href={"/#about"} className="text-lg" onClick={() => scrollToSection('about')}>{t("about")}</Link>
          <Link href={"/#projects"} className="text-lg" onClick={() => scrollToSection('projects')}>{t("projects")}</Link>
          <Link href={"/#skills"} className="text-lg" onClick={() => scrollToSection('skills')}>{t("skills")}</Link>
          <Link href={"/#Contact"} className="text-lg" onClick={() => scrollToSection('Contact')}>{t("contact")}</Link>
         
          <span className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2 duration-300" aria-label="Hire Me Button">
           <Link href={"#"}> <button>{t("hire")}</button></Link> 
          </span>
        </div>
      )}
    </nav>
  );
};
