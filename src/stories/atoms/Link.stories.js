import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Link, NavLink } from '../../components/atoms/Links';

const Background = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 50px;
  border-radius: 25px;
  height: 100px;
`;

storiesOf('Atoms', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Links', () => (
    <Background>
      <Link to={text('Nav to', '/somewhere')}>
        {text('Link Text', 'Sample Link')}
      </Link>
      <NavLink
        to={text('Nav to', '/somewhere')}
        active={boolean('NavLink active', true)}
      >
        {text('NavLink Text', 'Sample NavLink')}
      </NavLink>
    </Background>
  ));
