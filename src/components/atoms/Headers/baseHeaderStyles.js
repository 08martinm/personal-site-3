import { css } from 'styled-components';
import theme from '../../../theme';

const { colors, fonts } = theme;
const { BLACK } = colors;
const { FONT_FAMILY } = fonts;

const baseHeaderStyles = css`
  color: ${BLACK};
  font-family: ${FONT_FAMILY};
  font-size: 50px;
  line-height: 60px;
  margin: 25px auto;
  padding: 0;
  font-weight: normal;
`;

export default baseHeaderStyles;
