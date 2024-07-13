import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Sidebar from './Sidebar';
import Main from './Main'; // Assuming you have a Main component to display the students

const FetchClass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClassClick = async (classId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/classes/${classId}/students`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students', error);
    }
  };

  const handleClassCreated = (newClass) => {
    setClasses([...classes, newClass]);
  };

  useEffect(() => {
    const fetchClasses = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const decodedToken = jwtDecode(token);
        const teacherId = decodedToken.userId; // Assuming the teacher's ID is stored under 'userId' in the token

        try {
          const response = await axios.get(`http://localhost:5000/api/classes/${teacherId}`);
          setClasses(response.data);
        } catch (error) {
          console.error('Error fetching classes', error);
        }
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <Sidebar
        isOpen={isOpen}
        toggle={toggleSidebar}
        classes={classes}
        onClassClick={handleClassClick}
        onClassCreated={handleClassCreated}
      />
      <Main students={students} />
    </div>
  );
};

export default FetchClass;
