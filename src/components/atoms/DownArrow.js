import React from 'react';
import styled, { keyframes } from 'styled-components';
import { scroller } from 'react-scroll';
import theme from '../../theme';

const { colors } = theme;
const { DARK_GRAY, DARKEST_GRAY, LIGHTEST_GRAY } = colors;

const slide = keyframes`
  0% { top: 50%; }
  50% { top: 60%; }
  100% { top: 50%; }
`;

const Background = styled.div`
  position: relative;
  border: 0px;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: ${DARK_GRAY};
  cursor: pointer;
  :hover {
    div {
      animation: none;
      border: solid ${LIGHTEST_GRAY};
      border-width: 0 10px 10px 0;
      transition: border 1s;
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40%;
  height: 40%;
  border: solid ${DARKEST_GRAY};
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg) translate(-85%, -15%);
  animation: ${slide} 2s ease infinite;
  animation-delay: 2s;
  transition: border 1s;
`;

const DownArrow = props => {
  const handleClick = () => {
    scroller.scrollTo('Profile', {
      duration: 800,
      delay: 100,
      smooth: true,
    });
  };
  return (
    <Background {...props} onClick={handleClick}>
      <Arrow />
    </Background>
  );
};

export default DownArrow;
