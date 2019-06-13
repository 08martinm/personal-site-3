import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import P from '../atoms/P';
import Symbol from '../../../public/Mail.ru.svg';
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

const EmailLink = props => (
  <A href="mailto:08martinm@gmail.com" {...props}>
    <Row {...props}>
      <Img src={Symbol} alt="@" />
      <Text>08martinm@gmail.com</Text>
    </Row>
  </A>
);

export default EmailLink;
