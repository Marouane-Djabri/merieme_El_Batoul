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

        const response = await axios.get(`http://localhost:5000/api/notes/${classId}/${studentId}`, {
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
        <HeaderStudent/>
      
      {  (
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-right">التقدير</th>
              <th className="border border-gray-300 p-2 text-right"> الحفظ</th>
            </tr>
          </thead>
          <tbody>
            {notes.map(note => (
              <tr key={note._id}>
                <td className="border border-gray-300 p-2 text-right">{note.mark.join(', ')}</td>
                <td className="border border-gray-300 p-2 text-right">{note.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClassDetail;