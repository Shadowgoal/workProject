import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserNav from '../UserNav';

import * as S from './styled';

const MoreBtn = (props) => (
  <S.Container>
    <S.UploadBtn background={props.location.pathname === '/upload' ? 'true' : 'false'} to="/upload">
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

MoreBtn.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(MoreBtn);
