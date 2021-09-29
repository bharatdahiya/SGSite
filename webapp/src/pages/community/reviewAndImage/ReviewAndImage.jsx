import React from 'react';
import { Section, Section1, Section2 } from './ReviewAndImage.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReviewsCard from '../../../common/reviewsCard';
import ImagesCard from '../../../common/imagesCard';
import communityData from '../../../constants/community.json';

const ReviewsAndImagesSection = () => {
  AOS.init();
  const reviewsAndImages = communityData.ReviewsAndImages.map((data) => {
    if (data.sectionId === 1) {
      return (
        <Section1
          className='row'
          data-aos='fade-up'
          data-aos-anchor-placement='center-bottom'
          data-aos-duration='1000'
        >
          <ImagesCard sectionId={data.sectionId} />
          <ReviewsCard data={data} />
        </Section1>
      );
    } else if (data.sectionId === 2) {
      return (
        <Section2
          className='row'
          data-aos='fade-up'
          data-aos-anchor-placement='center-bottom'
          data-aos-duration='1500'
          justifyContent='flex-start'
          lgJustifyContent='center'
          smJustifyContent='center'
          margin='-8% 0 0 -49%'
          mbMargin='7% -4% 0 -9%'
          lgMargin='20% 0 0 -79%'
        >
          <ReviewsCard data={data} />
          <ImagesCard sectionId={data.sectionId} />
        </Section2>
      );
    } else if (data.sectionId === 3) {
      return (
        <Section
          className='row'
          data-aos='fade-up'
          data-aos-anchor-placement='center-bottom'
          data-aos-duration='2000'
        >
          <ReviewsCard data={data} />
          <ImagesCard sectionId={data.sectionId} />
        </Section>
      );
    }
  });
  return <div style={{ width: '100%', zIndex: 10 }}>{reviewsAndImages}</div>;
};

export default ReviewsAndImagesSection;
