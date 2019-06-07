import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import ScrollNav from '../../components/molecules/ScrollNav';

storiesOf('Molecules', module).add('ScrollNav', () => (
  <ScrollNav skill={text('skill', 'React')} stars={number('stars', 3)} />
));
