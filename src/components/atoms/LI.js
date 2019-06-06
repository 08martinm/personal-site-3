import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { fonts, colors } = theme;
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

const LI = styled.li`
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  color: ${props => propStyles.color(props.color)};
  margin-top: 25px;
`;

LI.propTypes = {
  color: PropTypes.string,
};
LI.defaultProps = {
  color: 'default',
};

export default LI;
