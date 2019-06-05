import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const { colors } = theme;
const { DARKEST_GRAY } = colors;

const StarSpan = styled.span`
  font-size: 30px;
  line-height: 30px;
  color: ${DARKEST_GRAY};
  cursor: default;
`;

const Star = props => <StarSpan {...props}>★</StarSpan>;

export default Star;
