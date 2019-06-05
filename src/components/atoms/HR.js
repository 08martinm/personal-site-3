import styled from 'styled-components';
import theme from '../../theme';

const { colors } = theme;
const { DARK_GRAY } = colors;

const HR = styled.hr`
  max-width: 800px;
  width: 80vw;
  border: 1px solid ${DARK_GRAY};
`;

export default HR;
