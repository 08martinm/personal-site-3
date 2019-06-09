import React from 'react';
import styled from 'styled-components';
import SkullAndCrossbones from '../../../public/skull-and-crossbones.png';
import P from '../atoms/P';
import { Link } from '../atoms/Links';
import { H1, H2 } from '../atoms/Headers';
import theme from '../../theme';

const { colors } = theme;
const { WHITE, DARKEST_GRAY } = colors;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${DARKEST_GRAY};
`;
const Img = styled.img.attrs({
  src: SkullAndCrossbones,
  alt: 'Skull and Crossbones',
})`
  height: 200px;
`;
const Headline = styled(H1)`
  margin: 25px 0 0;
`;
const Tagline = styled(H2)`
  margin: 25px 0 0;
`;
const Text = styled(P)`
  color: ${WHITE};
  margin-top: 25px;
`;

const NotFound = props => (
  <Container {...props}>
    <Img />
    <Headline color="white">Uh oh...</Headline>
    <Tagline color="white">We couldn{`'`}t find that page</Tagline>
    <Text>
      Click <Link to="/">here</Link> to go home
    </Text>
  </Container>
);

export default NotFound;
