import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import _map from 'lodash/map';
import _throttle from 'lodash/throttle';
import { Link } from 'react-router-dom';
import PropTypes, { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';
import theme from '../../theme';
import Logo from '../atoms/Logo';
import { NavLink } from '../atoms/Links';
import { COOKIE_NAME } from '../../../common/cookie';
import { logoutAction } from '../../store/userDuck';
import BurgerMenu from '../atoms/BurgerMenu';

const { colors } = theme;
const { BLACK, GRAY } = colors;
const BREAK_POINT = '700px';

const propStyles = {
  hideComponent: css`
    opacity: 0;
    transition: opacity 0.5s ease-out;
  `,
};
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
  opacity: 1;
  transition: opacity 0.5s ease-in;
  ${props => props.hideComponent && propStyles.hideComponent};
`;
const LogoContainer = styled.div`
  flex: 0 1 50%;
  margin-left: 20px;
`;
const NavLinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  flex: 0 1 500px;
  @media (max-width: ${BREAK_POINT}) {
    display: none;
  }
`;
const BurgerContainer = styled.div`
  margin-left: auto;
  @media (min-width: ${BREAK_POINT}) {
    display: none;
  }
`;
const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: ${BLACK};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  & > * {
    padding: 30px 0;
  }
  @media (min-width: ${BREAK_POINT}) {
    display: none;
  }
`;
const BurgerOverlay = styled.div`
  height: 75px;
  border-bottom: 1px solid ${GRAY};
`;

class Navbar extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    cookies: instanceOf(Cookies).isRequired,
    hideNav: PropTypes.bool,
  };

  static defaultProps = {
    hideNav: false,
  };

  state = {
    burgerMenuOpen: false,
    hideComponent: true,
  };

  componentDidMount() {
    this.throttledScrollEvent = _throttle(this.hideBar, 200, {
      trailing: true,
    });
    window.addEventListener('scroll', this.throttledScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledScrollEvent);
  }

  hideBar = () => {
    const { hideComponent } = this.state;
    if (window.scrollY < 150) {
      this.setState({ hideComponent: true });
    } else if (hideComponent) {
      this.setState({ hideComponent: false });
    }
  };

  toggleDropdown = () =>
    this.setState(state => ({
      ...state,
      burgerMenuOpen: !state.burgerMenuOpen,
    }));

  handleLogout = async () => {
    const { cookies, logout } = this.props;
    cookies.remove(COOKIE_NAME);
    await logout();
    window.location.reload();
  };

  render() {
    const { isLoggedIn, hideNav } = this.props;
    const { burgerMenuOpen, hideComponent } = this.state;

    const loggedInLinks = [
      { link: '/', name: 'Home' },
      { link: '/faq', name: 'FAQ' },
      { link: '/schedule', name: 'Calendar' },
      { link: '/', name: 'Logout', onClick: this.handleLogout },
    ];
    const loggedOutLinks = [
      { link: '/', name: 'Home' },
      { link: '/faq', name: 'FAQ' },
      { link: '/login', name: 'Log In' },
    ];
    const links = isLoggedIn ? loggedInLinks : loggedOutLinks;

    return (
      <Container hideComponent={hideNav && hideComponent} {...this.props}>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>

        <NavLinksContainer>
          {_map(links, ({ link, name, onClick }) => (
            <NavLink key={`${link},${name}`} to={link} onClick={onClick}>
              {name}
            </NavLink>
          ))}
        </NavLinksContainer>

        <BurgerContainer>
          <BurgerMenu open={burgerMenuOpen} onClick={this.toggleDropdown} />
        </BurgerContainer>

        {burgerMenuOpen && (
          <DropdownContainer onClick={this.toggleDropdown}>
            <BurgerOverlay />
            {_map(links, ({ link, name, onClick }) => (
              <NavLink key={`${link},${name}`} to={link} onClick={onClick}>
                {name}
              </NavLink>
            ))}
          </DropdownContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});
const mapDispatchToProps = dispatch => ({
  logout: () =>
    new Promise((resolve, reject) =>
      dispatch(logoutAction({ resolve, reject })),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withCookies(Navbar));
