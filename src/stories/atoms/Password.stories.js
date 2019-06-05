import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Password } from '../../components/atoms/Inputs';

const Background = styled.div`
  padding: 25px;
  border-radius: 15px;
  background-color: #333;
  min-width: 500px;
`;

const ControlledPassword = props => {
  const [val, setVal] = useState('');
  const handleChange = e => setVal(e.target.value);
  return (
    <Background>
      <Password {...props} value={text('value', val)} onChange={handleChange} />
    </Background>
  );
};
storiesOf('Atoms', module).add('Password', () => (
  <ControlledPassword
    error={boolean('error', false)}
    label={text('label', 'Password')}
  />
));
