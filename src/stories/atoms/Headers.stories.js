import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { H1, H2, H3, H4 } from '../../components/atoms/Headers';

storiesOf('Atoms', module).add('Headers', () => (
  <Fragment>
    <H1>{text('H1 Text', 'H1 Header')}</H1>
    <H2>{text('H2 Text', 'H2 Header')}</H2>
    <H3>{text('H3 Text', 'H3 Header')}</H3>
    <H4>{text('H4 Text', 'H4 Header')}</H4>
  </Fragment>
));
