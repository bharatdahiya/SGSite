import React from 'react';
import { NavLinkContainer, NavLinkStyle, NavBar } from './NavLinks.styled';

const NavLinks = () => {
  return (
    <NavBar>
      <div>
        <NavLinkContainer>
          <NavLinkStyle to='/'> ABOUT</NavLinkStyle>
          <NavLinkStyle to='/community'> COMMUNITY</NavLinkStyle>
          <NavLinkStyle to='/location'> LOCATION</NavLinkStyle>
          <NavLinkStyle to='/menu'> OUR MENU</NavLinkStyle>
          <NavLinkStyle to='/recipes'> RECIPES</NavLinkStyle>
        </NavLinkContainer>
      </div>
      <div>
        <NavLinkContainer>
          <NavLinkStyle to='/contact'> CONTACT</NavLinkStyle>
          <NavLinkStyle to='/login'> LOGIN</NavLinkStyle>
        </NavLinkContainer>
      </div>
    </NavBar>
  );
};

export default NavLinks;
