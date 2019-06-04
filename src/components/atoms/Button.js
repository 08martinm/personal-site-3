import styled, { css } from 'styled-components';
import theme from '../../theme';

const {
  colors,
  fonts: { FONT_FAMILY },
} = theme;
const {
  brand: { PRIMARY, PRIMARY_DARK },
  neutral: { WHITE, GRAY_1, GRAY_2, GRAY_3, GRAY_6 },
} = colors;

const cssClasses = {
  pressed: css`
    background-color: ${PRIMARY_DARK};
  `,
  secondary: css`
    background-color: ${props => (props.pressed ? GRAY_6 : GRAY_2)};
    &:active {
      background-color: ${GRAY_6};
    }
  `,
  inverse: css`
    background-color: ${props => (props.pressed ? GRAY_1 : WHITE)};
    color: ${PRIMARY};
    &:active {
      background-color: ${GRAY_1};
    }
  `,
  small: css`
    height: 40px;
    width: 126px;
    font-size: 14px;
  `,
  disabled: css`
    background-color: ${GRAY_1};
    color: ${GRAY_3};
    cursor: not-allowed;
  `,
};

const loadingStyles = css`
  ${cssClasses.disabled};
  transition: color 0.5s linear 1s;
  transition: background-color 0.5s linear 1s;
`;

export const btnStyles = css`
  display: block;
  position: relative;
  border: 0px;
  border-radius: 24px;
  cursor: pointer;
  font-family: ${FONT_FAMILY};
  font-size: 18px;
  font-weight: bold;
  height: 48px;
  text-transform: uppercase;
  text-decoration: none;
  width: 197px;
  &:focus {
    outline: none;
  }
  background-color: ${PRIMARY};
  color: ${WHITE};
  &:active {
    background-color: ${PRIMARY_DARK};
  }
  ${props => props.pressed && cssClasses.pressed};
  ${props => props.styleType === 'secondary' && cssClasses.secondary};
  ${props => props.styleType === 'inverse' && cssClasses.inverse};
  ${props => props.size === 'small' && cssClasses.small};
  ${props => props.disabled && cssClasses.disabled};
  ${props => props.loading && loadingStyles};
`;

const StyledButton = styled.button.attrs({
  disabled: props => props.disabled || props.pressed,
})`
  ${btnStyles};
`;

export default StyledButton;
