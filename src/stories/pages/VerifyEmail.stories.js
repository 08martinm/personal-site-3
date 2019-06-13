import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import VerifyEmail from '../../components/pages/VerifyEmail';
import store from '../../store';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('VerifyEmail', () => (
    <Provider store={store}>
      <VerifyEmail location={{ email: text('email', 'john.doe@gmail.com') }} />
    </Provider>
  ));
