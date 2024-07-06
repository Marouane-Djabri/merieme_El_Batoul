import React from 'react';

const StudentList = ({ students, onStudentClick }) => {
  return (
    <div className="space-y-4">
      {students.map((student, index) => (
        <div key={index} className="flex justify-between items-center p-4 bg-white shadow rounded">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
            onClick={() => onStudentClick(student)}
          >
            الكراس
          </button>
          <span className="text-gray-700">{student}</span>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
