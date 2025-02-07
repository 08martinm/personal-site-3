import React from 'react';
import { Route, Switch /* , Redirect */ } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import NotFound from '../components/pages/NotFound';
import SignupSuccess from '../components/pages/SignupSuccess';
import VerifyEmail from '../components/pages/VerifyEmail';
import VerifyError from '../components/pages/VerifyError';
import Calendar from '../components/pages/Calendar';
import FAQ from '../components/pages/FAQ';
import ForgotPassword from '../components/pages/ForgotPassword';
import ForgotPasswordSuccess from '../components/pages/ForgotPasswordSuccess';
import ResetPassword from '../components/pages/ResetPassword';
import PrivateRoute from './PrivateRoute';
import ResetPasswordSuccess from '../components/pages/ResetPasswordSuccess';

const Routes = appProps => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} {...appProps} />} />
    <Route
      exact
      path="/login"
      render={props => <Login {...props} {...appProps} />}
    />
    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/signed-up" component={SignupSuccess} />
    <Route exact path="/verify/error" component={VerifyError} />
    <Route path="/verify-email" component={VerifyEmail} />
    <PrivateRoute exact path="/schedule" component={Calendar} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route
      exact
      path="/forgot-password/success"
      component={ForgotPasswordSuccess}
    />
    <Route
      exact
      path="/reset-password/success"
      component={ResetPasswordSuccess}
    />
    <Route path="/reset-password" component={ResetPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
