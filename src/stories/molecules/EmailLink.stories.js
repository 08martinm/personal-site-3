import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import EmailLink from '../../components/molecules/EmailLink';

const Container = styled.div`
  background-color: #333;
  padding: 25px;
  border-radius: 5px;
`;

storiesOf('Molecules', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('EmailLink', () => (
    <Container>
      <EmailLink>08martinm@gmail.com</EmailLink>
    </Container>
  ));
