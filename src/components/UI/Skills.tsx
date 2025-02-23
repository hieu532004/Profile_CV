"use client"; // Đảm bảo bạn đang sử dụng use client nếu cần thiết
import React, { useEffect } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPhotoVideo,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGraphql, SiMongodb, SiExpress } from 'react-icons/si';
import { CiMobile1 } from "react-icons/ci";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TiltComponent from '../Effects/TiltComponent';

// Dữ liệu kỹ năng mở rộng và phân loại
const skills = {
  frontend: [
    { type: 'HTML', level: 90, color: { bar: "#E34C26", title: { background: "#E34C26", text: "#fff" }, level: { text: "#000" } } },
    { type: 'CSS', level: 85, color: { bar: "#1572B6", title: { background: "#1572B6", text: "#fff" }, level: { text: "#000" } } },
    { type: 'JavaScript', level: 95, color: { bar: "#F0DB4F", title: { background: "#F0DB4F", text: "#000" }, level: { text: "#000" } } },
    { type: 'TypeScript', level: 85, color: { bar: "#007ACC", title: { background: "#007ACC", text: "#fff" }, level: { text: "#000" } } },
    { type: 'React', level: 90, color: { bar: "#61DBFB", title: { background: "#61DBFB", text: "#000" }, level: { text: "#000" } } },
    { type: 'Next.js', level: 80, color: { bar: "#000000", title: { background: "#000000", text: "#fff" }, level: { text: "#fff" } } },
  ],
  backend: [
    { type: 'Node.js', level: 85, color: { bar: "#68A063", title: { background: "#68A063", text: "#fff" } } },
    { type: 'Express.js', level: 80, color: { bar: "#000000", title: { background: "#000000", text: "#fff" } } },
    { type: 'Python', level: 75, color: { bar: "#3776AB", title: { background: "#3776AB", text: "#fff" } } },
    { type: 'GraphQL', level: 70, color: { bar: "#E535AB", title: { background: "#E535AB", text: "#fff" } } },
    { type: 'MongoDB', level: 75, color: { bar: "#4DB33D", title: { background: "#4DB33D", text: "#fff" } } },
  ],
  mobile: [
    { type: 'React Native', level: 85, color: { bar: "#61DBFB", title: { background: "#61DBFB", text: "#fff" } } },
  ],
  tools: [
    { type: 'Git', level: 85, color: { bar: "#F05032", title: { background: "#F05032", text: "#fff" } } },
    { type: 'Docker', level: 65, color: { bar: "#2496ED", title: { background: "#2496ED", text: "#fff" } } },
  ],
  design: [
    { type: 'Figma', level: 90, color: { bar: "#F24E1E", title: { background: "#F24E1E", text: "#fff" } } },
    { type: 'Photoshop', level: 80, color: { bar: "#31A8FF", title: { background: "#31A8FF", text: "#fff" } } },
  ],
};

// Định nghĩa loại cho các danh mục kỹ năng
type SkillCategory = keyof typeof skills;

export const SkillsSection = () => {
  const t = useTranslations('Header');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className='container mx-auto pt-24 text-gray-700 dark:text-white'>
      <motion.div
        className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">{t('skills')}</h2>

        {/* Icons for the skills */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-4xl text-gray-700 icon-container"
          
        >
          {Object.keys(skills).map((category) => (
            skills[category as SkillCategory].map(skill => (
             
                <TiltComponent key={skill.type} options={{ scale: 1.1, speed: 400 }}>
                   <div data-aos="fade-up" data-aos-duration="500"  className='flex '>
                {getIcon(skill.type)} {/* Thay đổi hàm này để lấy icon tương ứng */}
                <p className=" ml-2 mt-1 text-gray-800 dark:text-gray-300 text-lg">{skill.type}</p></div>
              </TiltComponent>
              
              
            ))
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const getIcon = (skillType: string) => {
  switch (skillType) {
    case 'HTML':
      return <FaHtml5 className="icon text-orange-600" title="HTML5" />;
    case 'CSS':
      return <FaCss3Alt className="icon text-blue-600" title="CSS3" />;
    case 'JavaScript':
      return <FaJs className="icon text-yellow-500" title="JavaScript" />;
    case 'TypeScript':
      return <SiTypescript className="icon text-blue-700" title="TypeScript" />;
      case 'Express.js':
      return <SiExpress className="icon text-blue-700" title="TypeScript" />;
    case 'React':
      return <FaReact className="icon text-blue-600" title="React" />;
    case 'Node.js':
      return <FaNodeJs className="icon text-green-600" title="Node.js" />;
    case 'Next.js':
      return <SiNextdotjs className="icon text-black" title="Next.js" />;
    case 'Python':
      return <FaPython className="icon text-blue-500" title="Python" />;
    case 'GraphQL':
      return <SiGraphql className="icon text-pink-600" title="GraphQL" />;
    case 'MongoDB':
      return <SiMongodb className="icon text-green-600" title="MongoDB" />;
    case 'Git':
      return <FaGitAlt className="icon text-red-600" title="Git" />;
    case 'Docker':
      return <FaDocker className="icon text-blue-600" title="Docker" />;
      case 'React Native':
      return <CiMobile1 className="icon text-blue-600" title="Docker" />;
    case 'Figma':
      return <FaFigma className="icon text-pink-600" title="Figma" />;
    case 'Photoshop':
      return <FaPhotoVideo className="icon text-purple-600" title="Photoshop" />;
    default:
      return null;
  }
};
