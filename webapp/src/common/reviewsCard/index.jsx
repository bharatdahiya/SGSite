import React from 'react';
import {
  ReviewsContainer,
  Title,
  Description,
  LikesComments,
  Likes,
  HeartImg,
  Count,
  Comments,
  CommentImg,
} from './index.styled';
import LikesPNG from '../../assets/likes.png';
import CommentsPNG from '../../assets/comments.png';

const ReviewsCard = (props) => {
  const { sectionId, title, description, likesCount, commentsCount } =
    props.data;

  return (
    <ReviewsContainer style={{ marginLeft: sectionId === 1 ? '25px' : '0px' }}>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <LikesComments>
        <Comments>
          <CommentImg src={CommentsPNG} />
          <Count>{commentsCount}</Count>
        </Comments>
        <Likes>
          <HeartImg src={LikesPNG} />
          <Count>{likesCount}</Count>
        </Likes>
      </LikesComments>
    </ReviewsContainer>
  );
};

export default ReviewsCard;
