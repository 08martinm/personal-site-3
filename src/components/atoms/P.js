import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { fonts, colors } = theme;
const { BLACK, WHITE } = colors;
const { FONT_FAMILY } = fonts;

const propStyles = {
  spaced: css`
    line-height: 40px;
  `,
  color: color => {
    switch (color) {
      case 'white':
        return WHITE;
      default:
        return BLACK;
    }
  },
};

const P = styled.p`
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  color: ${props => propStyles.color(props.color)};
  ${props => props.spaced && propStyles.spaced}
`;

P.propTypes = {
  spaced: PropTypes.bool,
  color: PropTypes.string,
};
P.defaultProps = {
  spaced: false,
  color: 'default',
};

export default P;
