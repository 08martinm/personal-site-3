import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import P from '../atoms/P';
import Symbol from '../../../public/Mail.ru.svg';

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

const EmailLink = props => (
  <A href="mailto:08martinm@gmail.com" {...props}>
    <Container {...props}>
      <Img src={Symbol} alt="@" />
      <Text>08martinm@gmail.com</Text>
    </Container>
  </A>
);

export default EmailLink;
