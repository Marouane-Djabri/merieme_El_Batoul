import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import QoranIcon from '../assets/QoranIcon.svg';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const role = 'student';  // Assign the default role

    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, email, password, role });
      console.log('Registration successful:', response.data.message);
      setErrorMessage('');
      setSuccessMessage('Registration successful!');

      // Store the token in localStorage
      



      // Redirect to the desired page
      navigate('/login');
    } catch (error) {
      console.error('There was an error registering!', error);
      setErrorMessage('Registration failed. Please try again.');
      setSuccessMessage('');
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
            <div className="mt-0 mr-6 ml-6 flex space-x-2">
              
            </div>
          </header>

          <div className="flex justify-center items-center flex-grow">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-4">
              <div className="py-6">
                <h1 className="font-bold text-3xl text-right text-orange-900">هيا</h1>
                <h1 className="font-bold text-3xl text-right">نبدا في التعلم</h1>
                <p className="text-right">سجل الدخول او انشئء حساب لتكمل</p>
              </div>
              {errorMessage && (
                <div className="text-red-500 text-center mb-4">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="text-green-500 text-center mb-4">
                  {successMessage}
                </div>
              )}
              <label className="block mb-2 text-right">الايميل</label>
              <input className="border p-2 rounded-lg w-full" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label className="block mb-2 text-right">اسم المستخدم</label>
              <input className="border p-2 rounded-lg w-full" placeholder="user name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label className="block mb-2 text-right">كلمة المرور</label>
              <input className="border p-2 rounded-lg w-full" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label className="block mb-2 text-right">تاكيد كلمة المرور</label>
              <input className="border p-2 rounded-lg w-full" placeholder="confirm password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <div className="flex justify-center mt-2">
                <button className="bg-orange-900 p-2 font-bold text-white rounded-lg w-full" onClick={handleSignup}>انشء حساب</button>
              </div>
              <div className="mt-2">
                <p className="text-right font-bold text-sm">لديك حساب? سجل الدخول</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
