import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const PlayControl = (props) => (
  <S.PlayControlContainer visible={props.isLoggedIn}>
  </S.PlayControlContainer>
);

PlayControl.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ isLoggedIn: state.isLoggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayControl);
