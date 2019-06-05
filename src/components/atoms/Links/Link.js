import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

const { colors } = theme;
const { BLUE } = colors;

const StyledLink = styled(Link)`
  color: ${BLUE};
  text-decoration: none;
  :visited {
    color: ${darken(0.15, BLUE)};
  }
  :hover,
  :active {
    color: ${lighten(0.15, BLUE)};
  }
`;

export default StyledLink;
