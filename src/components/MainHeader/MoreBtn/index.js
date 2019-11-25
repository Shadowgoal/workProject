import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { removeAuth } from 'services/localStorageServices';
import { actions as authActions } from 'redux/auth';
import { logOutRequest } from 'http/requests';
import Loading from 'components/Loading';
import UserNav from '../UserNav';
import elements from './config';

import * as S from './styled';

const MoreBtn = () => {
  const [isLoading, setIsLoading] = useState(null);

  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();

  const { t } = useTranslation();

  useEffect(() => {
    const abortController = new AbortController();

    return function cleanup() {
      abortController.abort();
    };
  });

  const onLogOutBtn = useCallback(
    () => {
      setIsLoading(true);
      logOutRequest().then((data) => {
        setIsLoading(false);
        dispatch(authActions.logOut(data));
        removeAuth();
        history.push('/register');
      });
    },
    [dispatch, history],
  );

  // const onLogOutBtn = () => {
  //   setIsLoading(true);
  //   logOutRequest().then((data) => {
  //     dispatch(authActions.logOut(data));
  //     removeAuth();
  //     setIsLoading(false);
  //     history.push('/register');
  //   });
  // };

  return (
    <S.MainContainer>
      <Loading isLoading={isLoading} />
      <S.Container>
        <S.UploadBtn pathname={location.pathname === '/upload' ? 1 : 0} to="/upload">
          {t('MoreBtn.Upload')}
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
                  <S.DropDownElem key={index}>
                    {t(`MoreBtn.${elem.name}`)}
                  </S.DropDownElem>
                ))
              }
            </S.DropDownBox>
            <S.DropDownBox>
              <S.DropDownLogOut visible={isLoggedIn} onClick={onLogOutBtn}>
                {t('MoreBtn.Log out')}
              </S.DropDownLogOut>
            </S.DropDownBox>
          </S.DropDown>
        </S.MoreBtn>
      </S.Container>
    </S.MainContainer>
  );
};

export default MoreBtn;
