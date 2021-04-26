import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon
          <NavMenu>
            <MavItem></MavItem>
          </NavMenu>
          <NavLinks="about</Nav>"
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
