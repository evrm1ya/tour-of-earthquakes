import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import OverviewPage from '../containers/overview-page/OverviewPage';
import DetailPage from '../containers/detail-page/DetailPage';

export default <Route path='/' component={App}>
  <IndexRoute component={OverviewPage} />
  <Route path='detail/:earthquakeId' component={DetailPage} />
</Route>

