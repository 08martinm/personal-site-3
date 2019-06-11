import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import _some from 'lodash/some';
import _get from 'lodash/get';
import Navbar from '../molecules/Navbar';
import { H1 } from '../atoms/Headers';
import HR from '../atoms/HR';
import { Input } from '../atoms/Inputs';
import Button from '../atoms/Button';
import P from '../atoms/P';
import { Link } from '../atoms/Links';
import { loginAPI } from '../../api';
import theme from '../../theme';
import { COOKIE_NAME, COOKIE_VALUE } from '../../../common/cookie';

const { colors } = theme;
const { DARK_GRAY, LIGHT_GRAY, ERROR } = colors;

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
  color: ${LIGHT_GRAY};
  text-align: center;
`;
const StyledHR = styled(HR)`
  border-color: ${LIGHT_GRAY};
`;
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin: 50px 0;
  & > * {
    margin: 10px 0 0;
  }
`;
const Text = styled(P)`
  color: ${LIGHT_GRAY};
  text-align: center;
`;
const ErrorText = styled(P)`
  color: ${ERROR};
  text-align: center;
  margin: 30px 0 0;
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
    showError: false,
    errors: {},
    success: false,
    serverError: '',
  };

  handleChange = field => e => {
    const { showError } = this.state;
    let errors;

    if (showError) {
      errors = this.validate({ ...this.state, [field]: e.target.value });
    }

    this.setState({ [field]: e.target.value, ...(showError && { errors }) });
  };

  validate = ({ email, password }) => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(email)) {
      errors.email = 'Please provide a valid email';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    if (_some(errors)) {
      return this.setState({ errors, showError: true });
    }

    const { email, password } = this.state;
    const { cookies } = this.props;
    try {
      await loginAPI({ email, password });
      cookies.set(COOKIE_NAME, COOKIE_VALUE);
      this.setState({ success: true });
    } catch (error) {
      const message = _get(
        error,
        'response.data.message',
        'Oops! We encountered an error. Please try again.',
      );
      this.setState({ serverError: message, showError: true });
    }
    return undefined;
  };

  render() {
    const {
      email,
      password,
      showError,
      errors,
      success,
      serverError,
    } = this.state;
    const { email: emailError, password: passwordError } = errors;
    const { isLoggedIn } = this.props;
    if (success) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Navbar isLoggedIn={isLoggedIn} />
        <Title>Log In</Title>
        <StyledHR />
        {serverError && <ErrorText>{serverError}</ErrorText>}
        <Form onSubmit={this.handleSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            helptext={showError && emailError}
            error={!!emailError}
            label="Email"
            value={email}
            onChange={this.handleChange('email')}
          />
          <Input
            id="password"
            type="password"
            name="password"
            helptext={showError && passwordError}
            error={!!passwordError}
            label="Password"
            value={password}
            onChange={this.handleChange('password')}
          />
          <Button status={showError && (_some(errors) && 'error')}>Send</Button>
        </Form>
        <Text>
          Forgot your password?
          <br />
          <Link to="/forgot-password">Reset password here.</Link>
        </Text>
        <Text>
          Haven{`'`}t created an account?
          <br />
          <Link to="/">Sign up here.</Link>
        </Text>
      </Container>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  cookies: instanceOf(Cookies).isRequired,
};

export default withCookies(Login);
