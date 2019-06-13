import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ForgotPasswordSuccess from '../../components/pages/ForgotPasswordSuccess';
import store from '../../store';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('ForgotPasswordSuccess', () => (
    <Provider store={store}>
      <ForgotPasswordSuccess />
    </Provider>
  ));
