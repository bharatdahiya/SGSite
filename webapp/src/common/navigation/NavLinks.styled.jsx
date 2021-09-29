import styled from 'styled-components';
import media from '../../styles/Media.styled';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${media.mobileDevice`
    flex-direction : column;
  `}
`;

export const NavLinkContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  width: 100%;
  font-size: 18px;
  align-items: center;

  ${media.mobileDevice`
      flex-direction: column;
  `}
`;

export const NavLinkStyle = styled(Link)`
  margin: 10px 24px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 18px;
  color: #333333;
  text-decoration: none;

  & a {
    width: 100%;
    color: #333333;
    text-decoration: none;
  }

  ${media.mobileDevice`
    flex-direction: column;

    &:hover, :active {
        border: none;
    }
  `}
`;
