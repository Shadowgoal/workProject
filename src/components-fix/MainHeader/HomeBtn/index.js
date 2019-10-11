import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const HomeBtn = (props) => (
  <S.Btn to="/">
    <S.Logo />
    <S.TextLogo isVisible={props.isLoggedIn}>
      SOUNDCLOUD
    </S.TextLogo>
  </S.Btn>
);

HomeBtn.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ isLoggedIn: state.isLoggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeBtn));
