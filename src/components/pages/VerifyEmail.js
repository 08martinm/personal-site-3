import React, { Component } from 'react';
import styled from 'styled-components';
import _split from 'lodash/split';
import _indexOf from 'lodash/indexOf';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Navbar from '../molecules/Navbar';
import { H1, H2, H3 } from '../atoms/Headers';
import { Link } from '../atoms/Links';
import HR from '../atoms/HR';
import LI from '../atoms/LI';
import P from '../atoms/P';
import theme from '../../theme';
import { verifyEmailAPI } from '../../api';

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

class VerifyEmail extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({ email: PropTypes.string.isRequired }).isRequired,
    }).isRequired,
  };

  state = {
    error: false,
  };

  componentDidMount = async () => {
    const paths = _split(window.location.pathname, '/');
    const token = paths[_indexOf(paths, 'verify-email') + 1];
    if (!token) {
      this.setState({ error: true });
    }

    try {
      await verifyEmailAPI({ token });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    const { location, ...props } = this.props;
    const { error } = this.state;
    if (error) {
      return <Redirect to="/verify/error" />;
    }
    return (
      <Container {...props}>
        <Navbar />
        <Title>Email Verified</Title>
        <StyledHR />
        <SubTitle>You{`'`}re account is now ready!</SubTitle>
        <NextSteps>Next Steps:</NextSteps>
        <OL>
          <StyledLI spaced>
            <Link to="/login">Log in here</Link>.
          </StyledLI>
          <StyledLI>Book a time to chat</StyledLI>
        </OL>
        <FinalText>I look forward to connecting with you</FinalText>
      </Container>
    );
  }
}
export default VerifyEmail;
