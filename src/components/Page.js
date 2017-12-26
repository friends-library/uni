// @flow
import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component';
import Loading from './Loading';

// $FlowFixMe
const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  loading: Loading,
});

const Page = ({ page }: { page: string }) => (
  <UniversalComponent page={page} />
);

const mapState = ({ page }): Object => ({
  page,
});

export default connect(mapState)(Page);
