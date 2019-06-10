import React from 'react';
import { Route, Switch /* , Redirect */ } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import NotFound from '../components/pages/NotFound';
import SignupSuccess from '../components/pages/SignupSuccess';
import VerifyEmail from '../components/pages/VerifyEmail';
import VerifyError from '../components/pages/VerifyError';
// import ForgotPassword from '../components/pages/ForgotPassword';
// import ResetPassword from '../components/pages/ResetPassword';
// import PrivateRoute from './PrivateRoute';

// <PrivateRoute path="/schedule" component={RegisterPage} />

const Routes = appProps => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} {...appProps} />} />
    <Route
      exact
      path="/login"
      render={props => <Login {...props} {...appProps} />}
    />
    <Route exact path="/signed-up" component={SignupSuccess} />
    <Route exact path="/verify/error" component={VerifyError} />
    <Route path="/verify-email" component={VerifyEmail} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
