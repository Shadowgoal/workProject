import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './../redux/index';
import App from '../Components/App/App';
import Upload from '../Components/Upload/Upload';
import { Provider } from 'react-redux'

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