import React from 'react';
import { connect } from 'react-redux';

import * as S from './styled';

const Weekly = (tracks) => (
  <S.Container>
    <S.TitleContainer>
      <S.Title>SoundCloud Weekly</S.Title>
      <S.TitleText>All of SoundCloud. Just for you.</S.TitleText>
    </S.TitleContainer>
    <S.SelectionPlaylistContainer>
      {
        Object.keys(tracks).map((track, trackId = track.id) => (
          console.log(track, trackId)
        ))
      }
    </S.SelectionPlaylistContainer>
  </S.Container>
);

const mapStateToProps = ({ tracks }) => ({ tracks });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
