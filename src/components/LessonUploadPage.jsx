// // // // import React, { useState, useEffect } from 'react';
// // // // import Sidebar from '../components/Sidebar';
// // // // import Header from '../components/Header';
 
// // // // import axios from 'axios';

// // // // export default function LessonUploadPage() {
// // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// // // //   const [classes, setClasses] = useState([]); // State for the list of classes
// // // //   const [selectedClassId, setSelectedClassId] = useState(null); // State for the selected class
// // // //   const [students, setStudents] = useState([]); // State for the list of enrolled students

// // // //   useEffect(() => {
// // // //     // Fetch the list of classes when the component mounts
// // // //     const fetchClasses = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:5000/api/classes');
// // // //         setClasses(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching classes:', error);
// // // //       }
// // // //     };

// // // //     fetchClasses();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     // Fetch the list of students enrolled in the selected class
// // // //     const fetchStudents = async () => {
// // // //       if (selectedClassId) {
// // // //         try {
// // // //           const response = await axios.get(`http://localhost:5000/api/enrollments/${selectedClassId}/students`);
// // // //           setStudents(response.data);
// // // //         } catch (error) {
// // // //           console.error('Error fetching students:', error);
// // // //         }
// // // //       }
// // // //     };

// // // //     fetchStudents();
// // // //   }, [selectedClassId]);

// // // //   const toggleSidebar = () => {
// // // //     setIsSidebarOpen(!isSidebarOpen);
// // // //   };

// // // //   const handleClassClick = (classId) => {
// // // //     setSelectedClassId(classId);
// // // //   };

// // // //   const handleClassCreated = (newClass) => {
// // // //     setClasses((prevClasses) => [...prevClasses, newClass]);
// // // //   };

// // // //   return (
// // // //     <div className="flex min-h-screen">
// // // //       <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
// // // //         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
       
// // // //       </div>
// // // //       <Sidebar 
// // // //         isOpen={isSidebarOpen} 
// // // //         toggle={toggleSidebar} 
// // // //         classes={classes} 
// // // //         onClassClick={handleClassClick} 
// // // //         onClassCreated={handleClassCreated} 
// // // //       />
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useState, useEffect } from 'react';
// // // import Sidebar from '../components/Sidebar';
// // // import Header from '../components/Header';
// // // import axios from 'axios';

// // // export default function LessonUploadPage() {
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// // //   const [classes, setClasses] = useState([]); // State for the list of classes
// // //   const [selectedClassId, setSelectedClassId] = useState(null); // State for the selected class
// // //   const [students, setStudents] = useState([]); // State for the list of enrolled students
// // //   const [lessonName, setLessonName] = useState('');
// // //   const [content, setContent] = useState('');
// // //   const [files, setFiles] = useState([]);

// // //   useEffect(() => {
// // //     // Fetch the list of classes when the component mounts
// // //     const fetchClasses = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:5000/api/classes');
// // //         setClasses(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching classes:', error);
// // //       }
// // //     };

// // //     fetchClasses();
// // //   }, []);

// // //   useEffect(() => {
// // //     // Fetch the list of students enrolled in the selected class
// // //     const fetchStudents = async () => {
// // //       if (selectedClassId) {
// // //         try {
// // //           const response = await axios.get(`http://localhost:5000/api/enrollments/${selectedClassId}/students`);
// // //           setStudents(response.data);
// // //         } catch (error) {
// // //           console.error('Error fetching students:', error);
// // //         }
// // //       }
// // //     };

// // //     fetchStudents();
// // //   }, [selectedClassId]);

