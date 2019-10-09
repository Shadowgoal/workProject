import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Modal from 'components/Header/Modal';

import * as S from './styled';

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
