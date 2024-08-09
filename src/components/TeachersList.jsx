import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/teachers');
      setTeachers(response.data);
      console.log("rrrrrrrrrrr");
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher._id !== id)); // Update state with filtered list
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teachers List</h1>
      {Array.isArray(teachers) && teachers.length > 0 ? (
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher._id} className="mb-4 p-4 border rounded shadow-sm">
              <p className="font-bold text-lg">{teacher.username}</p>
              {/* You can add files section here if needed */}
              <button
                onClick={() => deleteTeacher(teacher._id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
              >
                Delete Teacher
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No teachers available.</p>
      )}
    </div>
  );
};

export default TeachersList;
