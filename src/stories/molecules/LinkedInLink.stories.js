import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import LinkedInLink from '../../components/molecules/LinkedInLink';

const Container = styled.div`
  background-color: #333;
  padding: 25px;
  border-radius: 5px;
`;

storiesOf('Molecules', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('LinkedInLink', () => (
    <Container>
      <LinkedInLink>linkedin.com/in/08martinm</LinkedInLink>
    </Container>
  ));
