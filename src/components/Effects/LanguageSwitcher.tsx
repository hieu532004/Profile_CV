"use client"; // Thêm dòng này để chỉ định sử dụng phía client

import { useParams } from 'next/navigation';
import { FC } from 'react';

const LanguageSwitcher: FC = () => {
  const params = useParams();
  const locale = params.locale; // Lấy ngôn ngữ từ params (ví dụ: 'en', 'vi')

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    window.location.href = `/${newLocale}${window.location.pathname.substring(3)}`;
  };

  return (
    <div className="relative inline-block ">
      <select
        value={locale}
        onChange={handleLocaleChange}
        className="appearance-none block w-full p-1 mt-1 pr-8 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="en">🇬🇧 </option>
        <option value="vi">🇻🇳 </option>
        {/* Add other languages if needed */}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
