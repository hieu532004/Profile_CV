"use client";
import React, { useEffect, useState } from 'react';
import { GoMoveToTop } from "react-icons/go";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false); // Trạng thái để theo dõi khi nào component đã mount

  useEffect(() => {
    setMounted(true); // Đặt `mounted` thành true khi component đã mount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) return null; // Chờ cho đến khi component được mount

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      className={`fixed bottom-20 right-5 p-2  text-gray-800 dark:text-white rounded-full shadow-md transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {mounted && <GoMoveToTop className="text-2xl " />} {/* Chỉ render icon khi component đã mount */}
    </button>
  );
};

export default ScrollToTopButton;
