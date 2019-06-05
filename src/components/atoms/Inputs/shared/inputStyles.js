import { css } from 'styled-components';
import theme from '../../../../theme';
import { StyledLabel, elevatedStyles } from './Label';

const { colors, fonts } = theme;
const { ERROR, LIGHT_GRAY, DARK_GRAY } = colors;
const { FONT_FAMILY } = fonts;

const propStyles = {
  error: css`
    border-color: ${ERROR};
  `,
};

const inputStyles = css`
  background: transparent;
  border: 2px solid ${DARK_GRAY};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${DARK_GRAY};
  background-color: ${LIGHT_GRAY};
  height: 50px;
  outline: none;
  padding: 8px 11px 8px 20px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  &:active,
  &:focus,
  &:-webkit-autofill {
    & ~ ${StyledLabel} {
      ${elevatedStyles};
    }
  }
  ::placeholder {
    color: ${DARK_GRAY};
  }
  font-family: ${FONT_FAMILY};
  font-size: 16px;
  ${props => props.error && propStyles.error};
`;

export default inputStyles;
