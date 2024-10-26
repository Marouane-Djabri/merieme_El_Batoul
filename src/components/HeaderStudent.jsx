// Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderStudent = ({ toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("class"); // Default selected button is "class"

  const handleButtonClick = (button) => {
    setSelectedButton(button);
     if (button === "lessons") {
      navigate("/chooseclass");
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <nav className="flex space-x-4">
        <button
          onClick={() => handleButtonClick("class")}
          className={`px-4 py-2 rounded ${selectedButton === "class" ? "bg-[#d4a02b] text-white" : "text-gray-700"}`}
        >
           الدروس
        </button>
        <button
          onClick={() => handleButtonClick("lessons")}
          className={`px-4 py-2 rounded ${selectedButton === "lessons" ? "bg-[#d4a02b] text-white" : "text-gray-700"}`}
        >
          
         انتقال الى قسم آخر
       
        
        </button>
      </nav>
      <div className="flex items-center space-x-4">
        {/* Additional content here */}
      </div>
    </header>
  );
};

export default HeaderStudent;
