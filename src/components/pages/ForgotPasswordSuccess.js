import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../molecules/Navbar';
import { H1, H3 } from '../atoms/Headers';
import HR from '../atoms/HR';
import LI from '../atoms/LI';
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

const ForgotPasswordSuccess = ({ location, ...props }) => (
  <FullPageBackground {...props}>
    <Navbar />
    <Title>Email sent</Title>
    <StyledHR />
    <NextSteps>Next Steps:</NextSteps>
    <OL>
      <StyledLI spaced>
        Click on the “Reset Password” button in the email sent to you.
      </StyledLI>
      <StyledLI>Choose a new password</StyledLI>
    </OL>
  </FullPageBackground>
);

ForgotPasswordSuccess.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ email: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default ForgotPasswordSuccess;
