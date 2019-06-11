import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from '../../components/pages/ForgotPassword';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('ForgotPassword', () => <ForgotPassword />);
