// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import Main from '../components/Main';

// export default function StudentListPage() {
//   const [students] = useState(['مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي']);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [classes, setClasses] = useState([]); // Assuming you have a list of classes

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleClassClick = (classId) => {
//     console.log('Class clicked:', classId);
//     // Handle class click, e.g., navigate to class details page
//   };

//   const handleClassCreated = (newClass) => {
//     setClasses((prevClasses) => [...prevClasses, newClass]);
//   };

//   return (
//     <div className="flex min-h-screen">
//       <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
//         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//         <Main students={students} />
//       </div>
//       <Sidebar 
//         isOpen={isSidebarOpen} 
//         toggle={toggleSidebar} 
//         classes={classes} 
//         onClassClick={handleClassClick} 
//         onClassCreated={handleClassCreated} 
//       />
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Main from '../components/Main';
import axios from 'axios';

export default function StudentListPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [classes, setClasses] = useState([]); // State for the list of classes
  const [selectedClassId, setSelectedClassId] = useState(null); // State for the selected class
  const [students, setStudents] = useState([]); // State for the list of enrolled students

  useEffect(() => {
    // Fetch the list of classes when the component mounts
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
    // Fetch the list of students enrolled in the selected class
    const fetchStudents = async () => {
      if (selectedClassId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/enrollments/${selectedClassId}/students`);
          setStudents(response.data);
        } catch (error) {
          console.error('Error fetching students:', error);
        }
      }
    };

    fetchStudents();
  }, [selectedClassId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClassClick = (classId) => {
    setSelectedClassId(classId);
  };

  const handleClassCreated = (newClass) => {
    setClasses((prevClasses) => [...prevClasses, newClass]);
  };

  return (
    <div className="flex min-h-screen">
      <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Main students={students} />
      </div>
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggle={toggleSidebar} 
        classes={classes} 
        onClassClick={handleClassClick} 
        onClassCreated={handleClassCreated} 
      />
    </div>
  );
}
// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import Main from '../components/Main';
// import axios from 'axios';

// export default function StudentListPage() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [classes, setClasses] = useState([]);
//   const [selectedClassId, setSelectedClassId] = useState(null);
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/classes');
//         setClasses(response.data);
//       } catch (error) {
//         console.error('Error fetching classes:', error);
//       }
//     };

//     fetchClasses();
//   }, []);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (selectedClassId) {
//         try {
//           const response = await axios.get(`http://localhost:5000/api/enrollments/${selectedClassId}/students`);
//           setStudents(response.data);
//         } catch (error) {
//           console.error('Error fetching students:', error);
//         }
//       }
//     };

//     fetchStudents();
//   }, [selectedClassId]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleClassClick = (classId) => {
//     setSelectedClassId(classId);
//   };

//   const handleClassCreated = (newClass) => {
//     setClasses((prevClasses) => [...prevClasses, newClass]);
//   };

//   return (
//     <div className="flex min-h-screen">
//       <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
//         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//         <Main students={students} />
//       </div>
//       <Sidebar 
//         isOpen={isSidebarOpen} 
//         toggle={toggleSidebar} 
//         classes={classes} 
//         onClassClick={handleClassClick} 
//         onClassCreated={handleClassCreated} 
//       />
//     </div>
//   );
// }
