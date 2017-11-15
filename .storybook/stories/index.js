// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StickyNav from 'components/StickyNav';
import 'components/Global.css';

storiesOf('StickyNav', module)
  .add('default', () => (
    <StickyNav toggleSlideover={action('toggle slideover')} />
  ));
