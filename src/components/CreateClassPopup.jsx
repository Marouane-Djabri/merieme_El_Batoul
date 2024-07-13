import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import PropTypes from 'prop-types';

const CreateClassPopup = ({ onClose, onClassCreated }) => {
  const [className, setClassName] = useState('');
  const [classDescription, setClassDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token found');

      const decodedToken = jwtDecode(token);
      const teacherId = decodedToken.userId;

      if (!teacherId) throw new Error('Invalid token: No user ID found');

      const payload = {
        teacherId,
        className,
        classDescription,
      };

      console.log('Sending data:', payload);

      const response = await axios.post('http://localhost:5000/api/classes', payload);
      onClassCreated(response.data);
      onClose();
    } catch (error) {
      console.error('Error creating class', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto overflow-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 text-3xl">&times;</button>
        </div>
        <div className="mb-8 text-center text-4xl font-bold text-gray-700">Create New Class</div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-lg">Class Name</label>
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full p-4 border rounded-lg text-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-lg">Class Description</label>
            <textarea
              value={classDescription}
              onChange={(e) => setClassDescription(e.target.value)}
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

CreateClassPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClassCreated: PropTypes.func.isRequired,
};

export default CreateClassPopup;
