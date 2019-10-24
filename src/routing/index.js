import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'redux/index';

import App from 'modules/App';
import Register from 'modules/Register';
import Upload from 'modules/Upload';
import Discover from 'modules/Discover';
import PlayControl from 'components/PlayControl';

import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <PrivateRoute path="/register" component={Register} />
      <Route path="/upload" component={Upload} />
      <Route path="/discover" component={Discover} />
      <PlayControl />
    </Router>
  </Provider>
);

export default AppRouter;
