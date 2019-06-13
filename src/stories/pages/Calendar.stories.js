import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Calendar from '../../components/pages/Calendar';
import store from '../../store';

storiesOf('Pages', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Calendar', () => (
    <Provider store={store}>
      <Calendar />
    </Provider>
  ));
