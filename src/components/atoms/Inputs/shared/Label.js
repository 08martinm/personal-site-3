import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../../../theme';

const { colors, fonts } = theme;
const { LIGHT_GRAY, DARK_GRAY } = colors;
const { FONT_FAMILY } = fonts;

export const elevatedStyles = css`
  font-size: 12px;
  height: 19px;
  left: 16px;
  line-height: 130%;
  padding: 0px 5px;
  top: -18px;
  color: ${LIGHT_GRAY};
`;

export const StyledLabel = styled.label`
  color: ${DARK_GRAY};
  left: 2px;
  max-width: calc(100% - 20px - 8px);
  padding: 8px 11px 8px 20px;
  pointer-events: none;
  position: absolute;
  text-overflow: ellipsis;
  top: 8px;
  font-size: 16px;
  transition: all 0.1s ease-in-out;
  font-family: ${FONT_FAMILY};
  ${props => props.value && elevatedStyles};
`;

const Label = ({ label, ...props }) =>
  label ? <StyledLabel {...props}>{label}</StyledLabel> : null;

Label.propTypes = { label: PropTypes.string };
Label.defaultProps = { label: '' };

export default Label;
