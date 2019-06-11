import React from 'react';
import propTypes, { instanceOf } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Cookies, withCookies } from 'react-cookie';
import { COOKIE_NAME, COOKIE_VALUE } from '../../common/cookie';

const PrivateRoute = ({ component: Component, cookies, ...otherProps }) => {
  const isLoggedIn = cookies.get(COOKIE_NAME) === COOKIE_VALUE;
  return (
    <Route
      {...otherProps}
      render={props => {
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { referrer: '/' },
              }}
              {...otherProps}
            />
          );
        }
        return <Component {...otherProps} {...props} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.func, propTypes.node]),
  isLoggedIn: propTypes.bool,
  cookies: instanceOf(Cookies).isRequired,
};
PrivateRoute.defaultProps = {
  component: null,
  isLoggedIn: false,
};

export default withCookies(PrivateRoute);
