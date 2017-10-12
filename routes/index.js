import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import OverviewPage from '../containers/overview-page/OverviewPage';
import DetailPage from '../containers/detail-page/DetailPage';

const root = process.env.NODE_ENV === 'production'
  ? '/tour-of-earthquakes/'
  : '/';

export default <Route path={root} component={App}>
  <IndexRoute component={OverviewPage} />
  <Route 
    path={`${root}detail/:earthquakeId`}
    component={DetailPage} 
  />
</Route>

