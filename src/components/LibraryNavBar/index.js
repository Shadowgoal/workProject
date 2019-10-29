import React from 'react';
import { useHistory, useLocation } from 'react-router';

import NavBarEl from './config';

import * as S from './styled';

const LibraryNavBar = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <S.Container>
      <S.NavBar>
        {
          NavBarEl.map((el, index) => (
            <S.NavBarElement
              onClick={() => history.push(el.src)}
              pathname={el.src === location.pathname}
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
