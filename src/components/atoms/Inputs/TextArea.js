import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DivContainer from './shared/Container';
import inputStyles from './shared/inputStyles';
import Helptext from './shared/HelpText';

const StyledTextArea = styled.textarea`
  ${inputStyles};
  height: 100px;
`;

const TextInput = ({
  error,
  onBlur,
  onChange,
  onClick,
  onFocus,
  value,
  placeholder,
  helptext,
  ...props
}) => {
  const inputProps = {
    placeholder,
    error,
    onBlur,
    onChange,
    onClick,
    onFocus,
    value,
  };
  return (
    <DivContainer helptext={helptext} {...props}>
      <StyledTextArea {...inputProps} />
      {helptext && <Helptext helptext={helptext} error={error} />}
    </DivContainer>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  helptext: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};
TextInput.defaultProps = {
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
};

export default TextInput;
