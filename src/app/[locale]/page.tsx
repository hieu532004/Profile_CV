"use client";
import React from "react";
import { HeaderPage } from "@/components/UI/Header";
import { Banner } from "@/components/UI/Banner";
import { Products } from "@/components/UI/Products";
import ScrollEffect from "@/components/Effects/ScrollEffect";
import Footer from "@/components/UI/Footer";
import { SkillsSection } from "@/components/UI/Skills";
import { AboutPage } from "@/components/UI/About";
import AOS from "aos";
import { useEffect } from "react";
import Contact from "@/components/UI/Contact";
import VanillaTilt from "vanilla-tilt";
const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // thời gian chạy hiệu ứng
    });
  }, []);

  useEffect(() => {
    const tiltElements = document.querySelectorAll<HTMLElement>(".tilt");
    tiltElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        // Type guard to ensure el is HTMLElement
        VanillaTilt.init(el, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      }
    });
  }, []);
  return (
    <div className="text-black">
      <div className="fixed flex w-full  z-20  px-4 md:px-8 lg:dark:bg-[#0d2539] lg:bg-white justify-between items-center text-gray-600 top-0 dark:text-gray-200">
      <HeaderPage />
      </div>
         

      <div id="about" >
        <ScrollEffect>

          <AboutPage />
        </ScrollEffect>
      </div>
      <div className="">
        <ScrollEffect>
          <Banner />
        </ScrollEffect>
      </div>

      <div id="projects">
        <ScrollEffect>
          <Products />
        </ScrollEffect>
      </div>

      <div id="skills">
        <ScrollEffect>
          <SkillsSection />
        </ScrollEffect>
      </div>

      <div id="Contact">
        <ScrollEffect>
          <Contact />
        </ScrollEffect>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
