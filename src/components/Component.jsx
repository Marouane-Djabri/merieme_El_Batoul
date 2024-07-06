import React, { useState } from 'react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';

 // Updated import for Heroicons v2

export default function Component() {
  const [students] = useState(['مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <nav className="flex space-x-4">
            <button className="text-gray-700">
              المحادثة
            </button>
            <button className="bg-[#d4a02b] text-white px-4 py-2 rounded">
              الطلاب
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-[#a05b1e] text-white px-4 py-2 rounded">
              اضافة طالب
            </button>
            <input type="search" placeholder="بحث" className="pl-8 py-2 border rounded" />
            <span className="text-gray-700">11 طالب</span>
          </div>
          {!isSidebarOpen && (
            <Bars3Icon className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
          )}
        </header>
        <main className="px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-700">الطلاب</h1>
            <span className="bg-[#d4a02b] text-white px-4 py-2 rounded">القسم 1</span>
          </div>
          <div className="space-y-4">
            {students.map((student, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-white shadow rounded">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                  الكراس
                </button>
                <span className="text-gray-700">{student}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
      {isSidebarOpen && (
        <div className="w-1/5 bg-[#d4a02b] flex flex-col items-center py-8 text-white">
          <XMarkIcon className="w-6 h-6 mb-8 cursor-pointer" onClick={toggleSidebar} />
          <nav className="space-y-4 text-lg">
            {['قسم 1', 'قسم 2', 'قسم 3', 'قسم 4', 'قسم 5'].map((section, index) => (
              <a key={index} href="#" className="block">
                {section}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}