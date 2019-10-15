import React from 'react';
import { Form, Field } from 'react-final-form';

import * as S from './styled';

const NavSearch = () => (
  <S.Container>
    <Form
      onSubmit={(values) => {
        if (values.searchValue) {
          console.log(values);
          values.searchValue = '';
        }
      }}
      render={({ handleSubmit }) => (
        <S.SearchForm onSubmit={handleSubmit}>
          <Field name="searchValue">
            {({ input }) => (
              <S.SearchInput {...input} type="search" placeholder="Search for artists, bands, tracks, podcasts" />
            )}
          </Field>
          <S.SearchBtn
            type="submit"
          />
        </S.SearchForm>
      )}
    />
  </S.Container>
);

export default NavSearch;
