import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import P from '../atoms/P';
import LinkedIn from '../../../public/LinkedIN.svg';

const { colors } = theme;
const { LIGHT_GRAY } = colors;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
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
    <Container>
      <Img src={LinkedIn} alt="Linked In" />
      <Text>www.linkedin.com/in/08martinm</Text>
    </Container>
  </A>
);

export default LinkedInLink;