// // //   const toggleSidebar = () => {
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   const handleClassClick = (classId) => {
// // //     setSelectedClassId(classId);
// // //   };

// // //   const handleClassCreated = (newClass) => {
// // //     setClasses((prevClasses) => [...prevClasses, newClass]);
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setFiles(e.target.files);
// // //   };

// // //   const handleLessonSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const formData = new FormData();
// // //     formData.append('classId', selectedClassId);
// // //     formData.append('lessonName', lessonName);
// // //     formData.append('content', content);

// // //     for (const file of files) {
// // //       formData.append('files', file);
// // //     }

// // //     try {
// // //       const response = await axios.post('http://localhost:5000/api/lessons', formData, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       });
// // //       console.log('Lesson created:', response.data);
// // //     } catch (error) {
// // //       console.error('Error creating lesson:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen">
// // //       <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
// // //         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
// // //         <div className="p-4">
// // //           <form onSubmit={handleLessonSubmit}>
// // //             <div>
// // //               <label className="block mb-2 text-sm font-bold text-gray-700">
// // //                 Lesson Name:
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 value={lessonName}
// // //                 onChange={(e) => setLessonName(e.target.value)}
// // //                 className="w-full p-2 border border-gray-300 rounded"
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block mb-2 text-sm font-bold text-gray-700">
// // //                 Content:
// // //               </label>
// // //               <textarea
// // //                 value={content}
// // //                 onChange={(e) => setContent(e.target.value)}
// // //                 className="w-full p-2 border border-gray-300 rounded"
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block mb-2 text-sm font-bold text-gray-700">
// // //                 Files:
// // //               </label>
// // //               <input
// // //                 type="file"
// // //                 multiple
// // //                 onChange={handleFileChange}
// // //                 className="w-full p-2 border border-gray-300 rounded"
// // //               />
// // //             </div>
// // //             <button
// // //               type="submit"
// // //               className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
// // //             >
// // //               Upload Lesson
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //       <Sidebar 
// // //         isOpen={isSidebarOpen} 
// // //         toggle={toggleSidebar} 
// // //         classes={classes} 
// // //         onClassClick={handleClassClick} 
// // //         onClassCreated={handleClassCreated} 
// // //       />
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect } from 'react';
// // import Sidebar from '../components/Sidebar';
// // import Header from '../components/Header';
// // import axios from 'axios';

// // export default function LessonUploadPage() {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// //   const [classes, setClasses] = useState([]); // State for the list of classes
// //   const [selectedClassId, setSelectedClassId] = useState(null); // State for the selected class
// //   const [students, setStudents] = useState([]); // State for the list of enrolled students
// //   const [lessonName, setLessonName] = useState('');
// //   const [content, setContent] = useState('');
// //   const [files, setFiles] = useState([]);
// //   const [lessons, setLessons] = useState([]); // State for the list of lessons

// //   useEffect(() => {
// //     // Fetch the list of classes when the component mounts
// //     const fetchClasses = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/classes');
// //         setClasses(response.data);
// //       } catch (error) {
// //         console.error('Error fetching classes:', error);
// //       }
// //     };

// //     fetchClasses();
// //   }, []);

// //   useEffect(() => {
// //     // Fetch the list of students enrolled in the selected class
// //     const fetchStudents = async () => {
// //       if (selectedClassId) {
// //         try {
// //           const response = await axios.get(`http://localhost:5000/api/enrollments/${selectedClassId}/students`);
// //           setStudents(response.data);
// //         } catch (error) {
// //           console.error('Error fetching students:', error);
// //         }
// //       }
// //     };

// //     fetchStudents();
// //   }, [selectedClassId]);

// //   useEffect(() => {
// //     // Fetch the list of lessons for the selected class
// //     const fetchLessons = async () => {
// //       if (selectedClassId) {
// //         try {
// //           const response = await axios.get(`http://localhost:5000/api/lessons/${selectedClassId}`);
// //           setLessons(response.data);
// //         } catch (error) {
// //           console.error('Error fetching lessons:', error);
// //         }
// //       }
// //     };

// //     fetchLessons();
// //   }, [selectedClassId]);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const handleClassClick = (classId) => {
// //     setSelectedClassId(classId);
// //   };

// //   const handleClassCreated = (newClass) => {
// //     setClasses((prevClasses) => [...prevClasses, newClass]);
// //   };

// //   const handleFileChange = (e) => {
// //     setFiles(e.target.files);
// //   };

