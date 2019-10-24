import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import instance from 'http/index';
import Loading from 'components/Loading';
import UserNav from '../UserNav';
import elements from './config';

import * as S from './styled';

const MoreBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const onLogOut = useCallback(
    () => dispatch({ type: 'LOG_OUT' }),
    [dispatch],
  );
  const location = useHistory();

  async function onLogOutBtn() {
    setIsLoading(true);
    await instance.post('/logout')
      .then((response) => response.data);
    onLogOut();
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    location.push('/upload');
    setIsLoading(false);
  }

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
              {
                elements.map((elem, index) => (
                  <S.DropDownElem key={index}>{elem.name}</S.DropDownElem>
                ))
              }
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
