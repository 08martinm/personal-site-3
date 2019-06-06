import React from 'react';
import { storiesOf } from '@storybook/react';
import Credential from '../../components/molecules/Credential';

storiesOf('Molecules', module).add('Credential', () => (
  <Credential
    name="CoFi"
    position="Senior Software Engineer"
    description="Brought on to clean up an existing codebase after several of the former developers were let go due to budgetary cuts. I implemented ESLint and Prettier to standardize coding practices, ..."
  />
));
