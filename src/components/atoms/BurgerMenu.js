import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const { colors } = theme;
const { WHITE } = colors;

const BurgerContainer = styled.div`
  position: relative;
  padding-right: 25px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const BurgerBar = styled.div`
  width: 30px;
  border-bottom: 3px solid ${WHITE};
  margin-bottom: 5px;
  transition: all 0.2s;
  z-index: 3;
`;
const BurgerBar1 = styled(BurgerBar)`
  ${props =>
    props.open &&
    css`
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    `}
`;
const BurgerBar2 = styled(BurgerBar)`
  ${props =>
    props.open &&
    css`
      opacity: 0;
    `}
`;
const BurgerBar3 = styled(BurgerBar)`
  ${props =>
    props.open &&
    css`
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    `}
`;

const BurgerMenu = ({ open, ...props }) => (
  <BurgerContainer {...props}>
    <BurgerBar1 open={open} />
    <BurgerBar2 open={open} />
    <BurgerBar3 open={open} />
  </BurgerContainer>
);

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default BurgerMenu;
