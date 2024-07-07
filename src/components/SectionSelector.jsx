import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  margin-top: 40px; // Adjust this value to push the buttons further down
`;

// Create the main component
const SectionSelector = () => {
  const sections = [
    { id: 1, name: 'القسم 1', subject: 'قرآن', teacher: 'الشيخاني', color: '#A52A2A' },
    { id: 2, name: 'القسم 1', subject: 'قرآن', teacher: 'الشيخاني', color: '#008000' },
    { id: 3, name: 'القسم 1', subject: 'قرآن', teacher: 'الشيخاني', color: '#D2B48C' },
    { id: 4, name: 'القسم 1', subject: 'قرآن', teacher: 'الشيخاني', color: '#D2B48C' },
    { id: 5, name: 'القسم 1', subject: 'قرآن', teacher: 'الشيخاني', color: '#D2B48C' },
  ];

  return (
    <Container>
      <h2>اختر قسما</h2>
      <ButtonContainer>
        {sections.map((section) => (
          <SectionButton key={section.id}>
            <div>{section.name}</div>
            <div>المادة: {section.subject}</div>
            <div>المعلم: {section.teacher}</div>
            <ButtonText color={section.color}>اختر</ButtonText>
          </SectionButton>
        ))}
      </ButtonContainer>
    </Container>
  );
};

export default SectionSelector;
