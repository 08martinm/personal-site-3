import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import LI from '../../components/atoms/LI';

storiesOf('Atoms', module).add('LI', () => (
  <ol>
    <LI color={select('color', ['default', 'white'])}>First item</LI>
    <LI color={select('color', ['default', 'white'])}>Second item</LI>
    <LI color={select('color', ['default', 'white'])}>Third item</LI>
  </ol>
));