// //   const handleLessonSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('classId', selectedClassId);
// //     formData.append('lessonName', lessonName);
// //     formData.append('content', content);

// //     for (const file of files) {
// //       formData.append('files', file);
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/lessons', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       console.log('Lesson created:', response.data);
// //       setLessons((prevLessons) => [...prevLessons, response.data]);
// //       setLessonName('');
// //       setContent('');
// //       setFiles([]);
// //     } catch (error) {
// //       console.error('Error creating lesson:', error);
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen">
// //       <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
// //         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
// //         <div className="p-4">
// //           <form onSubmit={handleLessonSubmit}>
// //             <div>
// //               <label className="block mb-2 text-sm font-bold text-gray-700">
// //                 Lesson Name:
// //               </label>
// //               <input
// //                 type="text"
// //                 value={lessonName}
// //                 onChange={(e) => setLessonName(e.target.value)}
// //                 className="w-full p-2 border border-gray-300 rounded"
// //               />
// //             </div>
// //             <div>
// //               <label className="block mb-2 text-sm font-bold text-gray-700">
// //                 Content:
// //               </label>
// //               <textarea
// //                 value={content}
// //                 onChange={(e) => setContent(e.target.value)}
// //                 className="w-full p-2 border border-gray-300 rounded"
// //               />
// //             </div>
// //             <div>
// //               <label className="block mb-2 text-sm font-bold text-gray-700">
// //                 Files:
// //               </label>
// //               <input
// //                 type="file"
// //                 multiple
// //                 onChange={handleFileChange}
// //                 className="w-full p-2 border border-gray-300 rounded"
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
// //             >
// //               Upload Lesson
// //             </button>
// //           </form>
// //           <div className="mt-8">
// //             <h2 className="text-xl font-bold text-gray-700 mb-4">Previous Lessons</h2>
// //             {lessons.length > 0 ? (
// //               <ul className="space-y-4">
// //                 {lessons.map((lesson) => (
// //                   <li key={lesson._id} className="bg-white p-4 rounded shadow">
// //                     <h3 className="text-lg font-semibold">{lesson.lessonName}</h3>
// //                     <p>{lesson.content}</p>
// //                     {lesson.files && lesson.files.length > 0 && (
// //                       <div className="mt-2">
// //                         <h4 className="font-semibold">Files:</h4>
// //                         <ul className="list-disc list-inside">
// //                           {lesson.files.map((file, index) => (
// //                             <li key={index}>
// //                               <a href={`http://localhost:5000/uploads/${lesson.lessonName}/${file}`} target="_blank" rel="noopener noreferrer">
// //                                 {file}
// //                               </a>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     )}
// //                   </li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p>No lessons available</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //       <Sidebar 
// //         isOpen={isSidebarOpen} 
// //         toggle={toggleSidebar} 
// //         classes={classes} 
// //         onClassClick={handleClassClick} 
// //         onClassCreated={handleClassCreated} 
// //       />
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import axios from 'axios';

// export default function LessonUploadPage() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [classes, setClasses] = useState([]); // State for the list of classes
//   const [selectedClassId, setSelectedClassId] = useState(null); // State for the selected class
//   const [students, setStudents] = useState([]); // State for the list of enrolled students
//   const [lessonName, setLessonName] = useState('');
//   const [content, setContent] = useState('');
//   const [files, setFiles] = useState([]);
//   const [lessons, setLessons] = useState([]); // State for the list of lessons

//   useEffect(() => {
//     // Fetch the list of classes when the component mounts
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
//     // Fetch the list of students enrolled in the selected class
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

//   useEffect(() => {
//     // Fetch the list of lessons for the selected class
//     const fetchLessons = async () => {
//       if (selectedClassId) {
//         try {
//           const response = await axios.get(`http://localhost:5000/api/lessons/${selectedClassId}`);
//           setLessons(response.data);
//         } catch (error) {
//           console.error('Error fetching lessons:', error);
//         }
//       }
//     };

//     fetchLessons();
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

