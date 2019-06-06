import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DivContainer from './shared/Container';
import Label from './shared/Label';
import inputStyles from './shared/inputStyles';
import Helptext from './shared/HelpText';

const StyledInput = styled.input`
  ${inputStyles};
`;

const TextInput = ({
  autoComplete,
  error,
  name,
  onBlur,
  onChange,
  onClick,
  onFocus,
  type,
  value,
  helptext,
  label,
  ...props
}) => {
  const inputProps = {
    autoComplete,
    error,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    type,
    value,
  };

  const labelProps = { label, name, value };
  return (
    <DivContainer helptext={helptext} {...props}>
      <StyledInput {...inputProps} />
      {label && <Label {...labelProps} />}
      {helptext && <Helptext helptext={helptext} error={error} />}
    </DivContainer>
  );
};

TextInput.propTypes = {
  autoComplete: PropTypes.string,
  error: PropTypes.bool.isRequired,
  helptext: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};
TextInput.defaultProps = {
  type: 'text',
  autoComplete: undefined,
  helptext: '',
  label: '',
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
};

export default TextInput;
