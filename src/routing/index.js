import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={App} />
            <PrivateRoute path="/register" component={Register} />
            <Route path="/upload" component={Upload} />
            <Route path="/discover" component={Discover} />
            <Route path="/you/library" component={Library} />
            <Route path="/you/likes" component={Likes} />
            <Route path="/you/playlists" component={Library} />
          </Switch>
        </PlayerProvider>
      </ToastProvider>
    </ThemeProvider>
  </Provider>
);

export default React.memo(AppRouter);
