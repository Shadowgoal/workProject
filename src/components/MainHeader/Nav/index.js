import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const Nav = (props) => (
  <S.Container>
    <S.NavBtn to={props.isLoggedIn ? '/discover' : '/'}>
      Home
    </S.NavBtn>
    <S.NavBtn to={props.isLoggedIn ? '/discover' : '/register'}>
      Stream
    </S.NavBtn>
    <S.NavBtn to={props.isLoggedIn ? '/discover' : '/register'}>
      Library
    </S.NavBtn>
  </S.Container>
);

Nav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isModalOpened: state.isModalOpened,
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
