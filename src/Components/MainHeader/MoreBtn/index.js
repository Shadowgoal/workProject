import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './styled';


const MoreBtn = () => {
  return (
    <S.Container>
      <S.UploadBtn to='/upload'>
        Upload
      </S.UploadBtn>
      <S.MoreBtn>
        
      </S.MoreBtn>
    </S.Container>
  )
};

export default withRouter(MoreBtn);