import React, { useEffect } from 'react';
import {
  Redirect, Route, Router, Switch,
} from 'react-router';
import { createBrowserHistory } from 'history';
import notFound404 from './notFound404';
import Blog from './Blog/container';
import { connectSocket } from '../redux/socket.wrapper';

const customHistory = createBrowserHistory();

function AppContainer() {
  useEffect(() => {
    connectSocket();
  });
  return (
    <Router history={customHistory}>
      <Switch>
        <Redirect exact from="/" to="/blog" />
        <Route path="/blog" component={Blog} />
        <Route component={notFound404} />
      </Switch>
    </Router>
  );
}
export default AppContainer;