//   const handleFileChange = (e) => {
//     setFiles(e.target.files);
//   };

//   const handleLessonSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('classId', selectedClassId);
//     formData.append('lessonName', lessonName);
//     formData.append('content', content);

//     for (const file of files) {
//       formData.append('files', file);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/lessons', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Lesson created:', response.data);
//       setLessons((prevLessons) => [...prevLessons, response.data]);
//       setLessonName('');
//       setContent('');
//       setFiles([]);
//     } catch (error) {
//       console.error('Error creating lesson:', error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
//         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//         <div className="p-4">
//           <form onSubmit={handleLessonSubmit}>
//             <div>
//               <label className="block mb-2 text-sm font-bold text-gray-700">
//                 Lesson Name:
//               </label>
//               <input
//                 type="text"
//                 value={lessonName}
//                 onChange={(e) => setLessonName(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-sm font-bold text-gray-700">
//                 Content:
//               </label>
//               <textarea
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-sm font-bold text-gray-700">
//                 Files:
//               </label>
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileChange}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//             >
//               Upload Lesson
//             </button>
//           </form>
//           <div className="mt-8">
//             <h2 className="text-xl font-bold text-gray-700 mb-4">Previous Lessons</h2>
//             {lessons.length > 0 ? (
//               <ul className="space-y-4">
//                 {lessons.map((lesson) => (
//                   <li key={lesson._id} className="bg-white p-4 rounded shadow">
//                     <h3 className="text-lg font-semibold">{lesson.lessonName}</h3>
//                     <p>{lesson.content}</p>
//                     {lesson.files && lesson.files.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="font-semibold">Files:</h4>
//                         <ul className="list-disc list-inside">
//                           {lesson.files.map((file, index) => (
//                             <li key={index}>
//                               <a href={`http://localhost:5000/uploads/${lesson.lessonName}/${file}`} target="_blank" rel="noopener noreferrer">
//                                 {file}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No lessons available</p>
//             )}
//           </div>
//         </div>
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
import axios from 'axios';

export default function LessonUploadPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [classes, setClasses] = useState([]); // State for the list of classes
  const [selectedClassId, setSelectedClassId] = useState(null); // State for the selected class
  const [students, setStudents] = useState([]); // State for the list of enrolled students
  const [lessonName, setLessonName] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const [lessons, setLessons] = useState([]); // State for the list of lessons

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

  useEffect(() => {
    // Fetch the list of lessons for the selected class
    const fetchLessons = async () => {
      if (selectedClassId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/lessons/${selectedClassId}`);
          setLessons(response.data);
        } catch (error) {
          console.error('Error fetching lessons:', error);
        }
      }
    };

    fetchLessons();
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

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleLessonSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('classId', selectedClassId);
    formData.append('lessonName', lessonName);
    formData.append('content', content);

    for (const file of files) {
      formData.append('files', file);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/lessons', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Lesson created:', response.data);
      setLessons((prevLessons) => [...prevLessons, response.data]);
      setLessonName('');
      setContent('');
      setFiles([]);
    } catch (error) {
      console.error('Error creating lesson:', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="p-4">
          <form onSubmit={handleLessonSubmit}>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Lesson Name:
              </label>
              <input
                type="text"
                value={lessonName}
                onChange={(e) => setLessonName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Content:
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Files:
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Upload Lesson
            </button>
          </form>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Previous Lessons</h2>
            {lessons.length > 0 ? (
              <ul className="space-y-4">
                {lessons.map((lesson) => (
                  <li key={lesson._id} className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold">{lesson.lessonName}</h3>
                    <p>{lesson.content}</p>
                    {lesson.files && lesson.files.length > 0 && (
                      <div className="mt-2">
                        <h4 className="font-semibold">Files:</h4>
                        <ul className="list-disc list-inside">
                          {lesson.files.map((file, index) => (
                            <li key={index}>
                            <a href={`http://localhost:5000/uploads/${lesson.lessonName}/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>

                               
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No lessons available</p>
            )}
          </div>
        </div>
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
