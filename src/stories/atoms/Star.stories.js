import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Star from '../../components/atoms/Star';

const Background = styled.div`
  padding: 25px;
  border-radius: 15px;
  background-color: #bdbdbd;
`;

storiesOf('Atoms', module).add('Star', () => (
  <Background>
    <Star
      error={boolean('error', false)}
      placeholder={text('placeholder', 'How can I help you?')}
    />
  </Background>
));
