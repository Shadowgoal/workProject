import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

const PlayControl = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <S.PlayControlContainer visible={isLoggedIn} />
  );
};

export default PlayControl;
