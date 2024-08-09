import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const CreateAnnoucementPopup = ({ onClose, onAnnouncementCreated, selectedClassId }) => {
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContent, setAnnouncementContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token found');

      const payload = {
        classId: selectedClassId,
        title: announcementTitle,
        content: announcementContent,
      };

      console.log('Sending data:', payload);

      const response = await axios.post(
        'http://localhost:5000/api/announcements',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onAnnouncementCreated(response.data);
      onClose();
    } catch (error) {
      console.error('Error creating announcement', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto overflow-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 text-3xl">&times;</button>
        </div>
        <div className="mb-8 text-center text-4xl font-bold text-gray-700">إنشاء إعلان</div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-lg">عنوان الإعلان</label>
            <input
              type="text"
              value={announcementTitle}
              onChange={(e) => setAnnouncementTitle(e.target.value)}
              className="w-full p-4 border rounded-lg text-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-lg">محتوى الإعلان</label>
            <textarea
              value={announcementContent}
              onChange={(e) => setAnnouncementContent(e.target.value)}
              className="w-full p-4 border rounded-lg text-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-[#d4a02b] text-white py-4 rounded-lg text-lg">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

CreateAnnoucementPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAnnouncementCreated: PropTypes.func.isRequired,
  selectedClassId: PropTypes.string.isRequired,
};

export default CreateAnnoucementPopup;
