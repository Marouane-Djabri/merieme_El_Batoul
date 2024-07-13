// import React, { useState, useEffect } from 'react';

// const PopUp = ({ student, onClose }) => {
//   const [visible, setVisible] = useState(false);
  
//   useEffect(() => {
//     if (student) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   }, [student]);

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
//         <table className="w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="border p-2">من</th>
//               <th className="border p-2">الى</th>
//               <th className="border p-2">التقدير</th>
//               <th className="border p-2">التقرير</th>
//             </tr>
//           </thead>
//           <tbody>
//             {student.notebooks.map((notebook, index) => (
//               <tr key={index}>
//                 <td className="border p-2">{notebook.from}</td>
//                 <td className="border p-2">{notebook.to}</td>
//                 <td className="border p-2">{notebook.grade}</td>
//                 <td className="border p-2">{notebook.report}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PopUp;
// // import React, { useState, useEffect } from 'react';

// const PopUp = ({ student, onClose }) => {
//   const [visible, setVisible] = useState(false);
  
//   useEffect(() => {
//     if (student) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   }, [student]);

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
//         {student.notebooks && student.notebooks.length > 0 ? (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr>
//                 <th className="border p-2">من</th>
//                 <th className="border p-2">الى</th>
//                 <th className="border p-2">التقدير</th>
//                 <th className="border p-2">التقرير</th>
//               </tr>
//             </thead>
//             <tbody>
//               {student.notebooks.map((notebook, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">{notebook.from}</td>
//                   <td className="border p-2">{notebook.to}</td>
//                   <td className="border p-2">{notebook.grade}</td>
//                   <td className="border p-2">{notebook.report}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="text-center text-gray-700">No notebooks available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopUp;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PopUp = ({ student, onClose }) => {
//   const [visible, setVisible] = useState(false);
//   const [notebooks, setNotebooks] = useState([]);
//   const [loading, setLoading] = useState(false);
  
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
//     try {
//       const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`);
//       setNotebooks(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching notebooks:', error);
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
//         ) : notebooks.length > 0 ? (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr>
//                 <th className="border p-2">من</th>
//                 <th className="border p-2">الى</th>
//                 <th className="border p-2">التقدير</th>
//                 <th className="border p-2">التقرير</th>
//               </tr>
//             </thead>
//             <tbody>
//               {notebooks.map((notebook, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">{notebook.from}</td>
//                   <td className="border p-2">{notebook.to}</td>
//                   <td className="border p-2">{notebook.grade}</td>
//                   <td className="border p-2">{notebook.report}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
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
    try {
      const response = await axios.get(`http://localhost:5000/api/students/${studentId}/notebooks`);
      setNotebooks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notebooks:', error);
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
        ) : notebooks.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">من</th>
                <th className="border p-2">الى</th>
                <th className="border p-2">التقدير</th>
                <th className="border p-2">التقرير</th>
              </tr>
            </thead>
            <tbody>
              {notebooks.map((notebook, index) => (
                <tr key={index}>
                  <td className="border p-2">{notebook.from}</td>
                  <td className="border p-2">{notebook.to}</td>
                  <td className="border p-2">{notebook.grade}</td>
                  <td className="border p-2">{notebook.report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-700">No notebooks available</div>
        )}
      </div>
    </div>
  );
};

export default PopUp;
