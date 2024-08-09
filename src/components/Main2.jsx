import React, { useState } from 'react';
import AnnouncementList from './AnnouncementList'; // Import the new AnnouncementList component
import PopUp from './Popup';

const Main = ({ announcements }) => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const handleClosePopUp = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <main className="px-6 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">الإعلانات</h1>
        <span className="bg-[#d4a02b] text-white px-4 py-2 rounded">القسم 1</span>
      </div>
      <AnnouncementList 
        announcements={announcements} 
        onAnnouncementClick={handleAnnouncementClick} 
      />
      {selectedAnnouncement && (
        <PopUp announcement={selectedAnnouncement} onClose={handleClosePopUp} />
      )}
    </main>
  );
};

export default Main;
