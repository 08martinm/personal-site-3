import { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../theme';

const { colors, fonts } = theme;
const { BLACK, WHITE } = colors;
const { FONT_FAMILY } = fonts;

const propStyles = {
  color: color => {
    switch (color) {
      case 'white':
        return WHITE;
      default:
        return BLACK;
    }
  },
};

const baseHeaderStyles = css`
  color: ${props => propStyles.color(props.color)};
  font-family: ${FONT_FAMILY};
  font-size: 50px;
  line-height: 60px;
  margin: 25px auto;
  padding: 0;
  font-weight: normal;
`;

baseHeaderStyles.propTypes = {
  color: PropTypes.string,
};
baseHeaderStyles.defaultProps = {
  color: 'black',
};

export default baseHeaderStyles;
