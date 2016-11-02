import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import OverviewPage from '../containers/overview-page/OverviewPage';
import DetailPage from '../containers/detail-page/DetailPage';

const PATH_ROOT = (process.env.NODE_ENV === 'production') ? '/tour-of-earthquakes/' : '/'

export default <Route path={PATH_ROOT} component={App}>
  <IndexRoute component={OverviewPage} />
  <Route path={PATH_ROOT + 'detail'} component={DetailPage} />
</Route>

