import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { onLogOut } from 'redux/action';
import { logOutRequest } from 'http/requests';
import Loading from 'components/Loading';
import UserNav from '../UserNav';
import elements from './config';

import * as S from './styled';

const MoreBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();

  async function onLogOutBtn() {
    setIsLoading(true);
    await logOutRequest();
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    dispatch(onLogOut());
    setIsLoading(false);
    history.push('/upload');
  }

  return (
    <S.MainContainer>
      <Loading isLoading={isLoading} />
      <S.Container>
        <S.UploadBtn pathname={location.pathname === '/upload' ? 1 : 0} to="/upload">
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
