import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import Rating from '../../components/molecules/Rating';

storiesOf('Molecules', module).add('Rating', () => (
  <Rating skill={text('skill', 'React')} stars={number('stars', 3)} />
));
