import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { getUserDataAction, clearUserDataAction } from './store/userDuck';
import Routes from './routes';
import { COOKIE_NAME, COOKIE_VALUE } from '../common/cookie';

const HotReloadedRoutes = hot(module)(Routes);

class App extends Component {
  componentWillMount() {
    const { cookies, initializeLoggedInUser, clearUserData } = this.props;
    if (cookies.get(COOKIE_NAME) === COOKIE_VALUE) {
      initializeLoggedInUser();
    } else {
      clearUserData();
    }
  }

  render() {
    return (
      <Router>
        <HotReloadedRoutes />
      </Router>
    );
  }
}

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
  initializeLoggedInUser: PropTypes.func.isRequired,
  clearUserData: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  initializeLoggedInUser: () =>
    new Promise((resolve, reject) =>
      dispatch(getUserDataAction({}, resolve, reject)),
    ),
  clearUserData: () => dispatch(clearUserDataAction()),
});

export default connect(
  null,
  mapDispatchToProps,
)(withCookies(App));
