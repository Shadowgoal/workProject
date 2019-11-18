import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const TracksLoading = ({ isLoading }) => (
  <S.LoaderContainer visible={isLoading}>
    <S.Loader>
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
      <S.LoaderHelper />
    </S.Loader>
  </S.LoaderContainer>
);

TracksLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default TracksLoading;
