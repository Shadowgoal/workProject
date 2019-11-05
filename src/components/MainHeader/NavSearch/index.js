import React from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const NavSearch = () => {
  const { t } = useTranslation();

  return (
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
                <S.SearchInput {...input} type="search" placeholder={t('NavSearch.Search')} />
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
};

export default NavSearch;
