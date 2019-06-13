import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ResetPasswordSuccess from '../../components/pages/ResetPasswordSuccess';
import store from '../../store';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('ResetPasswordSuccess', () => (
    <Provider store={store}>
      <ResetPasswordSuccess />
    </Provider>
  ));
