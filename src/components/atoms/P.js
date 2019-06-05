import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { fonts } = theme;
const { FONT_FAMILY } = fonts;

const propStyles = {
  spaced: css`
    line-height: 40px;
  `,
};

const P = styled.p`
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  ${props => props.spaced && propStyles.spaced}
`;

P.propTypes = { spaced: PropTypes.bool };
P.defaultProps = { spaced: false };

export default P;
