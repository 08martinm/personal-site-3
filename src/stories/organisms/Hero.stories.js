import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../../components/organisms/Hero';

storiesOf('Organisms', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Hero', () => <Hero />);
