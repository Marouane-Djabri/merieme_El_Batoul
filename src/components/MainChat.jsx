// Main.jsx
import React from 'react';
import Chat from './Chat';
import Header from './Header';

const MainChat = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
         
        <span className="bg-[#d4a02b] text-white px-4 py-2 rounded">القسم 1</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Chat />
      </div>
    </main>
  );
};

export default MainChat;
