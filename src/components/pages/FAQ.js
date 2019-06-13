import React from 'react';
import styled from 'styled-components';
import { H1 } from '../atoms/Headers';
import Navbar from '../molecules/Navbar';
import HR from '../atoms/HR';
import P from '../atoms/P';
import Credential from '../molecules/Credential';
import theme from '../../theme';

const { colors } = theme;
const { DARK_GRAY, LIGHT_GRAY, BLUE } = colors;

const Container = styled.div`
  background-color: ${DARK_GRAY};
  padding: 60px 0;
`;
const Title = styled(H1)`
  padding-top: 30px;
  text-align: center;
  color: ${LIGHT_GRAY};
`;
const StyledHR = styled(HR)`
  color: ${LIGHT_GRAY};
`;
const Text = styled(P)`
  color: ${LIGHT_GRAY};
`;
const StyledCredential = styled(Credential)`
  h4 {
    color: ${LIGHT_GRAY};
  }
  padding: 0 20px;
`;
const Link = styled.a`
  color: ${BLUE};
`;

const FAQ = props => (
  <Container {...props}>
    <Navbar />
    <Title>Frequently Asked Questions</Title>
    <StyledHR />
    <StyledCredential
      position="Why did you make this site?"
      description={
        <Text spaced>
          I wanted a personal site; however, as I was looking through others’
          sites for inspiration, I knew I wanted something more than an online
          billboard. I wanted a site that could help facilitate quick,
          meaningful connections with anyone interested in reaching out. So, I
          added the authentication and calendar integrations in the hopes of
          meeting new people.
        </Text>
      }
    />
    <StyledCredential
      position="Why do I need to create an account?"
      description={
        <Text spaced>
          I allow users to directly book a time on my calendar to chat by phone.
          The sign-up process collects minimal information so I at least have
          some idea of who I’ll be speaking with. Also, I hope to add additional
          features to this site in the near future where having an account will
          be helpful.
        </Text>
      }
    />
    <StyledCredential
      position="Is this project open-source?"
      description={
        <Text spaced>
          Oh yeah! You can take a look{' '}
          <Link href="https://github.com/08martinm/personal-site-3">here</Link>.
          If you pull this down, you’ll need to configure your own environment
          variables in a top-level `.env` file (you can find the list of
          environment variables in `config/envVars`). Also, feel free to check
          out the git commit history – this project was started from an empty
          folder, and I tried to add features in a logical fashion.
        </Text>
      }
    />
    <StyledCredential
      position="Is it okay to reach out about contracting opportunities?"
      description={<Text spaced>Yeah, definitely!</Text>}
    />
    <StyledCredential
      position="Is it okay to reach out if about anything else?"
      description={<Text spaced>Yes!</Text>}
    />
    <StyledCredential
      position="Outside of software engineering, what do you like to do?"
      description={
        <Text spaced>
          I love almost any outdoors activity: surfing, skiing, snowboarding,
          biking, hiking, trail running, etc. Fun fact: I’ve climbed 15
          mountains over 14k ft. Most recently, I climbed Mt. Whitney in
          southern California with a group of friends and my wife. Notably, I am
          also a new father! My first son was born in May 2019; couldn’t be more
          excited about that.
        </Text>
      }
    />
  </Container>
);

export default FAQ;
