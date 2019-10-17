import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import instance from 'http/index';
import Loading from 'components/Loading';
import UserNav from '../UserNav';

import * as S from './styled';

const MoreBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const onLogOut = useCallback(
    () => dispatch({ type: 'LOG_OUT' }),
    [dispatch],
  );

  async function onLogOutBtn() {
    setIsLoading(true);
    await instance.post('/logout')
      .then((response) => console.log(response));
    onLogOut();
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    setIsLoading(false);
  }
  const location = useLocation();
  return (
    <S.MainContainer>
      <Loading isLoading={isLoading} />
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
            <S.DropDownBox>
              <S.DropDownElem>
                About Us
              </S.DropDownElem>
              <S.DropDownElem>
                Legal
              </S.DropDownElem>
              <S.DropDownElem>
                Copyright
              </S.DropDownElem>
            </S.DropDownBox>
            <S.DropDownBox>
              <S.DropDownLogOut visible={isLoggedIn} onClick={onLogOutBtn}>
                Log out
              </S.DropDownLogOut>
            </S.DropDownBox>
          </S.DropDown>
        </S.MoreBtn>
      </S.Container>
    </S.MainContainer>
  );
};

export default MoreBtn;
