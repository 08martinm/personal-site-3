import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { text } from '@storybook/addon-knobs';
import VerifyError from '../../components/pages/VerifyError';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('VerifyError', () => (
    <VerifyError email={text('email', 'john.doe@gmail.com')} />
  ));
