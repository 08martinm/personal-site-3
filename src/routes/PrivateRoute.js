import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  fetchingUser,
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      render={props => {
        if (fetchingUser) {
          return 'One sec';
        }
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
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  isLoggedIn: PropTypes.bool.isRequired,
  fetchingUser: PropTypes.bool.isRequired,
};
PrivateRoute.defaultProps = {
  component: null,
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  fetchingUser: state.user.fetchingUser,
});

export default connect(mapStateToProps)(PrivateRoute);
