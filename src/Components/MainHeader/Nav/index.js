import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as S from './styled';


const Nav = (props) => {
  return (
      <S.Container>
        <S.NavBtn to='/'>
          Home
        </S.NavBtn>
        <S.NavBtn to={props.isLoggedIn ? '/' : '/register'}>
          Stream
        </S.NavBtn>
        <S.NavBtn to={props.isLoggedIn ? '/' : '/register'}>
          Library
        </S.NavBtn>
      </S.Container>
  )
};
const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));