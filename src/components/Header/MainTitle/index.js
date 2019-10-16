import React from 'react';

import * as S from './styled';

const MainTitle = () => (
  <S.Container>
    <S.Title>Connect on SoundCloud</S.Title>
    <S.Description>Discover, stream, and share a constantly expanding mix of music from emerging
      and major artists around the world.
    </S.Description>
    <S.ButtonContainer>
      <S.SignUpBtn to="/upload">Upload your first track</S.SignUpBtn>
    </S.ButtonContainer>
  </S.Container>
);

export default MainTitle;
