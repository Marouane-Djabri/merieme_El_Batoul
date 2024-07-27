// // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // const PopUp = ({ student, onClose }) => {
// // // // // // // // //   const [visible, setVisible] = useState(false);
  
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (student) {
// // // // // // // // //       setVisible(true);
// // // // // // // // //     } else {
// // // // // // // // //       setVisible(false);
// // // // // // // // //     }
// // // // // // // // //   }, [student]);

// // // // // // // // //   if (!student) return null;

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // // // // // // //     >
// // // // // // // // //       <div
// // // // // // // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // // // // // // //       >
// // // // // // // // //         <div className="flex justify-end">
// // // // // // // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // // // // // // //         <table className="w-full border-collapse">
// // // // // // // // //           <thead>
// // // // // // // // //             <tr>
// // // // // // // // //               <th className="border p-2">من</th>
// // // // // // // // //               <th className="border p-2">الى</th>
// // // // // // // // //               <th className="border p-2">التقدير</th>
// // // // // // // // //               <th className="border p-2">التقرير</th>
// // // // // // // // //             </tr>
// // // // // // // // //           </thead>
// // // // // // // // //           <tbody>
// // // // // // // // //             {student.notebooks.map((notebook, index) => (
// // // // // // // // //               <tr key={index}>
// // // // // // // // //                 <td className="border p-2">{notebook.from}</td>
// // // // // // // // //                 <td className="border p-2">{notebook.to}</td>
// // // // // // // // //                 <td className="border p-2">{notebook.grade}</td>
// // // // // // // // //                 <td className="border p-2">{notebook.report}</td>
// // // // // // // // //               </tr>
// // // // // // // // //             ))}
// // // // // // // // //           </tbody>
// // // // // // // // //         </table>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PopUp;
// // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // const PopUp = ({ student, onClose }) => {
// // // // // // // // //   const [visible, setVisible] = useState(false);
  
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (student) {
// // // // // // // // //       setVisible(true);
// // // // // // // // //     } else {
// // // // // // // // //       setVisible(false);
// // // // // // // // //     }
// // // // // // // // //   }, [student]);

// // // // // // // // //   if (!student) return null;

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // // // // // // //     >
// // // // // // // // //       <div
// // // // // // // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // // // // // // //       >
// // // // // // // // //         <div className="flex justify-end">
// // // // // // // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // // // // // // //         {student.notebooks && student.notebooks.length > 0 ? (
// // // // // // // // //           <table className="w-full border-collapse">
// // // // // // // // //             <thead>
// // // // // // // // //               <tr>
// // // // // // // // //                 <th className="border p-2">من</th>
// // // // // // // // //                 <th className="border p-2">الى</th>
// // // // // // // // //                 <th className="border p-2">التقدير</th>
// // // // // // // // //                 <th className="border p-2">التقرير</th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>
// // // // // // // // //             <tbody>
// // // // // // // // //               {student.notebooks.map((notebook, index) => (
// // // // // // // // //                 <tr key={index}>
// // // // // // // // //                   <td className="border p-2">{notebook.from}</td>
// // // // // // // // //                   <td className="border p-2">{notebook.to}</td>
// // // // // // // // //                   <td className="border p-2">{notebook.grade}</td>
// // // // // // // // //                   <td className="border p-2">{notebook.report}</td>
// // // // // // // // //                 </tr>
// // // // // // // // //               ))}
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="text-center text-gray-700">No notebooks available</div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PopUp;
// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import axios from 'axios';

// // // // // // // // // const PopUp = ({ student, onClose }) => {
// // // // // // // // //   const [visible, setVisible] = useState(false);
// // // // // // // // //   const [notebooks, setNotebooks] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(false);
  
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (student) {
// // // // // // // // //       setVisible(true);
// // // // // // // // //       fetchNotebooks(student._id);
// // // // // // // // //     } else {
// // // // // // // // //       setVisible(false);
// // // // // // // // //     }
// // // // // // // // //   }, [student]);

// // // // // // // // //   const fetchNotebooks = async (studentId) => {
// // // // // // // // //     setLoading(true);
// // // // // // // // //     try {
// // // // // // // // //       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`);
// // // // // // // // //       setNotebooks(response.data);
// // // // // // // // //       setLoading(false);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Error fetching notebooks:', error);
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   if (!student) return null;

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // // // // // // //     >
// // // // // // // // //       <div
// // // // // // // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // // // // // // //       >
// // // // // // // // //         <div className="flex justify-end">
// // // // // // // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // // // // // // //         {loading ? (
// // // // // // // // //           <div className="text-center text-gray-700">Loading...</div>
// // // // // // // // //         ) : notebooks.length > 0 ? (
// // // // // // // // //           <table className="w-full border-collapse">
// // // // // // // // //             <thead>
// // // // // // // // //               <tr>
// // // // // // // // //                 <th className="border p-2">من</th>
// // // // // // // // //                 <th className="border p-2">الى</th>
// // // // // // // // //                 <th className="border p-2">التقدير</th>
// // // // // // // // //                 <th className="border p-2">التقرير</th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>
// // // // // // // // //             <tbody>
// // // // // // // // //               {notebooks.map((notebook, index) => (
// // // // // // // // //                 <tr key={index}>
// // // // // // // // //                   <td className="border p-2">{notebook.from}</td>
// // // // // // // // //                   <td className="border p-2">{notebook.to}</td>
// // // // // // // // //                   <td className="border p-2">{notebook.grade}</td>
// // // // // // // // //                   <td className="border p-2">{notebook.report}</td>
// // // // // // // // //                 </tr>
// // // // // // // // //               ))}
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="text-center text-gray-700">No notebooks available</div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PopUp;
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import axios from 'axios';

// // // // // // // // const PopUp = ({ student, onClose }) => {
// // // // // // // //   const [visible, setVisible] = useState(false);
// // // // // // // //   const [notebooks, setNotebooks] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(false);
  
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (student) {
// // // // // // // //       setVisible(true);
// // // // // // // //       fetchNotebooks(student._id);
// // // // // // // //     } else {
// // // // // // // //       setVisible(false);
// // // // // // // //     }
// // // // // // // //   }, [student]);

// // // // // // // //   const fetchNotebooks = async (studentId) => {
// // // // // // // //     setLoading(true);
// // // // // // // //     try {
// // // // // // // //       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`);
// // // // // // // //       setNotebooks(response.data);
// // // // // // // //       setLoading(false);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error fetching notebooks:', error);
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (!student) return null;

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // // // // // //     >
// // // // // // // //       <div
// // // // // // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // // // // // //       >
// // // // // // // //         <div className="flex justify-end">
// // // // // // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // // // // // //         </div>
// // // // // // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // // // // // //         {loading ? (
// // // // // // // //           <div className="text-center text-gray-700">Loading...</div>
// // // // // // // //         ) : notebooks.length > 0 ? (
// // // // // // // //           <table className="w-full border-collapse">
// // // // // // // //             <thead>
// // // // // // // //               <tr>
// // // // // // // //                 <th className="border p-2">من</th>
// // // // // // // //                 <th className="border p-2">الى</th>
// // // // // // // //                 <th className="border p-2">التقدير</th>
// // // // // // // //                 <th className="border p-2">التقرير</th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>
// // // // // // // //             <tbody>
// // // // // // // //               {notebooks.map((notebook, index) => (
// // // // // // // //                 <tr key={index}>
// // // // // // // //                   <td className="border p-2">{notebook.from}</td>
// // // // // // // //                   <td className="border p-2">{notebook.to}</td>
// // // // // // // //                   <td className="border p-2">{notebook.grade}</td>
// // // // // // // //                   <td className="border p-2">{notebook.report}</td>
// // // // // // // //                 </tr>
// // // // // // // //               ))}
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         ) : (
// // // // // // // //           <div className="text-center text-gray-700">No notebooks available</div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PopUp;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import axios from 'axios';

// // // // // // // const PopUp = ({ student, onClose }) => {
// // // // // // //   const [visible, setVisible] = useState(false);
// // // // // // //   const [notebooks, setNotebooks] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(false);
  
// // // // // // //   useEffect(() => {
// // // // // // //     if (student) {
// // // // // // //       setVisible(true);
// // // // // // //       fetchNotebooks(student._id);
// // // // // // //     } else {
// // // // // // //       setVisible(false);
// // // // // // //     }
// // // // // // //   }, [student]);

// // // // // // //   const fetchNotebooks = async (studentId) => {
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const token = localStorage.getItem('accessToken');
// // // // // // //       console.log(`Fetching notebooks for studentId: ${studentId}`);
// // // // // // //       const response = await axios.get(`http://localhost:5000/api/notes/${studentId}/notebooks`,{
// // // // // // //         headers: {
// // // // // // //           Authorization: `Bearer ${token}`
// // // // // // //         }
// // // // // // //       });
// // // // // // //       console.log('Fetched notebooks:', response.data);
// // // // // // //       setNotebooks(response.data);
// // // // // // //       setLoading(false);
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error fetching notebooks:', error);
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (!student) return null;

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // // // // //     >
// // // // // // //       <div
// // // // // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // // // // //       >
// // // // // // //         <div className="flex justify-end">
// // // // // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // // // // //         </div>
// // // // // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // // // // //         {loading ? (
// // // // // // //           <div className="text-center text-gray-700">Loading...</div>
// // // // // // //         ) : notebooks.length > 0 ? (
// // // // // // //           <table className="w-full border-collapse">
// // // // // // //             <thead>
// // // // // // //               <tr>
// // // // // // //                 <th className="border p-2">من</th>
// // // // // // //                 <th className="border p-2">الى</th>
// // // // // // //                 <th className="border p-2">التقدير</th>
// // // // // // //                 <th className="border p-2">التقرير</th>
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody>
// // // // // // //               {notebooks.map((notebook, index) => (
// // // // // // //                 <tr key={index}>
// // // // // // //                   <td className="border p-2">{notebook.from}</td>
// // // // // // //                   <td className="border p-2">{notebook.to}</td>
// // // // // // //                   <td className="border p-2">{notebook.grade}</td>
// // // // // // //                   <td className="border p-2">{notebook.report}</td>
// // // // // // //                 </tr>
// // // // // // //               ))}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         ) : (
// // // // // // //           <div className="text-center text-gray-700">No notebooks available</div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PopUp;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const PopUp = ({ student, onClose }) => {
// // // // // //   const [visible, setVisible] = useState(false);
// // // // // //   const [notebooks, setNotebooks] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     if (student) {
// // // // // //       setVisible(true);
// // // // // //       fetchNotebooks(student._id);
// // // // // //     } else {
// // // // // //       setVisible(false);
// // // // // //     }
// // // // // //   }, [student]);

// // // // // //   const fetchNotebooks = async (studentId) => 
// // // // // //   {
// // // // // //     setLoading(true);
// // // // // //     setError(null);
// // // // // //     try {
// // // // // //       const token = localStorage.getItem('accessToken');
// // // // // //       console.log(`Fetching notebooks for studentId: ${studentId}`);
// // // // // //       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`, {
// // // // // //         headers: 
// // // // // //         {
// // // // // //           Authorization: `Bearer ${token}`,
// // // // // //         },
// // // // // //       });
// // // // // //       console.log('Fetched notebooks:', response.data);
// // // // // //       setNotebooks(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching notebooks:', error);
// // // // // //       setError('Failed to fetch notebooks. Please try again later.');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!student) return null;

// // // // // //   return (
// // // // // //     <div
// // // // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // // // //     >
// // // // // //       <div
// // // // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // // // //       >
// // // // // //         <div className="flex justify-end">
// // // // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // // // //         </div>
// // // // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // // // //         {loading ? (
// // // // // //           <div className="text-center text-gray-700">Loading...</div>
// // // // // //         ) : error ? (
// // // // // //           <div className="text-center text-red-500">{error}</div>
// // // // // //         ) : notebooks.length > 0 ? (
// // // // // //           // <table className="w-full border-collapse">
// // // // // //           //   <thead>
// // // // // //           //     <tr>
// // // // // //           //       <th className="border p-2">من</th>
// // // // // //           //       <th className="border p-2">الى</th>
// // // // // //           //       <th className="border p-2">التقدير</th>
// // // // // //           //       <th className="border p-2">التقرير</th>
// // // // // //           //     </tr>
// // // // // //           //   </thead>
// // // // // //           //   <tbody>
// // // // // //           //     {notebooks.map((notebook, index) => (
// // // // // //           //       <tr key={index}>
// // // // // //           //         <td className="border p-2">{notebook.from}</td>
// // // // // //           //         <td className="border p-2">{notebook.to}</td>
// // // // // //           //         <td className="border p-2">{notebook.grade}</td>
// // // // // //           //         <td className="border p-2">{notebook.report}</td>
// // // // // //           //       </tr>
// // // // // //           //     ))}
// // // // // //           //   </tbody>
// // // // // //           // </table>
// // // // // //           <table className="w-full border-collapse table-auto">
// // // // // //         <thead>
// // // // // //           <tr className="bg-gray-200">
// // // // // //             <th className="border border-gray-300 p-2 text-right">التقدير</th>
// // // // // //             <th className="border border-gray-300 p-2 text-right"> الحفظ</th>
// // // // // //           </tr>
// // // // // //         </thead>
// // // // // //         <tbody>
// // // // // //           {notes.map(note => (
// // // // // //             <tr key={note._id}>
// // // // // //               <td className="border border-gray-300 p-2 text-right">
// // // // // //                 {Array.isArray(note.mark) ? note.mark.join(', ') : ''}
// // // // // //               </td>
// // // // // //               <td className="border border-gray-300 p-2 text-right">{note.content}</td>
// // // // // //             </tr>
// // // // // //           ))}
// // // // // //         </tbody>
// // // // // //       </table>

// // // // // //         ) : (
// // // // // //           <div className="text-center text-gray-700">No notebooks available</div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PopUp;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';

// // // // // const PopUp = ({ student, onClose }) => {
// // // // //   const [visible, setVisible] = useState(false);
// // // // //   const [notebooks, setNotebooks] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     if (student) {
// // // // //       setVisible(true);
// // // // //       fetchNotebooks(student._id);
// // // // //     } else {
// // // // //       setVisible(false);
// // // // //     }
// // // // //   }, [student]);

// // // // //   const fetchNotebooks = async (studentId) => {
// // // // //     setLoading(true);
// // // // //     setError(null);
// // // // //     try {
// // // // //       const token = localStorage.getItem('accessToken');
// // // // //       console.log(`Fetching notebooks for studentId: ${studentId}`);
// // // // //       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`, {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //       });
// // // // //       console.log('Fetched notebooks:', response.data);
// // // // //       setNotebooks(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching notebooks:', error);
// // // // //       setError('Failed to fetch notebooks. Please try again later.');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   if (!student) return null;

// // // // //   return (
// // // // //     <div
// // // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // // //     >
// // // // //       <div
// // // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // // //       >
// // // // //         <div className="flex justify-end">
// // // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // // //         </div>
// // // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // // //         {loading ? (
// // // // //           <div className="text-center text-gray-700">Loading...</div>
// // // // //         ) : error ? (
// // // // //           <div className="text-center text-red-500">{error}</div>
// // // // //         ) : notebooks.length > 0 ? (
// // // // //           <table className="w-full border-collapse">
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th className="border p-2">العلامة</th>
// // // // //                 <th className="border p-2">المحتوى</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {notebooks.map((notebook, index) => (
// // // // //                 <tr key={index}>
// // // // //                   <td className="border p-2">{notebook.grade}</td>
// // // // //                   <td className="border p-2">{notebook.report}</td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         ) : (
// // // // //           <div className="text-center text-gray-700">No notebooks available</div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PopUp;
// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // const PopUp = ({ student, onClose }) => {
// // // //   const [visible, setVisible] = useState(false);
// // // //   const [notebooks, setNotebooks] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     if (student) {
// // // //       setVisible(true);
// // // //       fetchNotebooks(student._id);
// // // //     } else {
// // // //       setVisible(false);
// // // //     }
// // // //   }, [student]);

// // // //   const fetchNotebooks = async (studentId) => {
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     try {
// // // //       const token = localStorage.getItem('accessToken');
// // // //       console.log(`Fetching notebooks for studentId: ${studentId}`);
// // // //       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });
// // // //       console.log('Fetched notebooks:', response.data);
// // // //       setNotebooks(response.data);
// // // //     } catch (error) {
// // // //       console.error('Error fetching notebooks:', error);
// // // //       setError('Failed to fetch notebooks. Please try again later.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   if (!student) return null;

// // // //   return (
// // // //     <div
// // // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // // //     >
// // // //       <div
// // // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // // //       >
// // // //         <div className="flex justify-end">
// // // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // // //         </div>
// // // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // // //         {loading ? (
// // // //           <div className="text-center text-gray-700">Loading...</div>
// // // //         ) : error ? (
// // // //           <div className="text-center text-red-500">{error}</div>
// // // //         ) : notebooks.length > 0 ? (
// // // //           <table className="w-full border-collapse">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th className="border p-2">العلامة</th>
// // // //                 <th className="border p-2">المحتوى</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {notebooks.map((notebook, index) => (
// // // //                 <tr key={index}>
// // // //                   <td className="border p-2">{notebook.mark.join(', ')}</td>
// // // //                   <td className="border p-2">{notebook.content}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         ) : (
// // // //           <div className="text-center text-gray-700">No notebooks available</div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PopUp;
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const PopUp = ({ student, onClose }) => {
// // //   const [visible, setVisible] = useState(false);
// // //   const [notebooks, setNotebooks] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [newContent, setNewContent] = useState('');
// // //   const [newMark, setNewMark] = useState('');

// // //   useEffect(() => {
// // //     if (student) {
// // //       setVisible(true);
// // //       fetchNotebooks(student._id);
// // //     } else {
// // //       setVisible(false);
// // //     }
// // //   }, [student]);

// // //   const fetchNotebooks = async (studentId) => {
// // //     setLoading(true);
// // //     setError(null);
// // //     try {
// // //       const token = localStorage.getItem('accessToken');
// // //       console.log(`Fetching notebooks for studentId: ${studentId}`);
// // //       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });
// // //       console.log('Fetched notebooks:', response.data);
// // //       setNotebooks(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching notebooks:', error);
// // //       setError('Failed to fetch notebooks. Please try again later.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleUpdate = async (id) => {
// // //     setLoading(true);
// // //     setError(null);
// // //     try {
// // //       const token = localStorage.getItem('accessToken');
// // //       const response = await axios.put(
// // //         `http://localhost:5000/api/notes/${id}`,
// // //         { content: newContent, mark: newMark },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );
// // //       console.log('Updated note:', response.data);
// // //       // Update notebooks state with the updated note
// // //       setNotebooks((prevNotebooks) =>
// // //         prevNotebooks.map((notebook) =>
// // //           notebook._id === id ? response.data : notebook
// // //         )
// // //       );
// // //       setNewContent('');
// // //       setNewMark('');
// // //     } catch (error) {
// // //       console.error('Error updating note:', error);
// // //       setError('Failed to update note. Please try again later.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (!student) return null;

// // //   return (
// // //     <div
// // //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// // //     >
// // //       <div
// // //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// // //       >
// // //         <div className="flex justify-end">
// // //           <button onClick={onClose} className="text-gray-500">&times;</button>
// // //         </div>
// // //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// // //         {loading ? (
// // //           <div className="text-center text-gray-700">Loading...</div>
// // //         ) : error ? (
// // //           <div className="text-center text-red-500">{error}</div>
// // //         ) : notebooks.length > 0 ? (
// // //           <>
// // //             <table className="w-full border-collapse mb-4">
// // //               <thead>
// // //                 <tr>
// // //                   <th className="border p-2">العلامة</th>
// // //                   <th className="border p-2">المحتوى</th>
// // //                   <th className="border p-2">إجراءات</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {notebooks.map((notebook, index) => (
// // //                   <tr key={index}>
// // //                     <td className="border p-2">{notebook.mark.join(', ')}</td>
// // //                     <td className="border p-2">{notebook.content}</td>
// // //                     <td className="border p-2">
// // //                       <button
// // //                         onClick={() => handleUpdate(notebook._id)}
// // //                         className="bg-blue-500 text-white px-2 py-1 rounded"
// // //                       >
// // //                         تحديث
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //             <div className="mb-4">
// // //               <label className="block mb-2 text-sm font-bold text-gray-700">المحتوى الجديد:</label>
// // //               <input
// // //                 type="text"
// // //                 value={newContent}
// // //                 onChange={(e) => setNewContent(e.target.value)}
// // //                 className="w-full p-2 border border-gray-300 rounded"
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block mb-2 text-sm font-bold text-gray-700">العلامة الجديدة:</label>
// // //               <input
// // //                 type="text"
// // //                 value={newMark}
// // //                 onChange={(e) => setNewMark(e.target.value)}
// // //                 className="w-full p-2 border border-gray-300 rounded"
// // //               />
// // //             </div>
// // //           </>
// // //         ) : (
// // //           <div className="text-center text-gray-700">No notebooks available</div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PopUp;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const PopUp = ({ student, onClose }) => {
// //   const [visible, setVisible] = useState(false);
// //   const [notebooks, setNotebooks] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [newContent, setNewContent] = useState('');
// //   const [newMark, setNewMark] = useState('');

// //   useEffect(() => {
// //     if (student) {
// //       setVisible(true);
// //       fetchNotebooks(student._id);
// //     } else {
// //       setVisible(false);
// //     }
// //   }, [student]);

// //   const fetchNotebooks = async (studentId) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const token = localStorage.getItem('accessToken');
// //       console.log(`Fetching notebooks for studentId: ${studentId}`);
// //       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       console.log('Fetched notebooks:', response.data);
// //       setNotebooks(response.data);
// //     } catch (error) {
// //       console.error('Error fetching notebooks:', error);
// //       setError('Failed to fetch notebooks. Please try again later.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleUpdate = async (id) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const token = localStorage.getItem('accessToken');
// //       const response = await axios.put(
// //         `http://localhost:5000/api/notes/${id}`,
// //         { content: newContent, mark: newMark },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );
// //       console.log('Updated note:', response.data);
// //       // Update notebooks state with the updated note
// //       setNotebooks((prevNotebooks) =>
// //         prevNotebooks.map((notebook) =>
// //           notebook._id === id ? response.data : notebook
// //         )
// //       );
// //       setNewContent('');
// //       setNewMark('');
// //     } catch (error) {
// //       console.error('Error updating note:', error);
// //       setError('Failed to update note. Please try again later.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (!student) return null;

// //   return (
// //     <div
// //       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
// //     >
// //       <div
// //         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
// //       >
// //         <div className="flex justify-end">
// //           <button onClick={onClose} className="text-gray-500">&times;</button>
// //         </div>
// //         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
// //         {loading ? (
// //           <div className="text-center text-gray-700">Loading...</div>
// //         ) : error ? (
// //           <div className="text-center text-red-500">{error}</div>
// //         ) : notebooks.length > 0 ? (
// //           <>
// //             <table className="w-full border-collapse mb-4">
// //               <thead>
// //                 <tr>
// //                   <th className="border p-2">العلامة</th>
// //                   <th className="border p-2">المحتوى</th>
// //                   <th className="border p-2">إجراءات</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {notebooks.map((notebook, index) => (
// //                   <tr key={index}>
// //                     <td className="border p-2">
// //                       {notebook.mark.map((mark, i) => (
// //                         <div key={i}>{mark}</div>
// //                       ))}
// //                     </td>
// //                     <td className="border p-2">
// //                       {notebook.content.split(' ').map((remark, i) => (
// //                         <div key={i}>{remark}</div>
// //                       ))}
// //                     </td>
// //                     <td className="border p-2">
// //                       <button
// //                         onClick={() => handleUpdate(notebook._id)}
// //                         className="bg-blue-500 text-white px-2 py-1 rounded"
// //                       >
// //                         تحديث
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //             <div className="mb-4">
// //               <label className="block mb-2 text-sm font-bold text-gray-700">المحتوى الجديد:</label>
// //               <input
// //                 type="text"
// //                 value={newContent}
// //                 onChange={(e) => setNewContent(e.target.value)}
// //                 className="w-full p-2 border border-gray-300 rounded"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block mb-2 text-sm font-bold text-gray-700">العلامة الجديدة:</label>
// //               <input
// //                 type="text"
// //                 value={newMark}
// //                 onChange={(e) => setNewMark(e.target.value)}
// //                 className="w-full p-2 border border-gray-300 rounded"
// //               />
// //             </div>
// //           </>
// //         ) : (
// //           <div className="text-center text-gray-700">No notebooks available</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PopUp;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PopUp = ({ student, onClose }) => {
//   const [visible, setVisible] = useState(false);
//   const [notebooks, setNotebooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [newContent, setNewContent] = useState('');
//   const [newMark, setNewMark] = useState('');

//   useEffect(() => {
//     if (student) {
//       setVisible(true);
//       fetchNotebooks(student._id);
//     } else {
//       setVisible(false);
//     }
//   }, [student]);

//   const fetchNotebooks = async (studentId) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const token = localStorage.getItem('accessToken');
//       console.log(`Fetching notebooks for studentId: ${studentId}`);
//       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('Fetched notebooks:', response.data);
//       setNotebooks(response.data);
//     } catch (error) {
//       console.error('Error fetching notebooks:', error);
//       setError('Failed to fetch notebooks. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdate = async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const token = localStorage.getItem('accessToken');
//       const response = await axios.put(
//         `http://localhost:5000/api/notes/${id}`,
//         { content: newContent, mark: newMark },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log('Updated note:', response.data);
//       // Update notebooks state with the updated note
//       setNotebooks((prevNotebooks) =>
//         prevNotebooks.map((notebook) =>
//           notebook._id === id ? response.data : notebook
//         )
//       );
//       setNewContent('');
//       setNewMark('');
//     } catch (error) {
//       console.error('Error updating note:', error);
//       setError('Failed to update note. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!student) return null;

//   return (
//     <div
//       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
//     >
//       <div
//         className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
//       >
//         <div className="flex justify-end">
//           <button onClick={onClose} className="text-gray-500">&times;</button>
//         </div>
//         <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
//         {loading ? (
//           <div className="text-center text-gray-700">Loading...</div>
//         ) : error ? (
//           <div className="text-center text-red-500">{error}</div>
//         ) : notebooks.length > 0 ? (
//           <>
//             <table className="w-full border-collapse mb-4">
//               <thead>
//                 <tr>
//                   <th className="border p-2">العلامة</th>
//                   <th className="border p-2">المحتوى</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {notebooks.map((notebook, notebookIndex) => (
//                   <>
//                     {notebook.mark.map((mark, markIndex) => (
//                       <tr key={`${notebookIndex}-${markIndex}`}>
//                         <td className="border p-2">{mark}</td>
//                         <td className="border p-2">{notebook.content.split(' ')[markIndex] || ''}</td>
//                       </tr>
//                     ))}
//                     {/* <tr>
//                       <td colSpan="2">
//                         <button
//                           onClick={() => handleUpdate(notebook._id)}
//                           className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
//                         >
//                           تحديث
//                         </button>
//                       </td>
//                     </tr> */}
//                     <tr>
//                       <td colSpan="2">
//                         <hr />
//                       </td>
//                     </tr>
//                   </>
//                 ))}
//               </tbody>
//             </table>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-bold text-gray-700">المحتوى الجديد:</label>
//               <input
//                 type="text"
//                 value={newContent}
//                 onChange={(e) => setNewContent(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-bold text-gray-700">العلامة الجديدة:</label>
//               <input
//                 type="text"
//                 value={newMark}
//                 onChange={(e) => setNewMark(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <tr>
//                       <td colSpan="2">
//                         <button
//                           onClick={() => handleUpdate(notebook._id)}
//                           className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
//                         >
//                           تحديث
//                         </button>
//                       </td>
//                     </tr>
//           </>
//         ) : (
//           <div className="text-center text-gray-700">No notebooks available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopUp;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopUp = ({ student, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [notebooks, setNotebooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newContent, setNewContent] = useState('');
  const [newMark, setNewMark] = useState('');

  useEffect(() => {
    if (student) {
      setVisible(true);
      fetchNotebooks(student._id);
    } else {
      setVisible(false);
    }
  }, [student]);

  const fetchNotebooks = async (studentId) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('accessToken');
      console.log(`Fetching notebooks for studentId: ${studentId}`);
      const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Fetched notebooks:', response.data);
      setNotebooks(response.data);
    } catch (error) {
      console.error('Error fetching notebooks:', error);
      setError('Failed to fetch notebooks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.put(
        `http://localhost:5000/api/notes/${id}`,
        { content: newContent, mark: newMark },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Updated note:', response.data);
      // Update notebooks state with the updated note
      setNotebooks((prevNotebooks) =>
        prevNotebooks.map((notebook) =>
          notebook._id === id ? response.data : notebook
        )
      );
      setNewContent('');
      setNewMark('');
    } catch (error) {
      console.error('Error updating note:', error);
      setError('Failed to update note. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!student) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`bg-white p-6 rounded shadow-lg w-2/3 transform transition-transform duration-300 ease-in-out ${visible ? 'scale-100' : 'scale-75'}`}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500">&times;</button>
        </div>
        <div className="mb-4 text-center text-2xl font-bold text-gray-700">{student.name}</div>
        {loading ? (
          <div className="text-center text-gray-700">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : notebooks.length > 0 ? (
          <>
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="border p-2">العلامة</th>
                  <th className="border p-2">المحتوى</th>
                </tr>
              </thead>
              <tbody>
                {notebooks.map((notebook) => (
                  <React.Fragment key={notebook._id}>
                    {notebook.mark.map((mark, index) => (
                      <tr key={`${notebook._id}-${index}`}>
                        <td className="border p-2">{mark}</td>
                        <td className="border p-2">{notebook.content.split(' ')[index] || ''}</td>
                      </tr>
                    ))}
                    <tr key={`update-${notebook._id}`}>
                      <td colSpan="2" className="p-2">
                        <button
                          onClick={() => handleUpdate(notebook._id)}
                          className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
                        >
                          تحديث
                        </button>
                      </td>
                    </tr>
                   
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">المحتوى الجديد:</label>
              <input
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">العلامة الجديدة:</label>
              <input
                type="text"
                value={newMark}
                onChange={(e) => setNewMark(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </>
        ) : (
          <div className="text-center text-gray-700">No notebooks available</div>
        )}
      </div>
    </div>
  );
};

export default PopUp;
