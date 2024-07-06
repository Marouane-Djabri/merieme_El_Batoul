

// Chat.jsx
import React from 'react';

const messages = [
  {
    id: 1,
    time: 'اليوم 08:44 م',
    sender: 'مروه',
    senderRole: 'مدرس',
    message: 'السلام عليكم، سنبدأ اليوم على الساعة السابعة',
  },
  {
    id: 2,
    time: '',
    sender: 'مروه',
    senderRole: 'طالب',
    message: 'و عليكم السلام، حاضر',
  },
];

const Chat = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col space-y-4 p-4">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-2">
            {msg.time && (
              <div className="flex justify-center items-center">
                <span className="bg-gray-200 px-2 py-1 rounded">{msg.time}</span>
              </div>
            )}
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <span className="font-bold">{msg.sender}</span>
                <span className="text-sm text-gray-500">{msg.senderRole}</span>
              </div>
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 flex items-center">
        <input
          type="text"
          placeholder="اكتب رسالتك..."
          className="flex-1 border border-gray-300 rounded px-4 py-2"
        />
        <button className="ml-4 text-[#d4a02b]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
