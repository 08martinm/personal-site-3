import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import P from '../../components/atoms/P';

storiesOf('Atoms', module).add('P', () => (
  <P spaced={boolean('spaced', false)}>
    {text(
      'P Text',
      'Lorem ipsum dolor amet bushwick man bun viral XOXO direct trade health goth kitsch tattooed flannel pour-over bitters pickled craft beer DIY. Leggings post-ironic bicycle rights letterpress cliche echo park roof party small batch yr hoodie bespoke DIY keytar. Chambray selfies authentic marfa vape, raw denim migas meggings austin. Tattooed kickstarter hashtag prism, scenester intelligentsia cloud bread. Kogi wayfarers poutine migas slow-carb microdosing raclette kitsch beard adaptogen intelligentsia asymmetrical af leggings fashion axe.',
    )}
  </P>
));
