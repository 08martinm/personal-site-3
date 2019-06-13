import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import P from '../atoms/P';
import LinkedIn from '../../../public/LinkedIN.png';
import { Row } from '../atoms/Containers';

const { colors } = theme;
const { LIGHT_GRAY } = colors;

const Img = styled.img`
  height: 60px;
  margin-right: 20px;
`;
const Text = styled(P)`
  color: ${LIGHT_GRAY};
`;
const A = styled.a`
  text-decoration: none;
`;

const LinkedInLink = props => (
  <A href="http://www.linkedin.com/in/08martinm" {...props}>
    <Row>
      <Img src={LinkedIn} alt="Linked In" />
      <Text>www.linkedin.com/in/08martinm</Text>
    </Row>
  </A>
);

export default LinkedInLink;
