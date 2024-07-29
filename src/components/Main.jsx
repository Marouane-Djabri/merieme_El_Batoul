// // import React, { useState } from 'react';
// // import StudentList from './StudentList';
// // import PopUp from './Popup';

// // const Main = ({ students }) => {
// //   const [selectedStudent, setSelectedStudent] = useState(null);

// //   const handleStudentClick = (student) => {
// //     setSelectedStudent(student);
// //   };

// //   const handleClosePopUp = () => {
// //     setSelectedStudent(null);
// //   };

// //   return (
// //     <main className="px-6 py-4">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-bold text-gray-700">الطلاب</h1>
// //         <span className="bg-[#d4a02b] text-white px-4 py-2 rounded">القسم 1</span>
// //       </div>
// //       <StudentList students={students} onStudentClick={handleStudentClick} />
// //       <PopUp student={selectedStudent} onClose={handleClosePopUp} />
// //     </main>
// //   );
// // };

// // export default Main;
import React, { useState } from 'react';
import StudentList from './StudentList';
import PopUp from './Popup';
const Main = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleClosePopUp = () => {
    setSelectedStudent(null);
  };

  return (
    <main className="px-6 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">الطلاب</h1>
        <span className="bg-[#d4a02b] text-white px-4 py-2 rounded">القسم 1</span>
      </div>
      <StudentList students={students} onStudentClick={handleStudentClick} />
      {selectedStudent && <PopUp student={selectedStudent} onClose={handleClosePopUp} />}
    </main>
  );
};

export default Main;
// import React, { useState } from 'react';
// import StudentList from './StudentList';
// import PopUp from './Popup';

// const Main = ({ students }) => {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleStudentClick = (student) => {
//     setSelectedStudent(student);
//   };

//   const handleClosePopUp = () => {
//     setSelectedStudent(null);
//   };

//   return (
//     <main className="px-6 py-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-gray-700">الطلاب</h1>
//         <span className="bg-[#d4a02b] text-white px-4 py-2 rounded">القسم 1</span>
//       </div>
//       <StudentList students={students} onStudentClick={handleStudentClick} />
//       {selectedStudent && <PopUp student={selectedStudent} onClose={handleClosePopUp} />}
//     </main>
//   );
// };

// export default Main;
