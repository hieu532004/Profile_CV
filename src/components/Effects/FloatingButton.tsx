"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import Link from "next/link";
import removeAccents from "remove-accents"; // Thư viện chuyển đổi không dấu

import botResponses from "@/botResponses";

const FloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState<string[]>([]);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const getVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log(availableVoices); // Kiểm tra danh sách giọng nói
      setVoices(availableVoices);
    };

    getVoices();
    window.speechSynthesis.onvoiceschanged = getVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const readText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "vi-VN"; // Đặt ngôn ngữ là tiếng Việt

    // Lựa chọn giọng nói tiếng Việt
    const voice = voices.find(v => v.lang === "vi-VN") || voices[0];
    utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const greetingTimeout = setTimeout(() => {
      if (showChatbot) {
        const greetingMessage = "Chào bạn! Mình là Hiếu, developer. Bạn cần giúp gì hôm nay?";
        setResponses(prev => [...prev, `🤖 ${greetingMessage}`]);
        readText(greetingMessage);
      }
    }, 2000);

    return () => clearTimeout(greetingTimeout);
  }, [showChatbot]);

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const normalizedMessage = removeAccents(message.trim().toLowerCase());

    const botResponse =
      botResponses[normalizedMessage] ||
      "Xin lỗi, mình không hiểu câu hỏi của bạn. Bạn có thể thử lại bằng tiếng Việt, tiếng Anh hoặc tiếng Hàn";

    setResponses(prevResponses => [
      ...prevResponses,
      `Bạn: ${message}`, // Cập nhật phản hồi của người dùng
      `🤖 ${botResponse}`, // Cập nhật phản hồi của bot
    ]);
    readText(botResponse);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-2">
      <div className="flex space-x-2">
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-green-500 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          {showChatbot ? "✖️" : "💬"}
        </button>
        <button
          onClick={toggleLinks}
          className="bg-blue-500 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          {isOpen ? "✖️" : "🔗"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-2">
          <Link href="https://github.com/Khanhlinh952001" className="bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
          <Link href="https://www.facebook.com/linh.vokhanh.395" className="bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          {/* <Link href="https://twitter.com" className="bg-blue-400 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" className="bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link> */}
          <Link href="https://instagram.com" className="bg-pink-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://tiktok.com" className="bg-black text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </Link>
        </div>
      )}

      {showChatbot && (
        <div className="absolute bottom-16 right-0 rounded-lg w-96 shadow-lg">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <p className="text-lg font-semibold">🤖 AI Chat Bot</p>
            </div>
            <button onClick={() => setShowChatbot(false)} className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="bg-white p-4 h-80 overflow-y-auto">
            {responses.map((response, index) => (
              <div key={index} className={`mb-2 flex ${response.startsWith("Bạn:") ? "justify-end" : "justify-start"}`}>
                <p className={`rounded-lg py-2 px-4 inline-block ${response.startsWith("Bạn:") ? "bg-gray-200 text-black" : "bg-blue-500 text-white"}`}>
                  {response}
                </p>
              </div>
            ))}

          </div>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập câu hỏi..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
