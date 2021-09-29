import React from 'react';
import Pic1 from '../../assets/picture1.png';
import Pic2 from '../../assets/picture2.png';
import Pic3 from '../../assets/picture3.png';
import {
  CardContainer,
  ImageContainer,
  InstagramImage,
  InstagramIcon,
  IconContainer,
} from './index.styled';
import InstaIcon from '../../assets/instagram-btn.png';

const ImagesCard = ({ sectionId }) => {
  return (
    <CardContainer style={{ marginLeft: sectionId === 1 ? '0px' : '25px' }}>
      <ImageContainer>
        <InstagramImage
          src={sectionId === 1 ? Pic1 : sectionId === 2 ? Pic2 : Pic3}
        />
      </ImageContainer>
      <IconContainer>
        <InstagramIcon src={InstaIcon} />
      </IconContainer>
    </CardContainer>
  );
};

export default ImagesCard;
