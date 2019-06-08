import React from 'react';
import styled from 'styled-components';
import PropTypes, { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';
import theme from '../../theme';
import Logo from '../atoms/Logo';
import { NavLink } from '../atoms/Links';
import { logoutAPI } from '../../api';
import { COOKIE_NAME } from '../../../common/cookie';

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

const Navbar = ({ isLoggedIn, cookies, ...props }) => {
  const handleLogout = () => {
    cookies.remove(COOKIE_NAME);
    logoutAPI();
  };
  return (
    <Container {...props}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LinkContainer>
        <NavLink active to="/">
          Home
        </NavLink>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {isLoggedIn && (
          <NavLink to="/" onClick={handleLogout}>
            Log Out
          </NavLink>
        )}
      </LinkContainer>
    </Container>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  cookies: instanceOf(Cookies).isRequired,
};
Navbar.defaultProps = {
  isLoggedIn: false,
};

export default withCookies(Navbar);
