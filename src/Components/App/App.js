import React, { Component } from 'react';
import * as S from './styled';
import { withRouter } from 'react-router-dom';
import Header from './Header/Header';
import { BrowserRouter as Link, NavLink} from 'react-router-dom';


class App extends Component {
    state = {

    }

    
    render () {
        return (
            <S.Container>
                <Header />
            </S.Container>
        );
    }
}
export default withRouter(App);
