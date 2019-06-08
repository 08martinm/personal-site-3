import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Logo from '../atoms/Logo';
import { NavLink } from '../atoms/Links';

const { colors } = theme;
const { BLACK } = colors;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${BLACK};
  width: 100%;
  min-width: 90vw;
  height: 60px;
  display: flex;
  flex-flow: row-nowrap;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled.div`
  flex: 0 1 50%;
  margin-left: 20px;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  flex: 0 1 200px;
  margin-right: 20px;
`;

const Navbar = props => (
  <Container {...props}>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <LinkContainer>
      <NavLink active to="/">
        Home
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </LinkContainer>
  </Container>
);

export default Navbar;
