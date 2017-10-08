import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ProposalPage from './containers/ProposalPage'; // eslint-disable-line import/no-named-as-default
import SubmitPost from './components/submitpost/SubmitPost';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProposalPage}/>
    <Route path="post" component={SubmitPost}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
