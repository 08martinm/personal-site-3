import styled from 'styled-components';
import PropTypes from 'prop-types';
import sharedStyles from './sharedStyles';
import theme from '../../../theme';

const { colors } = theme;
const { DARKEST_GRAY } = colors;

const SectionBackground = styled.div`
  ${sharedStyles}
  padding-bottom: 50px;
  background-color: ${DARKEST_GRAY};
`;

SectionBackground.propTypes = {
  background: PropTypes.string,
};
SectionBackground.defaultProps = {
  background: DARKEST_GRAY,
};

export default SectionBackground;
