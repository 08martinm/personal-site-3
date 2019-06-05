import styled, { css } from 'styled-components';
import theme from '../../theme';

const {
  colors,
  fonts: { FONT_FAMILY },
} = theme;
const { WHITE, LIGHT_GRAY, GRAY, DARK_GRAY, SUCCESS, ERROR } = colors;

const propStyles = {
  disabled: css`
    cursor: not-allowed;
  `,
  status: status => {
    switch (status) {
      case 'success':
        return css`
          background-color: ${SUCCESS};
        `;
      case 'error':
        return css`
          background-color: ${ERROR};
        `;
      default:
        return css``;
    }
  },
};

const loadingStyles = css`
  ${propStyles.disabled};
  transition: color 0.5s linear 1s;
  transition: background-color 0.5s linear 1s;
`;

const StyledButton = styled.button.attrs({
  disabled: props => props.disabled || props.status === 'error',
})`
  display: block;
  position: relative;
  border: 0px;
  border-radius: 25px;
  font-family: ${FONT_FAMILY};
  font-size: 18px;
  height: 50px;
  text-transform: uppercase;
  text-decoration: none;
  width: 165px;
  background-color: ${GRAY};
  color: ${DARK_GRAY};
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 3px ${WHITE};
  }
  &:active {
    background-color: ${LIGHT_GRAY};
  }
  ${props => props.loading && loadingStyles};
  ${props => propStyles.status(props.status)};
  ${props => props.disabled && propStyles.disabled};
`;

export default StyledButton;
