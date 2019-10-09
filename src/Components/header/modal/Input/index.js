import React from 'react';
import { Field } from 'react-final-form';

import * as S from './styled';

const Input = (props) => {
  return (
    <Field name={props.name}>
      {({ input, meta }) => (
        <S.InputField>
          <S.Label>Username</S.Label>
          <S.Input {...input} type={props.type} placeholder={props.placeholder} />
          {meta.error && meta.touched && (
            <S.InputError>{meta.error}</S.InputError>
          )}
        </S.InputField>
      )}
    </Field>
  )
}

export default Input;