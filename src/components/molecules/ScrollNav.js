import React from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
import { scroller } from 'react-scroll';
import theme from '../../theme';

const { colors } = theme;
const { WHITE, GRAY, DARKEST_GRAY } = colors;

const BREAK_POINT = '1250px';

const Container = styled.div`
  background-color: ${WHITE};
  border-radius: 25px;
  width: 125px;
  right: 80px;
  top: 150px;
  display: flex;
  position: absolute;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${BREAK_POINT}) {
    display: none;
  }
`;
const Anchor = styled.li`
  text-decoration: none;
  list-style: none;
  margin: 0;
  color: ${GRAY};
  text-align: center;
  padding: 15px;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
  &.current {
    font-weight: bold;
    color: ${DARKEST_GRAY};
    transition: font-weight 0.25s ease-in;
  }
`;

const ScrollNav = props => {
  const handleClick = location => () => {
    scroller.scrollTo(location, {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: 5,
    });
  };
  return (
    <Container {...props}>
      <Scrollspy
        items={['Hero', 'Profile', 'Work', 'Education', 'Skills', 'Contact']}
        currentClassName="current"
        style={{ padding: 0, margin: 0 }}
      >
        <Anchor onClick={handleClick('Hero')}>Home</Anchor>
        <Anchor onClick={handleClick('Profile')}>Profile</Anchor>
        <Anchor onClick={handleClick('Work')}>Work Experience</Anchor>
        <Anchor onClick={handleClick('Education')}>Education</Anchor>
        <Anchor onClick={handleClick('Skills')}>Skills</Anchor>
        <Anchor onClick={handleClick('Contact')}>Contact</Anchor>
      </Scrollspy>
    </Container>
  );
};

export default ScrollNav;
