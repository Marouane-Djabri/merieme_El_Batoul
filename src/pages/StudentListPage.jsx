import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Main from '../components/Main';

export default function StudentListPage() {
  const [students] = useState(['مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Main students={students} />
      </div>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
    </div>
  );
}