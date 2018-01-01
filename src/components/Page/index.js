// @flow
import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component';

// $FlowFixMe
const UniversalComponent = universal(({ page }) => import(`./components/${page}/Container`));

const Page = ({ page }: { page: string }) => (
  <UniversalComponent page={page} />
);

const mapState = ({ page }): Object => ({
  page,
});

export default connect(mapState)(Page);
