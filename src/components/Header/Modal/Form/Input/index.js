import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';

import * as S from './styled';

const FormInput = (props) => (
  <Field name={props.name}>
    {({ input, meta }) => (
      <S.InputField>
        <S.Label>{props.placeholder}</S.Label>
        <S.Input
          {...input}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
        {meta.error && meta.touched && (
          <S.InputError>{meta.error}</S.InputError>
        )}
      </S.InputField>
    )}
  </Field>
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
