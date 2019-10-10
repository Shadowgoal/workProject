import React from 'react';
import { Field } from 'react-final-form';

import * as S from './styled';

const FormInput = (props) => {
  return (
    <Field name={props.name}>
      {({ input, meta }) => (
        <S.InputField>
          <S.Label>{props.placeholder}</S.Label>
          <S.Input {...input} type={props.type} name={props.name} placeholder={props.placeholder} />
          {meta.error && meta.touched && (
            <S.InputError>{meta.error}</S.InputError>
          )}
        </S.InputField>
      )}
    </Field>
  )
}

export default FormInput;