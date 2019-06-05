import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Input } from '../../components/atoms/Inputs';

const Background = styled.div`
  padding: 25px;
  border-radius: 15px;
  background-color: #333;
`;

const ControlledInput = props => {
  const [val, setVal] = useState('');
  const handleChange = e => setVal(e.target.value);
  return (
    <Background>
      <Input {...props} value={text('value', val)} onChange={handleChange} />
    </Background>
  );
};
storiesOf('Atoms', module).add('Input', () => (
  <ControlledInput
    autocomplete={text('autocomplete', '')}
    error={boolean('error', false)}
    name={text('name', 'example')}
    type={text('type', 'text')}
    helptext={text('helptext', 'Help Text')}
    label={text('label', 'Placeholder')}
  />
));
