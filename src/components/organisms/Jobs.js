import React, { Fragment } from 'react';
import styled from 'styled-components';
import { H1 } from '../atoms/Headers';
import HR from '../atoms/HR';
import P from '../atoms/P';
import Credential from '../molecules/Credential';
import theme from '../../theme';
import { SectionContainer } from '../atoms/Containers';

const { colors } = theme;
const { LIGHT_GRAY } = colors;

const Container = styled(SectionContainer)`
  background-color: ${LIGHT_GRAY};
`;
const Title = styled(H1)`
  padding-top: 30px;
  text-align: center;
`;

const Jobs = props => (
  <Container id="Work" {...props}>
    <Title>Professional Experience</Title>
    <HR />
    <Credential
      name="CoFi"
      position="Senior Software Engineer"
      description={
        <P spaced>
          CoFi resulted from the merging of several smaller teams within the
          broader ConsenSys accelerator focused on offering blockchain-backed
          securities to accredited investors. I was responsible for cleaning up
          an existing codebase to better allow multiple developers to work
          together. I also handled the authentication and Know-Your-Customer
          (KYC) pieces. The stack included: React, Redux, Webpack, Docker, AWS,
          ESLint, Prettier, Express, Joi (for API request/response validation),
          mySQL, and PostgreSQL.
        </P>
      }
    />
    <Credential
      name="ConsenSys Digital Securities"
      position="Senior Software Engineer"
      description={
        <P spaced>
          ConsenSys Digital Securities offered blockchain-backed securities to
          accredited investors. I worked closely with two other developers to
          create the entire platform and was responsible for everything from
          devops (heavily using Docker and Aptible for deployment), to stack
          selection, to database architecture, to front-end interfaces, to
          creating a RESTful API, to design work. In addition to the above, I
          managed our team’s scrum, Jira tickets, and coordination with our
          business developers. The stack included: React, Redux, Webpack,
          Docker, CircleCI, ESLint, Prettier, Express, Joi (for API
          request/response validation), mySQL, and PostgreSQL.
        </P>
      }
    />
    <Credential
      name="RigUp"
      position="Senior Software Engineer"
      description={
        <P spaced>
          RigUp connects employers with contract workers in the oil and gas
          industry. I worked on Data & Integrations team and the Invoicing
          Platform feature. Through my work on the Data & Integrations team, I
          researched and put together a proposal to use Kafka for real-time data
          streaming. For the Invoicing Platform, I worked in AngularJS and Ruby
          on Rails to enable users to bill for hours worked or services
          provided.
        </P>
      }
    />
    <Credential
      name="Token Foundry"
      position="Software Engineer"
      description={
        <P spaced>
          Token Foundry facilitates Ethereum-based token sales designed to
          cultivate network effects for growing companies. I was responsible for
          creating the profile page and user-registration flow, which collected
          a users’ information, photos of the individual and the individual’s
          identification, performed a background check using a third-party API,
          and notified the user of their registration status. The stack
          included: Koa (a light middleware-focused framework built on Node.js,
          similar to Express), server-side-rendering, React front-end.
        </P>
      }
    />
    <Credential
      name="Stanford Consulting Group"
      position="Financial Analyst, Software Engineer"
      description={
        <Fragment>
          <P spaced>
            Company insiders are legally barred from making false or misleading
            statements that artificially inflate their company’s securities
            prices. News of such behavior typically results in a sharp decline
            in these securities prices, incurring losses to investors. To recoup
            monetary damages, investors may file a class action lawsuit against
            the company and its management.
          </P>

          <P spaced>That’s where we came in.</P>

          <P spaced>
            Using empirical techniques developed in the academic literature on
            financial economics, we assisted the court in the evaluation of
            market efficiency, which effectively linked the release of new
            information to price changes in the company’s securities.
          </P>

          <P spaced>
            If the court deemed the market efficient, we estimated damages
            incurred as a result of Defendants’ fraudulent conduct. Generally
            speaking, we employed arbitrage pricing theory to model the
            security’s expected return as a function of relevant risk factors
            that influenced prices as the fraud was revealed to the market. A
            baseline analysis might involve removing systematic market and
            industry effects to isolate the company-specific returns on
            corrective disclosure dates. We combined the company-specific
            returns with proprietary models of investor trading behavior to then
            estimate class-wide damages.
          </P>

          <P spaced>
            The legal process continues with depositions and trial testimony, in
            which experts at Stanford Consulting Group take the witness stand.
            We additionally provided rebuttal reports that assess the validity
            of opposing witnesses’ analyses to help reach a final verdict either
            by the court or a settlement via mediation.
          </P>
        </Fragment>
      }
    />
    <Credential
      name="JPMorgan"
      position="Financial Analyst"
      description={
        <Fragment>
          <P spaced>
            I served as an Analyst for the Ultra High Net Worth Hedge Fund
            Principals Group.
          </P>

          <P spaced>
            The J.P. Morgan Private Bank offers a broad platform of wealth
            management solutions for high net worth individuals/families and is
            comprised of teams that specialize in leveraging this platform for
            specific client groupings. I supported a team catering to hedge fund
            managers. We designed and implemented creative strategies to meet
            the unique needs of financially-savvy and high-profile clients who
            possess large market exposure through their funds’ performance.
          </P>

          <P spaced>
            We developed investment portfolios optimized to sustain and grow
            trans-generational wealth, analyzed projected wealth outcomes and
            market trends to inform current decision making, evaluated and
            addressed risks to clients’ wealth plans, developed tax-efficient
            and effective charitable-giving strategies, and made investment
            decisions and advice accounting for our clients’ concentrated
            positions.
          </P>

          <P spaced>
            The Hedge Fund Principals Group itself was comprised of bankers,
            investors, and credit specialists. As a banking analyst, I served in
            a client-interfacing, generalist role responsible for quarterbacking
            and facilitating internal operations while engaging with clients to
            understand their needs and communicate our results.
          </P>

          <P spaced>
            Personal initiatives included developing a proprietary covered-call
            portfolio profit and loss template implemented by a key client and
            automating time-consuming manual processes using Excel VBA.
          </P>
        </Fragment>
      }
    />
  </Container>
);

export default Jobs;
