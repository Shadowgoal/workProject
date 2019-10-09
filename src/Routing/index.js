import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from 'redux/index';

import App from 'modules/App';
import Upload from 'modules/Upload';

const AppRouter = () => {
  return(
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/upload" component={Upload} />
      </Router>
    </Provider>
  )
}

export default AppRouter;