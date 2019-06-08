import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Routes from './routes';

const HotReloadedRoutes = hot(module)(Routes);

const App = () => (
  <Router>
    <HotReloadedRoutes />
  </Router>
);

export default App;
