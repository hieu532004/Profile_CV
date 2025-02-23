"use client";
import React, { createContext, useContext, useState, useEffect, FC } from 'react';
import { Theme, THEME_LOCAL_STORAGE_KEY } from '../types/theme';

type ThemeContextType = {
  theme: Theme | null; // Cho phép giá trị ban đầu là null
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

const getThemeFromLocalStorage = (): Theme => {
  const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme | null;
  if (storedTheme) {
    return storedTheme;
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? Theme.DARK : Theme.LIGHT;
};

export const ThemeContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null); // Ban đầu là null

  const toggleTheme = () => {
    if (theme) {
      setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    }
  };

  useEffect(() => {
    // Chỉ chạy trên client
    const initialTheme = getThemeFromLocalStorage();
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
      const root = window.document.documentElement;
      if (theme === Theme.DARK) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  if (theme === null) {
    // Render một trạng thái tạm thời hoặc loading cho đến khi theme được load
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
