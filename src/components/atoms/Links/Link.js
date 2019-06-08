import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

const { colors } = theme;
const { BLUE } = colors;

const StyledLink = styled(Link)`
  color: ${BLUE};
  text-decoration: none;
  :hover,
  :active {
    color: ${lighten(0.15, BLUE)};
  }
`;

export default StyledLink;
