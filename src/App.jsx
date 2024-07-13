import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
 
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChooseClasse from './pages/ChooseClassPage';
import ClassDetail from './components/ClassDetail';
import StudentListPage from './pages/StudentListPage';
const App = () => (
  <BrowserRouter>
    
      
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
         <Route path='/login' element={<LoginPage/>} />
         <Route path='/signup' element={<RegisterPage/>} />
         <Route path='/chooseclass' element={<ChooseClasse/>} />
         <Route path='/classDetail/:classId' element={<ClassDetail/>} />
         <Route path='/studentlist' element={<StudentListPage/>} />
        {/* <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} /> */} 
      </Routes>
      
  </BrowserRouter>
);

export default App;