import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

const { colors, fonts } = theme;
const { LIGHT_GRAY, DARK_GRAY } = colors;
const { FONT_FAMILY } = fonts;

const propStyles = {
  active: css`
    :after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 100%;
      height: 0;
      border-bottom: 8px solid ${DARK_GRAY};
    }
  `,
};

const StyledLink = styled(Link)`
  color: ${LIGHT_GRAY};
  font-family: ${FONT_FAMILY};
  position: relative;
  text-decoration: none;
  :visited {
    color: ${darken(0.15, LIGHT_GRAY)};
    :after {
      border-bottom: 8px solid ${darken(0.15, DARK_GRAY)};
    }
  }
  :hover,
  :active {
    color: ${lighten(0.15, LIGHT_GRAY)};
    :after {
      border-bottom: 8px solid ${lighten(0.15, DARK_GRAY)};
    }
  }
  ${props => props.active && propStyles.active}
`;

StyledLink.propTypes = {
  active: PropTypes.func,
};
StyledLink.defaultProps = {
  active: false,
};

export default StyledLink;
