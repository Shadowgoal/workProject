import React from 'react';
import { useLocation } from 'react-router';

import NavBarEls from './config';

import * as S from './styled';

const LibraryNavBar = () => {
  const location = useLocation();

  return (
    <S.Container>
      <S.NavBar>
        {
          NavBarEls.map((el, index) => (
            <S.NavBarElement
              to={el.src}
              elcolor={el.src === location.pathname ? 1 : 0}
              key={index}
            >
              {el.name}
            </S.NavBarElement>
          ))
        }
      </S.NavBar>
    </S.Container>
  );
};

export default LibraryNavBar;
