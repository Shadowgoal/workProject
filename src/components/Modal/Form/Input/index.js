import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';

import * as S from './styled';

const FormInput = ({ type, name, placeholder }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <S.InputField>
        <S.Label>{placeholder}</S.Label>
        <S.Input
          {...input}
          type={type}
          name={name}
          placeholder={placeholder}
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
  type: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
