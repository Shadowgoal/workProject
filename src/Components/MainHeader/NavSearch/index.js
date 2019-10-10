import React from 'react';
import { Form, Field } from 'react-final-form';

import * as S from './styled';

const onSubmit = (value) => {
  if (value.searchValue) {
    console.log(value)
  }
};

const NavSearch = () => {
  return (
    <S.Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <S.SearchForm onSubmit={handleSubmit}>
            <Field name="searchValue">
              {({ input }) => (
                <S.SearchInput {...input} type='search' placeholder="Search for artists, bands, tracks, podcasts" />
              )}
            </Field>
            <S.SearchBtn 
              type='submit'
              onClick={onSubmit}>
            </S.SearchBtn>
          </S.SearchForm>
        )}
      />
    </S.Container>
  )
};

export default NavSearch;