import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from '../../components/atoms/Button';

storiesOf('Atoms', module).add('Button', () => (
  <Button
    disabled={boolean('Disabled', false)}
    status={select('Status', ['undefined', 'success', 'error'])}
  >
    {text('Text', 'Button Text')}
  </Button>
));
