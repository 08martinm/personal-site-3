import styled from 'styled-components';
import sharedStyles from './sharedStyles';
import theme from '../../../theme';

const { colors } = theme;
const { DARK_GRAY } = colors;

const FullPageBackground = styled.div`
  ${sharedStyles}
  min-height: 100vh;
  background-color: ${DARK_GRAY};
  padding: 50px 0;
`;

export default FullPageBackground;
