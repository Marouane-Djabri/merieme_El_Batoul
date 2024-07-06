// Header.jsx
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <nav className="flex space-x-4">
        <button className="text-gray-700">المحادثة</button>
        <button className="bg-[#d4a02b] text-white px-4 py-2 rounded">الطلاب</button>
      </nav>
      <div className="flex items-center space-x-4">
       
      </div>
      {!isSidebarOpen && <Bars3Icon className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />}
    </header>
  );
};

export default Header;
