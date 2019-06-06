import React from 'react';
import { storiesOf } from '@storybook/react';
import P from '../../components/atoms/P';
import Credential from '../../components/molecules/Credential';

storiesOf('Molecules', module).add('Credential', () => (
  <Credential
    name="CoFi"
    position="Senior Software Engineer"
    description={
      <P spaced>
        CoFi resulted from the merging of several smaller teams within the
        broader ConsenSys accelerator focused on offering blockchain-backed
        securities to accredited investors. I was responsible for cleaning up an
        existing codebase to better allow multiple developers to work together.
        I also handled the authentication and Know-Your-Customer (KYC) pieces.
        The stack included: React, Redux, Webpack, Docker, AWS, ESLint,
        Prettier, Express, Joi (for API request/response validation), mySQL, and
        PostgreSQL.
      </P>
    }
  />
));
