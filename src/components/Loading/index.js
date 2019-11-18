import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Loading = ({ isLoading }) => (
  <S.MainContainer visible={isLoading}>
    <S.Container />
    <S.LoadingIcon>
      <S.LoadingHelper />
      <S.LoadingHelper />
      <S.LoadingHelper />
      <S.LoadingHelper />
    </S.LoadingIcon>
  </S.MainContainer>
);

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
