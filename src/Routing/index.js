import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../Components/App/App'
import Upload from '../Components/Upload/Upload'

const AppRouter = () => {
    return(
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/upload" component={Upload} />
        </Router>
    )
}

export default AppRouter;