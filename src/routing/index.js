import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

import store from 'redux/index';

import App from 'modules/App';
import Register from 'modules/Register';
import Upload from 'modules/Upload';
import Discover from 'modules/Discover';
import Library from 'modules/Library';
import Likes from 'modules/Likes';
import PlayerProvider from 'components/PlayerProvider';
import { theme } from './theme';

import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ToastProvider PlacementType="bottom-center">
        <PlayerProvider>
          <Router>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/upload" component={Upload} />
            <PrivateRoute path="/discover" component={Discover} />
            <PrivateRoute path="/you/library" component={Library} />
            <PrivateRoute path="/you/likes" component={Likes} />
            <PrivateRoute path="/you/playlists" component={Library} />
          </Router>
        </PlayerProvider>
      </ToastProvider>
    </ThemeProvider>
  </Provider>
);

export default React.memo(AppRouter);
