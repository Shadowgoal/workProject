import React, { Component } from 'react';
import * as S from './styled';
import { withRouter } from 'react-router-dom';
import Header from './Header/Header';
import Modal from './Modal/Modal';


class App extends Component {
    state = {

    }

    
    render () {
        return (
            <S.MainContainer>
                <S.Container>
                    <Header />
                    <Modal />
                </S.Container>
            </S.MainContainer>
        );
    }
}
export default withRouter(App);
