import React from 'react';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Routes from './routes';
import { COOKIE_NAME, COOKIE_VALUE } from '../common/cookie';

const HotReloadedRoutes = hot(module)(Routes);

const App = ({ cookies }) => {
  const isLoggedIn = cookies.get(COOKIE_NAME) === COOKIE_VALUE;
  return (
    <Router>
      <HotReloadedRoutes isLoggedIn={isLoggedIn} />
    </Router>
  );
};

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
};

export default withCookies(App);
