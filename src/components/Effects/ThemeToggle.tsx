"use client"
import React from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-gray-700 shadow-sm rounded-full transition duration-300 ease-in-out hover:scale-105"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <FiSun className="text-gray-100 hover:text-gray-50 text-xl" />
      ) : (
        <FiMoon className="text-ternary-dark  dark:text-ternary-light dark:hover:text-primary-light text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
