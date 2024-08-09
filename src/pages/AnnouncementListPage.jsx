import React, { useState, useEffect } from 'react';
import Sidebar from '../components/SidbarAnnoucement';
import Header from '../components/Header';
import AnnouncementList from '../components/AnnouncementList';
import CreateAnnouncementPopup from '../components/CreateAnnoucementPopup';
import axios from 'axios';

export default function AnnouncementListPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      if (selectedClassId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/announcements/class/${selectedClassId}`);
          setAnnouncements(response.data);
        } catch (error) {
          console.error('Error fetching announcements:', error);
        }
      }
    };

    fetchAnnouncements();
  }, [selectedClassId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClassClick = (classId) => {
    setSelectedClassId(classId);
  };

  const handleOpenPopup = () => {
    if (selectedClassId) {
      setIsPopupOpen(true);
    } else {
      alert('Please select a class first.');
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDeleteAnnouncement = async (announcementId) => {
    try {
      await axios.delete(`http://localhost:5000/api/announcements/${announcementId}`);
      setAnnouncements((prev) => prev.filter(a => a._id !== announcementId));
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  const handleAnnouncementCreated = (newAnnouncement) => {
    setAnnouncements((prev) => [...prev, newAnnouncement]);
  };

  return (
    <div className="flex min-h-screen">
      <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <AnnouncementList announcements={announcements} onDelete={handleDeleteAnnouncement} />
      </div>
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggle={toggleSidebar} 
        classes={classes} 
        onClassClick={handleClassClick} 
        onOpenPopup={handleOpenPopup} // Pass the popup handler to the Sidebar
      />
      {isPopupOpen && (
        <CreateAnnouncementPopup
          onClose={handleClosePopup}
          onAnnouncementCreated={handleAnnouncementCreated}
          selectedClassId={selectedClassId} // Pass the selected class ID
        />
      )}
    </div>
  );
}
