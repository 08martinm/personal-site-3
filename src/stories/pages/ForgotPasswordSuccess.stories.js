import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ForgotPasswordSuccess from '../../components/pages/ForgotPasswordSuccess';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('ForgotPasswordSuccess', () => <ForgotPasswordSuccess />);
