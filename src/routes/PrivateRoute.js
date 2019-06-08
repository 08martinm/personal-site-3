import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  fetchingUser,
  isLoggedIn,
  ...otherProps
}) => (
  <Route
    {...otherProps}
    render={props => {
      if (!isLoggedIn && !fetchingUser) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { referrer: '/' },
            }}
          />
        );
      }
      if (fetchingUser) {
        return <h1> one sec </h1>;
      }
      return <Component {...props} />;
    }}
  />
);

PrivateRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.func, propTypes.node]),
  fetchingUser: propTypes.bool,
  isLoggedIn: propTypes.bool,
};
PrivateRoute.defaultProps = {
  component: null,
  fetchingUser: false,
  isLoggedIn: false,
};

export default PrivateRoute;
