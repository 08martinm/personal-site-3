import React from 'react';
import styled from 'styled-components';
import Navbar from '../molecules/Navbar';
import { H1, H2 } from '../atoms/Headers';
import { Link } from '../atoms/Links';
import HR from '../atoms/HR';
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
const StyledHR = styled(HR)`
  border-color: ${LIGHTEST_GRAY};
`;
const StyledP = styled(P)`
  color: ${LIGHTEST_GRAY};
`;

const VerifyError = props => (
  <FullPageBackground {...props}>
    <Navbar />
    <Title>Uh oh...</Title>
    <StyledHR />
    <SubTitle>We weren{`'`}t able to verify your email</SubTitle>
    <StyledP spaced>
      Let{`'`}s try again. Get a new email verification link{' '}
      <Link to="/resend-verification">here</Link>.
    </StyledP>
  </FullPageBackground>
);

export default VerifyError;
