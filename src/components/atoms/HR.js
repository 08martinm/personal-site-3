import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { colors } = theme;
const { DARK_GRAY, WHITE } = colors;

const propStyles = {
  color: color => {
    switch (color) {
      case 'white':
        return WHITE;
      default:
        return DARK_GRAY;
    }
  },
};

const HR = styled.hr`
  max-width: 800px;
  width: 80vw;
  border: 1px solid ${props => propStyles.color(props.color)};
`;

HR.propTypes = { color: PropTypes.oneOf(['default', 'white']) };
HR.defaultProps = { color: 'default' };

export default HR;
