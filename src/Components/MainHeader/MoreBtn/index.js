import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './styled';


const MoreBtn = (props) => {
  return (
    <S.Container>
      <S.UploadBtn background={props.location.pathname === '/upload' ? 'true' : 'false'} to='/upload'>
        Upload
      </S.UploadBtn>
      <S.MoreBtn>
        <S.Circles>
          <S.Circle />
          <S.Circle />
          <S.Circle />
        </S.Circles>
        <S.DropDown>
          <S.DropDownElem>
            About Us
          </S.DropDownElem>
          <S.DropDownElem>
            Legal
          </S.DropDownElem>
          <S.DropDownElem>
            Copyright
          </S.DropDownElem>
        </S.DropDown>
      </S.MoreBtn>
    </S.Container>
  )
};

export default withRouter(MoreBtn);