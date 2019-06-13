import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/molecules/Navbar';
import store from '../../store';

const Background = styled.div`
  width: 100vw;
  position: relative;
`;

storiesOf('Molecules', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Navbar', () => (
    <Provider store={store}>
      <Background>
        <Navbar isLoggedIn={boolean('isLoggedIn', false)} />
      </Background>
    </Provider>
  ));
