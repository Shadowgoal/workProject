import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class MainTitle extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  onUpload = () => {
    this.props.history.push('/upload');
  };

  render() {
    return (
      <S.Container>
        <S.Title>Connect on SoundCloud</S.Title>
        <S.Description>Discover, stream, and share a constantly expanding mix of music from emerging
          and major artists around the world.
        </S.Description>
        <S.ButtonContainer>
          <S.SignUpBtn onClick={this.onUpload}>Upload your first track</S.SignUpBtn>
        </S.ButtonContainer>
      </S.Container>
    );
  }
}

export default MainTitle;
