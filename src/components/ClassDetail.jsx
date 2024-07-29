// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import { jwtDecode } from "jwt-decode";
// // import HeaderStudent from './HeaderStudent';
// // const ClassDetail = () => {
// //   const { classId } = useParams();
// //   const [notes, setNotes] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchNotes = async () => {
// //       try {
// //         const token = localStorage.getItem('accessToken');
// //         if (!token) {
// //           throw new Error('No access token found');
// //         }

// //         const decodedToken = jwtDecode(token);
// //         const studentId = decodedToken.userId;
// //         console.log("Decoded Token:", decodedToken);
// //         console.log("Fetching notes with studentId:", studentId, "and classId:", classId);

// //         const response = await axios.get(`http://localhost:5000/api/notes/${classId}/${studentId}`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });

// //         console.log("API response:", response.data);

// //         setNotes(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching notes:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchNotes();
// //   }, [classId]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className="p-4">
// //         <HeaderStudent/>
      
// //       {  (
// //         <table className="w-full border-collapse table-auto">
// //           <thead>
// //             <tr className="bg-gray-200">
// //               <th className="border border-gray-300 p-2 text-right">التقدير</th>
// //               <th className="border border-gray-300 p-2 text-right"> الحفظ</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {notes.map(note => (
// //               <tr key={note._id}>
// //                 <td className="border border-gray-300 p-2 text-right">{note.mark.join(', ')}</td>
// //                 <td className="border border-gray-300 p-2 text-right">{note.content}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default ClassDetail;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import { jwtDecode } from "jwt-decode";// Correct the import here
// // import HeaderStudent from './HeaderStudent';

// // const ClassDetail = () => {
// //   const { classId } = useParams();
// //   const [notes, setNotes] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchNotes = async () => {
// //       try {
// //         const token = localStorage.getItem('accessToken');
// //         if (!token) {
// //           throw new Error('No access token found');
// //         }

// //         const decodedToken = jwtDecode(token);
// //         const studentId = decodedToken.userId;
// //         console.log("Decoded Token:", decodedToken);
// //         console.log("Fetching notes with studentId:", studentId, "and classId:", classId);

// //         const response = await axios.get(`http://localhost:5000/api/notes/${classId}/${studentId}`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });

// //         console.log("API response:", response.data);

// //         setNotes(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching notes:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchNotes();
// //   }, [classId]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className="p-4">
// //       <HeaderStudent />
// //       <table className="w-full border-collapse table-auto">
// //         <thead>
// //           <tr className="bg-gray-200">
// //             <th className="border border-gray-300 p-2 text-right">التقدير</th>
// //             <th className="border border-gray-300 p-2 text-right"> الحفظ</th>
// //           </tr>
// //         </thead>
// //         {/* <tbody>
// //           {notes.map(note => (
// //             <tr key={note._id}>
// //               <td className="border border-gray-300 p-2 text-right">
// //                 {Array.isArray(note.mark) ? note.mark.join(', ') : ''}
// //               </td>
// //               <td className="border border-gray-300 p-2 text-right">{note.content}</td>
// //             </tr>
// //           ))}
// //         </tbody> */}
// //          <tbody>
//                 {notes.map((notebook) => (
//                   <React.Fragment key={notebook._id}>
//                     {notes.mark.map((mark, index) => (
//                       <tr key={`${notes._id}-${index}`}>
//                         <td className="border p-2">{mark}</td>
//                         <td className="border p-2">{notes.content.split(' ')[index] || ''}</td>
//                       </tr>
//                     ))}
                    
                   
// //                   </React.Fragment>
// //                 ))}
// //               </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default ClassDetail;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { jwtDecode } from "jwt-decode";// Correct the import here// Corrected the import here
// import HeaderStudent from './HeaderStudent';

// const ClassDetail = () => {
//   const { classId } = useParams();
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const token = localStorage.getItem('accessToken');
//         if (!token) {
//           throw new Error('No access token found');
//         }

//         const decodedToken = jwtDecode(token);
//         const studentId = decodedToken.userId;
//         console.log("Decoded Token:", decodedToken);
//         console.log("Fetching notes with studentId:", studentId, "and classId:", classId);

