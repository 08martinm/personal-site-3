import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text } from '@storybook/addon-knobs';
import SignupSuccess from '../../components/pages/SignupSuccess';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('SignupSuccess', () => (
    <SignupSuccess email={text('email', 'john.doe@gmail.com')} />
  ));
