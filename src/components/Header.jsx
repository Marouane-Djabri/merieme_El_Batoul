// Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("students"); // Default selected button is "students"

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    if (button === "students") {
      navigate("/studentlist");
    } else if (button === "upload") {
      navigate("/upload");
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <nav className="flex space-x-4">
        <button
          onClick={() => handleButtonClick("students")}
          className={`px-4 py-2 rounded ${selectedButton === "students" ? "bg-[#d4a02b] text-white" : "text-gray-700"}`}
        >
          قائمة الطلاب
        </button>
        <button
          onClick={() => handleButtonClick("upload")}
          className={`px-4 py-2 rounded ${selectedButton === "upload" ? "bg-[#d4a02b] text-white" : "text-gray-700"}`}
        >
         الدروس
        </button>
      </nav>
      <div className="flex items-center space-x-4">
        {/* Additional content here */}
      </div>
      {!isSidebarOpen && <Bars3Icon className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />}
    </header>
  );
};

export default Header;
