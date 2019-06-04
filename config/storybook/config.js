import { configure, addDecorator } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import _forEach from 'lodash/forEach';

require('babel-polyfill');

const req = require.context('../../src/stories', true, /.jsx?$/);

function loadStories() {
  _forEach(req.keys(), filename => req(filename));
}

addDecorator(
  withBackgrounds([
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'blue', value: '#15caf8' },
    { name: 'blue', value: 'red' },
  ]),
);
addDecorator(withKnobs);
addDecorator(centered);
addDecorator(checkA11y);

configure(loadStories, module);
