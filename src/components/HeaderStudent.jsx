// Header.jsx
import React from 'react';
 

const HeaderStudent = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <nav className="flex space-x-4">
        <button className="text-gray-700">المحادثة</button>
        <button className="bg-[#d4a02b] text-white px-4 py-2 rounded">حفظي </button>
      </nav>
      <div className="flex items-center space-x-4">
       
      </div>
      
    </header>
  );
};

export default HeaderStudent;
