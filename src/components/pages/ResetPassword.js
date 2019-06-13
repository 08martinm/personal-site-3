import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import _split from 'lodash/split';
import _some from 'lodash/some';
import _get from 'lodash/get';
import Navbar from '../molecules/Navbar';
import { H1 } from '../atoms/Headers';
import HR from '../atoms/HR';
import { Input, Password } from '../atoms/Inputs';
import Button from '../atoms/Button';
import P from '../atoms/P';
import { Link } from '../atoms/Links';
import { resetPasswordAPI } from '../../api';
import theme from '../../theme';
import { FullPageBackground } from '../atoms/Containers';

const { colors } = theme;
const { LIGHT_GRAY, ERROR } = colors;

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
    margin: 25px 0 0;
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

class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
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

  validate = ({ password, confirmPassword }) => {
    const errors = {};

    if (!password) {
      errors.password = 'Password is required';
    } else if (
      password.length < 8 ||
      !/[0-9]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      errors.password = 'Please provide a valid password';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords must match';
    }

    return errors;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    if (_some(errors)) {
      return this.setState({ errors, showError: true });
    }

    const { password } = this.state;
    const paths = _split(window.location.pathname, '/');
    const forgotPasswordToken = paths[paths.length - 1];
    if (!forgotPasswordToken) {
      this.setState({ error: true });
    }
    try {
      await resetPasswordAPI({ password, forgotPasswordToken });
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
      password,
      confirmPassword,
      showError,
      errors,
      success,
      serverError,
    } = this.state;
    const {
      password: passwordError,
      confirmPassword: confirmPasswordError,
    } = errors;
    if (success) {
      return <Redirect to="/reset-password/success" />;
    }
    return (
      <FullPageBackground {...this.props}>
        <Navbar />
        <Title>Reset Password</Title>
        <StyledHR />
        {serverError && <ErrorText>{serverError}</ErrorText>}
        <Form onSubmit={this.handleSubmit}>
          <Password
            label="Password"
            value={password}
            error={!!passwordError}
            onChange={this.handleChange('password')}
          />
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            helptext={showError && confirmPasswordError}
            error={!!confirmPasswordError}
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange('confirmPassword')}
          />
          <Button status={showError && (_some(errors) && 'error')}>Send</Button>
        </Form>
        <Text>
          Want to log in?
          <br />
          <Link to="/login">Log in here.</Link>
        </Text>
        <Text>
          Haven{`'`}t created an account?
          <br />
          <Link to="/">Sign up here.</Link>
        </Text>
      </FullPageBackground>
    );
  }
}

export default ResetPassword;
