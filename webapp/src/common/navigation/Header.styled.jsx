import styled from 'styled-components';
import media from '../../styles/Media.styled';

export const HeaderDiv = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export const HamburgerButton = styled.button`
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  flex-direction: column;
  justify-content: space-around;
  display: none;

  & span {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: #ffffff;
  }
  ${media.mobileDevice`
        display: flex;
        width: 18px;
        height: 14px;
    `}
`;

export const Title = styled.div`
  color: #333333;
  font-family: 'DINCondensed Bold';
  margin: 10px 18px;
  font-size: 28px;
  ${media.mobileDevice`
  font-size: 18px;
  `}
`;

export const MobileView = styled.div`
  display: none;
  ${media.mobileDevice`
    display : flex;
  `}
`;

export const DesktopView = styled.div`
  display: flex;
  width: 100%;
  ${media.mobileDevice`
    display : none;
  `}
`;

export const SideBar = styled.div`
  .SideDrawer {
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
  }

  @media (min-width: 500px) {
    .SideDrawer {
      display: none;
    }
  }

  .Open {
    transform: translateX(0);
  }

  .Close {
    transform: translateX(-100%);
  }
`;
