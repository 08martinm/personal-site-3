import styled from 'styled-components';
import theme from '../../theme';

const { colors } = theme;
const { DARKEST_GRAY } = colors;

const Column = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: ${DARKEST_GRAY};
  width: 100vw;
`;

export default Column;
