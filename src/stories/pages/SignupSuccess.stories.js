import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import SignupSuccess from '../../components/pages/SignupSuccess';
import store from '../../store';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('SignupSuccess', () => (
    <Provider store={store}>
      <SignupSuccess email={text('email', 'john.doe@gmail.com')} />
    </Provider>
  ));
