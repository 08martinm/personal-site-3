import React, { Fragment } from 'react';
import styled from 'styled-components';
import { H1 } from '../atoms/Headers';
import HR from '../atoms/HR';
import P from '../atoms/P';
import Credential from '../molecules/Credential';
import theme from '../../theme';

const { colors } = theme;
const { LIGHTEST_GRAY } = colors;

const Container = styled.div`
  background-color: ${LIGHTEST_GRAY};
  width: 100vw;
`;
const Title = styled(H1)`
  padding-top: 30px;
  text-align: center;
`;

const Education = props => (
  <Container {...props}>
    <Title>Education</Title>
    <HR />
    <Credential
      position="Self Learning"
      description={
        <P spaced>
          I am profoundly grateful for the variety of educational opportunities
          listed below; however, I would like to clearly state how much
          self-study has been involved in my transition from liberal arts to
          finance to technology to entrepreneurship. Intellectual curiosity has
          long been one of my guiding principle – understanding the “how” and
          the “why” underlying each task that I take on.
        </P>
      }
    />
    <Credential
      position="MIT Sloan"
      description={
        <P spaced>
          I am currently a student in MIT Sloan’s Class of 2021. My focus is on
          software-based entrepreneurship.
        </P>
      }
    />
    <Credential
      position="ConsenSys Academy"
      description={
        <Fragment>
          <P spaced>
            ConsenSys Academy provides in-depth training on Ethereum developer
            tools, deployment processes, safety features, and architectural
            patterns.
          </P>
          <P spaced>
            The course is structured with online video tutorials covering a
            broad range of Ethereum-related topics. The course concludes with
            students creating their own decentralized application (dApp) that
            implements specified security features.
          </P>
          <P spaced>
            I created a decentralized bounty dApp, that allows users to post and
            claim bounties and dispute bounty resolutions. For this project, I
            created five smart contracts, utilized two libraries, and made use
            of Oraclize, an on-chain API provider. This app was equipped with a
            front-end GUI with MetaMask integration.
          </P>
        </Fragment>
      }
    />
    <Credential
      position="CFA Institute"
      description={
        <Fragment>
          <P spaced>
            The Chartered Financial Analyst (CFA) Program is a professional
            credential offered to investment and financial professionals after a
            candidate gains four years of relevant work experience and completes
            three comprehensive tests, each spaced apart by at least one year.
            The curriculum covers investment management, financial analysis,
            quantitative analysis, equities, fixed income, and derivatives.
          </P>
          <P spaced>
            I completed all three exams and earned the CFA credential in 2016.
          </P>
        </Fragment>
      }
    />
    <Credential
      position="Hack Reactor"
      description={
        <P spaced>
          Hack Reactor is an immersive, three-month coding boot camp that
          focuses on teaching the fundamentals of programming. Among the various
          boot camps, Hack Reactor was known for having a highly selective
          admissions process, accepting students who had already put in a
          significant amount of self-study. As a student, I spent between 60-90
          hours studying software development per week for 12 weeks.
        </P>
      }
    />
    <Credential
      position="Davidson College"
      description={
        <P spaced>
          Davidson College is a liberal arts college in North Carolina. US News
          & World Report ranks Davidson College as among the top 10 National
          Liberal Arts Colleges. While at Davidson, I explored Spanish
          Literature and Economics and created a program that connects Davidson
          College students with Argentinians via Skype to practice foreign
          language speaking skills.
        </P>
      }
    />
  </Container>
);

export default Education;
