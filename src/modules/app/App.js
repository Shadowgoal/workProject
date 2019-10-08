import React, { Component } from 'react';
import * as S from './styled';
import { withRouter } from 'react-router-dom';
import Header from './../../components/header/Header';
import Modal from './../../components/header/modal/Modal';

class App extends Component {
    
    render () {
        return (
            <S.MainContainer>
                <Modal />
                <S.Container>
                    <Header />
                </S.Container>
            </S.MainContainer>
        );
    }
}


export default withRouter(App);
