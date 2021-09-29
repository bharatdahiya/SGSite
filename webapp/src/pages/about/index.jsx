import React from 'react';
import {
  AboutContainer,
  Background,
  ImageBackground,
  Content,
  Para,
  H1,
  Subtitle,
} from './index.styled';
import AboutPNG from '../../assets/landingImage.png';

const About = () => {
  return (
    <AboutContainer id='home'>
      <Background>
        <ImageBackground src={AboutPNG}></ImageBackground>
      </Background>
      <Content>
        <Para>THE BEST FOODIE</Para>
        <H1>EXPERIENCE</H1>
        <Subtitle>NOW IN LONDON</Subtitle>
      </Content>
    </AboutContainer>
  );
};

export default About;
