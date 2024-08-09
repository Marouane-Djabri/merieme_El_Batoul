import React, { useState } from 'react';
import axios from 'axios';

const CreateAnnouncement = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [classId, setClassId] = useState(''); // Assuming you select the class ID

  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');// Assuming token is stored in localStorage
    console.log("dddddddddddd");
    console.log(token);
    console.log(title);
    console.log( content);
    console.log(classId);
      const response = await axios.post(
        'http://localhost:5000/api/announcements',
        { title, content, classId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Announcement created successfully!');
      // Clear form fields
      setTitle('');
      setContent('');
      setClassId('');
    } catch (error) {
      console.error('Failed to create announcement:', error);
      alert('Error creating announcement');
    }
  };

  return (
    <div>
      <h2>Create Announcement</h2>
      <form onSubmit={handleCreateAnnouncement}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Class ID:</label>
          <input
            type="text"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Announcement</button>
      </form>
    </div>
  );
};

export default CreateAnnouncement;
