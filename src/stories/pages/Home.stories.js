import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../components/pages/Home';
import store from '../../store';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Home', () => (
    <Provider store={store}>
      <Home />
    </Provider>
  ));
