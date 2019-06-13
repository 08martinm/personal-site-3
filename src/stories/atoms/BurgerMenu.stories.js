import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import BurgerMenu from '../../components/atoms/BurgerMenu';

const Background = styled.div`
  background-color: #000;
  padding: 50px;
  border-radius: 25px;
`;

storiesOf('Atoms', module).add('BurgerMenu', () => (
  <Background>
    <BurgerMenu open={boolean('open', false)} />
  </Background>
));
