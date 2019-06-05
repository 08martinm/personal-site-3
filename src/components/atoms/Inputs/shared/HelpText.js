import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../../../theme';

const { colors, fonts } = theme;
const { LIGHT_GRAY, ERROR } = colors;
const { FONT_FAMILY } = fonts;

const propStyles = {
  error: css`
    color: ${ERROR};
  `,
};

const HelptextDiv = styled.div`
  font-family: ${FONT_FAMILY};
  font-size: 12px;
  line-height: 12px;
  color: ${LIGHT_GRAY};
  width: 100%;
  position: absolute;
  bottom: ${props => (props.helptext ? '18px' : '-2px')};
  transform: translateY(100%);
  box-sizing: border-box;
  padding: 4px 18px 0;
  ${props => props.error && propStyles.error};
`;

const Helptext = ({ helptext, error, ...props }) => (
  <HelptextDiv helptext={helptext} error={error} {...props}>
    {helptext}
  </HelptextDiv>
);

Helptext.propTypes = {
  helptext: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  error: PropTypes.bool.isRequired,
};

export default Helptext;
