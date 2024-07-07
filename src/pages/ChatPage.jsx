import React, { useState } from 'react';
import MainChat from '../components/MainChat';
import Header from '../components/Header';

export default function ChatPage() {
    const [students] = useState(['مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي']);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className="App">
         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <header className="App-header">
        <MainChat />
      </header>
    </div>
  );
}

 
