// import React from 'react';

// const StudentList = ({ students, onStudentClick }) => {
//   return (
//     <div>
//       {students.map((student, index) => (
//         <div key={index} className="cursor-pointer" onClick={() => onStudentClick(student)}>
//           {student.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StudentList;
// import React from 'react';
// import PropTypes from 'prop-types';

// const StudentList = ({ students }) => (
//   <div>
//     <h2>Students List</h2>
//     <ul>
//       {students.map((student, index) => (
//         <li key={index}>
//           {student ? student.name : 'Unknown Student'}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// StudentList.propTypes = {
//   students: PropTypes.array.isRequired,
// };

// export default StudentList;
import React from 'react';
import PropTypes from 'prop-types';

const StudentList = ({ students, onStudentClick }) => (
  <div>
    <h2>Students List</h2>
    <ul>
      {students.map((student, index) => (
        <li key={index} onClick={() => onStudentClick(student)}>
          {student ? student.username : 'Unknown Student'}
        </li>
      ))}
    </ul>
  </div>
);

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  onStudentClick: PropTypes.func.isRequired,
};

export default StudentList;
