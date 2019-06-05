import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { TextArea } from '../../components/atoms/Inputs';

const Background = styled.div`
  padding: 25px;
  border-radius: 15px;
  background-color: #333;
  min-width: 500px;
`;

const ControlledTextArea = props => {
  const [val, setVal] = useState('');
  const handleChange = e => setVal(e.target.value);
  return (
    <Background>
      <TextArea {...props} value={text('value', val)} onChange={handleChange} />
    </Background>
  );
};
storiesOf('Atoms', module).add('TextArea', () => (
  <ControlledTextArea
    error={boolean('error', false)}
    placeholder={text('placeholder', 'How can I help you?')}
    helptext={text('helptext', 'This field is required')}
  />
));
