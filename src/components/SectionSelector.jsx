import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

// Define the hover animation
const hoverAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Create a styled button component
const SectionButton = styled.button`
  background: #f9f9f9;
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${hoverAnimation} 0.3s forwards;
  }
`;

const ButtonText = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color || '#ddd'};
  color: #fff;
`;

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SectionSelector = () => {
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/classes');
        if (Array.isArray(response.data)) {
          const sectionsWithColors = response.data.map(section => ({
            ...section,
            color: getRandomColor(),
          }));
          setSections(sectionsWithColors);
        } else {
          console.error('Expected array but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleEnroll = async (classId) => {
    const token = localStorage.getItem('accessToken');
    console.log('Token from local storage:', token);
  
    if (!token) {
      console.error('User not logged in or token not available');
      return;
    }
  
    try {
      const decodedToken = jwtDecode(token);
      const studentId = decodedToken.userId;
  
      if (!studentId) {
        console.error('Student ID not available in token');
        return;
      }
  
      // Enroll the student
      const enrollResponse = await axios.post('http://localhost:5000/api/enrollments', {
        classId,
        studentId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Enrolled successfully:', enrollResponse.data);
  
      // Create a note for the enrolled class
      const noteResponse = await axios.post('http://localhost:5000/api/notes', {
        classId,
        studentId,
        content: 'finbnbnbn',
        mark: '0'
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log('Note created successfully:', noteResponse.data);
      navigate(`/classDetail/${classId}`);
    } catch (error) {
      console.error('Error in creating note :', error);
    }
  };
  

  return (
    <Container>
      <h2>اختر قسما</h2>
      <ButtonContainer>
        {Array.isArray(sections) && sections.map((section) => (
          <SectionButton key={section._id} onClick={() => handleEnroll(section._id)}>
            <div>{section.className}</div>
            <div>المادة: {section.classDescription}</div>
            <div>المعلم: {section.teacherId?.name || 'Unknown'}</div>
            <ButtonText color={section.color}>اختر</ButtonText>
          </SectionButton>
        ))}
      </ButtonContainer>
    </Container>
  );
};

export default SectionSelector;
