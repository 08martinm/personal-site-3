import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CollapseBar from '../../components/atoms/CollapseBar';

const Container = styled.div`
  width: 400px;
  border-radius: 25px;
  background-color: lightpink;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

storiesOf('Atoms', module).add('CollapseBar', () => (
  <Container>
    <CollapseBar className={select('className', ['none', 'collapsed'])} />
  </Container>
));
