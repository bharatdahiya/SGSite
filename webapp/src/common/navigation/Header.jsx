import React, { useState } from 'react';
import {
  HeaderDiv,
  HamburgerButton,
  Title,
  DesktopView,
} from './Header.styled';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
const Header = (props) => {
  const [sideDrawer, setSideDrawer] = useState(false);

  return (
    <HeaderDiv>
      <HamburgerButton onClick={() => setSideDrawer((prev) => !prev)}>
        <span />
        <span />
        <span />
      </HamburgerButton>
      <Title>LOGO</Title>
      <DesktopView>
        <NavLinks />
      </DesktopView>

      {sideDrawer && <SideDrawer />}
    </HeaderDiv>
  );
};

export default Header;
