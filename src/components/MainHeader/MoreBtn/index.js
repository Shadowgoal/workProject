import React from 'react';
import { useLocation } from 'react-router';

import UserNav from '../UserNav';

import * as S from './styled';

const MoreBtn = () => {
  const location = useLocation();
  return (
    <S.Container>
      <S.UploadBtn background={location.pathname === '/upload' ? 'true' : 'false'} to="/upload">
        Upload
      </S.UploadBtn>
      <UserNav />
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
  );
};

export default MoreBtn;
