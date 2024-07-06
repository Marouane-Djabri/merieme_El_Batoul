import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
        transition-transform duration-300 ease-in-out bg-[#d4a02b] w-64 py-8 text-white flex flex-col items-center z-50`}
    >
      <XMarkIcon className="w-6 h-6 mb-8 cursor-pointer" onClick={toggle} />
      <nav className="space-y-4 text-lg">
        {['قسم 1', 'قسم 2', 'قسم 3', 'قسم 4', 'قسم 5'].map((section, index) => (
          <a key={index} href="#" className="block">
            {section}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
