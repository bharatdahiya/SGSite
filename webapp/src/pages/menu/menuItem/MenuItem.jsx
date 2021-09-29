import React from 'react';
import { ItemContainer, Title, Description, Price } from '../index.styled';

const MenuItem = (props) => {
  const { title, description, price, containerMarTop } = props;
  return (
    <ItemContainer containerMarTop={containerMarTop}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </ItemContainer>
  );
};

export default MenuItem;
