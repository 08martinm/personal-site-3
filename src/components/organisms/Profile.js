import React from 'react';
import styled from 'styled-components';
import { H1, H2 } from '../atoms/Headers';
import HR from '../atoms/HR';
import P from '../atoms/P';
import HeadShot from '../atoms/HeadShot';
import theme from '../../theme';

const { colors } = theme;
const { LIGHTEST_GRAY } = colors;
const BREAK_POINT = '1000px';

const Container = styled.div`
  background-color: ${LIGHTEST_GRAY};
  width: 100vw;
`;
const Title = styled(H1)`
  padding-top: 30px;
  text-align: center;
`;
const AboutMeHeader = styled(H2)`
  @media (max-width: ${BREAK_POINT}) {
    text-align: center;
  }
`;
const DetailsHeader = styled(AboutMeHeader)`
  @media (max-width: ${BREAK_POINT}) {
    margin-top: 50px;
  }
`;
const TagLine = styled(P)`
  text-align: center;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: space-between;
  margin-top: 75px;
  @media (max-width: ${BREAK_POINT}) {
    flex-flow: column nowrap;
    align-items: center;
  }
`;
const Section1 = styled.div`
  width: 350px;
  max-width: 100%;
`;
const HeadShotContainer = styled.div`
  width: 300px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Profile = props => (
  <Container {...props}>
    <Title>Profile</Title>
    <HR />
    <TagLine>
      Above all else, I’d characterize myself as an avid learner.
    </TagLine>
    <Row>
      <Section1>
        <AboutMeHeader>About Me</AboutMeHeader>
        <P spaced>
          I’m a full-stack software engineer who specializes in putting together
          full-featured, data-intensive sites QUICKLY. Between architecting
          databases, handling migrations, creating RESTful APIs, and handling
          front-end state management, I focus on keeping data in a clean,
          approachable format.
        </P>
      </Section1>
      <HeadShotContainer>
        <HeadShot />
      </HeadShotContainer>
      <Section1>
        <DetailsHeader>Details</DetailsHeader>
        <P>
          <b>Name:</b>
          <br />
          Matthew L. Martin
          <br />
          <br />
          <b>Age:</b>
          <br />
          29
          <br />
          <br />
          <b>Location:</b>
          <br />
          San Francisco Bay Area (soon to be Boston though!),
          <br />
          United States
          <br />
          <br />
          <b>Non-technical interests:</b>
          <br />
          Mountain climbing, skiing, hiking, backpacking, camping
        </P>
      </Section1>
    </Row>
  </Container>
);

export default Profile;
