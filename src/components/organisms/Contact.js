import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import _some from 'lodash/some';
import _get from 'lodash/get';
import { H1, H3 } from '../atoms/Headers';
import HR from '../atoms/HR';
import LI from '../atoms/LI';
import P from '../atoms/P';
import { Input, Password, TextArea } from '../atoms/Inputs';
import Button from '../atoms/Button';
import theme from '../../theme';
import { postUser } from '../../api';

const { colors } = theme;
const { DARKEST_GRAY, ERROR } = colors;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: ${DARKEST_GRAY};
  width: 100vw;
  box-sizing: border-box;
  padding: 0 20px;
`;
const Title = styled(H1)`
  padding-top: 30px;
  text-align: center;
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
const OL = styled.ol`
  width: 80%;
  max-width: 600px;
`;
const TagLine = styled(P)`
  width: 80%;
  max-width: 600px;
`;
const ErrorText = styled(P)`
  color: ${ERROR};
  text-align: center;
  margin: 30px 0 0;
`;

class Skills extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    description: '',
    showError: false,
    errors: {},
    success: false,
  };

  handleChange = field => e => {
    const { showError } = this.state;
    let errors;

    if (showError) {
      errors = this.validate({ ...this.state, [field]: e.target.value });
    }

    this.setState({ [field]: e.target.value, ...(showError && { errors }) });
  };

  validate = ({ firstName, lastName, email, password, description }) => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(email)) {
      errors.email = 'Please provide a valid email';
    }
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
    if (!description) {
      errors.description = 'Please provide a valid description';
    }

    return errors;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    if (_some(errors)) {
      return this.setState({ errors, showError: true });
    }

    const { firstName, lastName, email, password, description } = this.state;
    const userFields = { firstName, lastName, email, password, description };
    try {
      await postUser(userFields);
      this.setState({ success: true, serverError: false });
    } catch (error) {
      const message = _get(
        error,
        'response.data.message',
        'Oops! We encountered an error. Please try again.',
      );
      this.setState({ serverError: message, success: false });
    }
    return undefined;
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      description,
      showError,
      errors,
      success,
      serverError,
    } = this.state;
    const {
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      password: passwordError,
      description: descriptionError,
    } = errors;

    if (success) {
      return (
        <Redirect
          to={{
            pathname: '/signed-up',
            state: { email },
          }}
        />
      );
    }

    return (
      <Container id="Contact" {...this.props}>
        <Title color="white">Contact</Title>
        <HR color="white" />
        <H3 color="white">Let{`'`}s Connect</H3>
        <TagLine color="white">
          I’d love to hear from you. The process to get in touch is easy:
        </TagLine>
        <OL color="white">
          <LI color="white">Create an account below.</LI>
          <LI color="white">
            Check for a confirmation email & click its “Verify” link.
          </LI>
          <LI color="white">
            You{`'`}ll be directed to a page with my calendar. Book a time to
            chat; I look forward to meeting you!
          </LI>
        </OL>
        {serverError && <ErrorText>{serverError}</ErrorText>}
        <Form onSubmit={this.handleSubmit}>
          <Input
            id="firstName"
            type="text"
            name="fname"
            helptext={showError && firstNameError}
            error={!!firstNameError}
            label="First Name"
            value={firstName}
            onChange={this.handleChange('firstName')}
          />
          <Input
            id="lastName"
            type="text"
            name="lname"
            helptext={showError && lastNameError}
            error={!!lastNameError}
            label="Last Name"
            value={lastName}
            onChange={this.handleChange('lastName')}
          />
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
          <Password
            label="Password"
            value={password}
            error={!!passwordError}
            onChange={this.handleChange('password')}
          />
          <TextArea
            placeholder="How can I help you?"
            error={!!descriptionError}
            value={description}
            helptext={showError && descriptionError}
            onChange={this.handleChange('description')}
          />
          <Button status={showError && (_some(errors) ? 'error' : 'success')}>
            Send
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Skills;
