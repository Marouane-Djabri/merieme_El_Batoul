import React, { useState, useEffect } from 'react';

const PopUp = ({ student, onClose }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (student) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [student]);

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
        <div className="mb-4 text-center text-2xl font-bold text-gray-700">الطلب</div>
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
            <tr>
              <td className="border p-2">
                <input
                  type="text"
                  name="from"
                  className="w-full p-1"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  name="to"
                  className="w-full p-1"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  name="grade"
                  className="w-full p-1"
                />
              </td>
              <td className="border p-2">
                <input
                  type="text"
                  name="report"
                  className="w-full p-1"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopUp;
