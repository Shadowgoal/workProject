import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import RegisterForm from 'components/Modal/Form';
import { validation } from 'components/Modal/validation';

import * as S from './styled';

class RegisterRedirect extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  onSubmit = () => {
    if (validation) {
      this.props.history.push('/upload');
    }
  };

  render() {
    return (
      <S.Container>
        <S.MainTitle>
          Join SoundCloud to hear the latest from people you follow
        </S.MainTitle>
        <S.FormContainer>
          <RegisterForm onSubmit={this.onSubmit} />
        </S.FormContainer>
      </S.Container>
    );
  }
}

export default withRouter(RegisterRedirect);
