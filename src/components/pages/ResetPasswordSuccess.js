import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../molecules/Navbar';
import { H1, H2 } from '../atoms/Headers';
import HR from '../atoms/HR';
import P from '../atoms/P';
import { Link } from '../atoms/Links';
import theme from '../../theme';

const { colors } = theme;
const { LIGHTEST_GRAY, DARK_GRAY } = colors;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${DARK_GRAY};
  padding: 50px 0;
`;
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
  max-width: 500px;
  text-align: center;
`;

const ResetPasswordSuccess = ({ location, ...props }) => (
  <Container {...props}>
    <Navbar />
    <Title>Password Reset</Title>
    <StyledHR />
    <SubTitle>Good work</SubTitle>
    <StyledP spaced>
      You successfully updated your password!
      <br />
      Now you can log in <Link to="/login">here</Link>.
    </StyledP>
  </Container>
);

ResetPasswordSuccess.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ email: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default ResetPasswordSuccess;
