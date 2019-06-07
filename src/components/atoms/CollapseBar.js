import styled from 'styled-components';
import theme from '../../theme';

const { colors } = theme;
const { GRAY, LIGHT_GRAY, DARK_GRAY } = colors;

const CollapseBar = styled.div`
  background-color: ${GRAY};
  border-radius: 20px;
  height: 12px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 3px ${DARK_GRAY};
  }
  :after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${LIGHT_GRAY};
  }
  &.collapsed {
    :after {
      transition: all 0.75s ease-in 0s;
      transform: rotate(180deg);
    }
  }
`;

export default CollapseBar;
