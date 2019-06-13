import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../molecules/Navbar';
import { H1, H2, H3 } from '../atoms/Headers';
import HR from '../atoms/HR';
import LI from '../atoms/LI';
import P from '../atoms/P';
import theme from '../../theme';
import { FullPageBackground } from '../atoms/Containers';

const { colors } = theme;
const { LIGHTEST_GRAY } = colors;

const Title = styled(H1)`
  padding-top: 30px;
  color: ${LIGHTEST_GRAY};
  text-align: center;
  color: ${LIGHTEST_GRAY};
`;
const SubTitle = styled(H2)`
  margin: 30px 0 0;
  padding: 0 25px;
  color: ${LIGHTEST_GRAY};
`;
const NextSteps = styled(H3)`
  margin: 50px 0 0;
  padding: 0;
  font-weight: bold;
  color: ${LIGHTEST_GRAY};
`;
const StyledHR = styled(HR)`
  border-color: ${LIGHTEST_GRAY};
`;
const StyledLI = styled(LI)`
  color: ${LIGHTEST_GRAY};
`;
const OL = styled.ol`
  max-width: 650px;
  margin: 0;
`;
const FinalText = styled(P)`
  margin-top: 50px;
  color: ${LIGHTEST_GRAY};
`;

const SignupSuccess = ({ location, ...props }) => (
  <FullPageBackground {...props}>
    <Navbar />
    <Title>Email sent</Title>
    <StyledHR />
    <SubTitle>Thanks for creating an account!</SubTitle>
    <NextSteps>Next Steps:</NextSteps>
    <OL>
      <StyledLI spaced>
        Click on the “Verify” button in the email that was just sent to{' '}
        <i>{location.state.email}</i>.
      </StyledLI>
      <StyledLI>Book a time to chat</StyledLI>
    </OL>
    <FinalText>I look forward to connecting with you</FinalText>
  </FullPageBackground>
);

SignupSuccess.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ email: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default SignupSuccess;
