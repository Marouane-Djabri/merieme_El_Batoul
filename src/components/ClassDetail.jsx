
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import HeaderStudent from './HeaderStudent';

// const ClassDetail = () => {
//   const { classId } = useParams();
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     try {
  //       const token = localStorage.getItem('accessToken');
  //       if (!token) {
  //         throw new Error('No access token found');
  //       }

  //       const decodedToken = jwtDecode(token);
  //       const studentId = decodedToken.userId;
  //       console.log("Decoded Token:", decodedToken);
  //       console.log("Fetching notes with studentId:", studentId, "and classId:", classId);

  //       const response = await axios.get(`http://localhost:5000/api/lessons/${classId}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });

  //       console.log("API response:", response.data);

  //       setNotes(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching notes:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchNotes();
  // }, [classId]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
























  const ClassDetail = () => {
  const { classId } = useParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
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
       const responsee = await axios.get(`http://localhost:5000/api/lessons/${classId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      console.log("API responseee:", responsee.data);
      setLessons(responsee.data);
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
                     
                  </div>
                </td>
              </tr>
              <tr key={`update-${notebook._id}`}>
                <td colSpan="2" className="p-2">
                  
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="p-2">
                  <div>
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
