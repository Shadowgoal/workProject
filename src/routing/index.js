import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import store from 'redux/index';

import App from 'modules/App';
import Register from 'modules/Register';
import Upload from 'modules/Upload';
import Discover from 'modules/Discover';
import Library from 'modules/Library';
import Likes from 'modules/Likes';
import PlayerProvider from 'components/PlayerProvider';

import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <Provider store={store}>
    <ToastProvider PlacementType="bottom-center">
      <PlayerProvider>
        <Router>
          <Route exact path="/" component={App} />
          <PrivateRoute path="/register" component={Register} />
          <Route path="/upload" component={Upload} />
          <Route path="/discover" component={Discover} />
          <Route path="/you/library" component={Library} />
          <Route path="/you/likes" component={Likes} />
          <Route path="/you/playlists" component={Library} />
        </Router>
      </PlayerProvider>
    </ToastProvider>
  </Provider>
);

export default React.memo(AppRouter);
