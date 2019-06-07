import React from 'react';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
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

const Home = props => (
  <PageContainer {...props}>
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

export default Home;
