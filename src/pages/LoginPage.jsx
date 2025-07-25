import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import QoranIcon from '../assets/QoranIcon.svg';
import { jwtDecode } from "jwt-decode";
import StudentListPage from './StudentListPage';
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://merieme-elbatoul-platforme-rt37.vercel.app/api/login', { username, password });
 
      // Access the token and classId from response data
      const { token, classId } = response.data;

      // Store the token and classId in localStorage
      localStorage.setItem('accessToken', token);
      if (classId) {
        localStorage.setItem('classId', classId);
      }

      // Decode the token to get user role
      const decodedToken = jwtDecode(token);
      const userRole =decodedToken.role; // Assuming the role is stored under 'role'
      // const userRole ="teacher";
      console.log("le role" ,userRole);
      // Redirect based on the user role
      if (userRole === 'teacher') {
        navigate('/studentlist'); // Change '/teacherPage' to your desired teacher page route
      } else if (userRole === 'student') {
        if (classId) {
          navigate(`/classDetail/${classId}`);
        } else {
          navigate('/chooseclass');
        }
      } else {
        navigate('/unauthorized'); // Optional: handle other roles or unauthorized access
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="BOX bg-[#E5E7E6] w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-3xl p-4" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <div className="flex flex-col h-full justify-between">
          <header className="flex p-2 justify-between">
            <div className="order-last mr-2 flex items-stretch">
              <img src={QoranIcon} className="w-10 h-8 self-end order-last" />
              <h1 className="font-bold text-2xl text-orange-900">البتول</h1>
            </div>
            <div className="mt-0 mr-6 ml-6 flex space-x-2"></div>
          </header>

          <div className="flex justify-center items-center flex-grow">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-4">
              <div className="py-6">
                <h1 className="font-bold text-3xl text-right text-orange-900">هيا</h1>
                <h1 className="font-bold text-3xl text-right">نبدا في التعلم</h1>
                <p className="text-right">سجل الدخول او انشئء حساب لتكمل</p>
              </div>
              <label className="block mb-2 text-right">اسم المستخدم</label>
              <input className="border p-2 rounded-lg w-full" placeholder="user name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label className="block mb-2 text-right">كلمة المرور</label>
              <input className="border p-2 rounded-lg w-full" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="flex justify-center mt-2">
                <button className="bg-orange-900 p-2 font-bold text-white rounded-lg w-full" onClick={handleLogin}>تسجبل الدخول</button>
              </div>
              <div className="mt-2">
                <p className="text-right font-bold text-sm">      </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
