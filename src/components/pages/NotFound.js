import React from 'react';
import styled from 'styled-components';
import SkullAndCrossbones from '../../../public/skull-and-crossbones.png';
import P from '../atoms/P';
import { Link } from '../atoms/Links';
import { H1, H2 } from '../atoms/Headers';
import theme from '../../theme';
import { FullPageBackground } from '../atoms/Containers';

const { colors } = theme;
const { WHITE } = colors;

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
  <FullPageBackground {...props}>
    <Img />
    <Headline color="white">Uh oh...</Headline>
    <Tagline color="white">We couldn{`'`}t find that page</Tagline>
    <Text>
      Click <Link to="/">here</Link> to go home
    </Text>
  </FullPageBackground>
);

export default NotFound;
