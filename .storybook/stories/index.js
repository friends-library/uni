// @flow
import * as React from 'react';
import { safeLoad } from 'js-yaml';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StickyNav from 'components/StickyNav';
import DocumentTeaser from 'components/Page/components/Friend/components/DocumentTeaser';
import FriendPage from 'components/Page/components/Friend';
import DocumentPage from 'components/Page/components/Document';
import Edition from 'components/Page/components/Document/components/Edition';
import friendFromJS from 'classes/map';
import 'components/Global.css';

// $FlowFixMe
import { body as yml } from '@friends-library/friends/src/en/rebecca-jones.yml';

const js: Object = safeLoad(yml);
const rebecca = friendFromJS(js);
const journal = rebecca.documents[0];

const Padded = (storyFn: () => React.Node) => (
  <div style={{ padding: '30px' }}>
    { storyFn() }
  </div>
);

storiesOf('StickyNav', module)
  .add('default', () => (
    <StickyNav toggleSlideover={action('toggle slideover')} />
  ));

storiesOf('DocumentTeaser', module)
  .addDecorator(Padded)
  .add('default', () => <DocumentTeaser document={journal} friend={rebecca} />);

storiesOf('FriendPage', module)
  .add('default', () => <FriendPage friend={rebecca} />);

storiesOf('DocumentPage', module)
  .add('default', () => <DocumentPage document={journal} />);

storiesOf('Edition', module)
  .addDecorator(Padded)
  .add('default', () => <Edition edition={journal.editions[0]} />);
