import React from 'react';
import Sticky from 'react-stickynode';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../molecules/Navbar';
import Hero from '../organisms/Hero';
import Profile from '../organisms/Profile';
import Jobs from '../organisms/Jobs';
import Education from '../organisms/Education';
import Skills from '../organisms/Skills';
import Contact from '../organisms/Contact';
import ScrollNav from '../molecules/ScrollNav';

const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

const Home = ({ isLoggedIn, ...props }) => (
  <PageContainer {...props}>
    <Navbar isLoggedIn={isLoggedIn} />
    <Hero />
    <Sticky enabled top={50}>
      <ScrollNav />
    </Sticky>
    <Profile />
    <Jobs />
    <Education />
    <Skills />
    <Contact />
  </PageContainer>
);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Home;
