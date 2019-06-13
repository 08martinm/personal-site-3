import { css } from 'styled-components';
import theme from '../../../theme';

const { colors } = theme;
const { DARKEST_GRAY } = colors;

const sharedStyles = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: ${DARKEST_GRAY};
  width: 100vw;
  box-sizing: border-box;
  padding: 0 20px;
`;

export default sharedStyles;
