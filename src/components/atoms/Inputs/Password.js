import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';
import theme from '../../../theme';

const { colors } = theme;
const { ERROR, LIGHT_GRAY } = colors;

const propStyles = {
  showError: css`
    color: ${ERROR};
  `,
};

const Req = styled.span`
  color: ${LIGHT_GRAY};
  ${props => props.showError && propStyles.showError};
`;

const Password = props => {
  const { value, error } = props;
  const length = () => value.length < 8;
  const digit = () => !/[0-9]/.test(value);
  const lower = () => !/[a-z]/.test(value);
  const upper = () => !/[A-Z]/.test(value);
  return (
    <Input
      {...props}
      type="password"
      name=""
      helptext={
        <Fragment>
          <Req showError={error && length()}>Min. 8 char{`'`}s, </Req>
          <Req showError={error && digit()}>1 number, </Req>
          <Req showError={error && lower()}>1 lower, </Req>
          <Req showError={error && upper()}>1 upper.</Req>
        </Fragment>
      }
    />
  );
};

Password.propTypes = {
  autoComplete: PropTypes.string,
  error: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
};
Password.defaultProps = {
  autoComplete: undefined,
  label: '',
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
};

export default Password;
