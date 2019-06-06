import React from 'react';
import styled from 'styled-components';
import HeroGraphic from '../atoms/HeroGraphic';
import { H1, H2 } from '../atoms/Headers';
import HR from '../atoms/HR';
import DownArrow from '../atoms/DownArrow';
import Column from '../atoms/Column';
import theme from '../../theme';

const { colors } = theme;
const { DARKEST_GRAY } = colors;

const Container = styled(Column)`
  background-color: ${DARKEST_GRAY};
  width: 100vw;
  height: 700px;
  max-height: 100vh;
`;
const PositionedH2 = styled(H2)`
  padding-top: 60px;
  text-align: center;
`;
const PositionedDownArrow = styled(DownArrow)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Hero = props => (
  <Container {...props}>
    <HeroGraphic />
    <PositionedH2 color="white">Hi, I{`'`}m Matthew L. Martin</PositionedH2>
    <HR color="white" />
    <H1 color="white">Welcome!</H1>
    <PositionedDownArrow />
  </Container>
);

export default Hero;
