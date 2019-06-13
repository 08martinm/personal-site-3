import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import VerifyError from '../../components/pages/VerifyError';
import store from '../../store';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('VerifyError', () => (
    <Provider store={store}>
      <VerifyError email={text('email', 'john.doe@gmail.com')} />
    </Provider>
  ));
