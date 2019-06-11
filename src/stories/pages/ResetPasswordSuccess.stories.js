import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ResetPasswordSuccess from '../../components/pages/ResetPasswordSuccess';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('ResetPasswordSuccess', () => <ResetPasswordSuccess />);