//         const response = await axios.get(`http://localhost:5000/api/notes/${classId}/${studentId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         console.log("API response:", response.data);

//         setNotes(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching notes:', error);
//         setLoading(false);
//       }
//     };

//     fetchNotes();
//   }, [classId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <HeaderStudent />
//       <table className="w-full border-collapse table-auto">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 p-2 text-right">التقدير</th>
//             <th className="border border-gray-300 p-2 text-right">الحفظ</th>
//           </tr>
//         </thead>
//         <tbody>
//         {notes.map((notebook) => (
//                   <React.Fragment key={notebook._id}>
//                     {notebook.content.map((content, index) => (
//                       <tr key={`${notebook._id}-${index}`}>
//                         <td className="border p-2">{notebook.mark[index]}</td>
//                         <td className="border p-2">{content}</td>
//                       </tr>
//                     ))}
//                     <tr key={`update-${notebook._id}`}>
//                       <td colSpan="2" className="p-2">
//                       <tr key={`files-${notebook._id}`}>
//                 <td colSpan="2" className="p-2">
//                   {/* Display files related to the lesson below the table */}
//                   <div>
//                     <strong>Files:</strong>
//                     <div>
//                       {notebook.files && notebook.files.length > 0 ? (
//                         notebook.files.map((file, fileIndex) => (
//                           <div key={`${notebook._id}-file-${fileIndex}`}>
//                              {lesson.files.map((file, index) => (
//                             <li key={index}>
//                             <a href={`http://localhost:5000/uploads/${lesson.lessonName}/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>

                               
//                             </li>
//                           ))}
//                           </div>
//                         ))
//                       ) : (
//                         <div>No files available</div>
//                       )}
//                     </div>
//                   </div>
//                 </td>
//               </tr>
             
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClassDetail;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import HeaderStudent from './HeaderStudent';

const ClassDetail = () => {
  const { classId } = useParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          throw new Error('No access token found');
        }

        const decodedToken = jwtDecode(token);
        const studentId = decodedToken.userId;
        console.log("Decoded Token:", decodedToken);
        console.log("Fetching notes with studentId:", studentId, "and classId:", classId);

        const response = await axios.get(`http://localhost:5000/api/lessons/${classId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log("API response:", response.data);

        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
        setLoading(false);
      }
    };

    fetchNotes();
  }, [classId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <HeaderStudent />
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-right">التقدير</th>
            <th className="border border-gray-300 p-2 text-right">الحفظ</th>
          </tr>
        </thead>
        <tbody>
         {notes.map((notebook) => (
                  <React.Fragment key={notebook._id}>
                    {notebook.content.map((content, index) => (
                      <tr key={`${notebook._id}-${index}`}>
                        <td className="border p-2">{notebook.mark[index]}</td>
                        <td className="border p-2">{content}</td>
                      </tr>
                    ))}
        {/* <tbody> */}
          {/* {notes.map((notebook) => (
            <React.Fragment key={notebook._id}>
              {notebook.content.map((content, index) => (
                <tr key={`${notebook._id}-${index}`}>
                  <td className="border p-2">{notebook.mark[index]}</td>
                  <td className="border p-2">{content}</td>
                </tr>
              ))} */}
              <tr key={`files-${notebook._id}`}>
                <td colSpan="2" className="p-2">
                  {/* Display files related to the lesson below the table */}
                  <div>
                    <strong>Files:</strong>
                    <div>
                      {notebook.files && notebook.files.length > 0 ? (
                        notebook.files.map((file, fileIndex) => (
                          <div key={`${notebook._id}-file-${fileIndex}`}>
                             {lesson.files.map((file, index) => (
                            <li key={index}>
                            <a href={`http://localhost:5000/uploads/${lesson.lessonName}/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>

                               
                            </li>
                          ))}
                          </div>
                        ))
                      ) : (
                        <div>No files available</div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
              <tr key={`update-${notebook._id}`}>
                <td colSpan="2" className="p-2">
                  
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassDetail;
