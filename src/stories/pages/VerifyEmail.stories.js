import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text } from '@storybook/addon-knobs';
import VerifyEmail from '../../components/pages/VerifyEmail';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('VerifyEmail', () => (
    <VerifyEmail email={text('email', 'john.doe@gmail.com')} />
  ));
