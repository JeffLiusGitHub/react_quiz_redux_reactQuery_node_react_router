import React from 'react';
import styled from 'styled-components';
import background from '../assets/mathBackground.jpg';

const BackgroundContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  backdrop-filter: blur(5px);
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const SloganContainer = styled.div`
  font-family: Arial, sans-serif;
  font-size: 34px;
  text-align: center;
`;

const WelcomePage = () => {
  return (
    <>
      <BackgroundContainer />
      <ContentContainer>
        <SloganContainer>
          Greetings! Are you ready to log in and explore the amazing world of mathematics? Let's log in and begin!
        </SloganContainer>
      </ContentContainer>
    </>
  );
};

export default WelcomePage;