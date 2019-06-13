import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ScrollNav from '../../components/molecules/ScrollNav';

const Background = styled.div`
  background: #333;
  width: 100vw;
  height: 100vh;
`;

storiesOf('Molecules', module).add('ScrollNav', () => (
  <Background>
    <ScrollNav />
  </Background>
));
