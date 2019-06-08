import React from 'react';
import { Route, Switch /* , Redirect */ } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
// import PageNotFound from '../components/pages/PageNotFound';
// import ForgotPassword from '../components/pages/ForgotPassword';
// import ResetPassword from '../components/pages/ResetPassword';
// import PrivateRoute from './PrivateRoute';

// <PrivateRoute path="/schedule" component={RegisterPage} />
// <Route component={PageNotFound} />

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
