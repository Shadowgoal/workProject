import styled from 'styled-components';

export const InputField = styled.div`
  display: grid;
  width: 200px;
  height: 53px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const Label = styled.label`
  margin: 0 auto;
`;

export const InputError = styled.span`
  color: ${({ theme }) => (theme.red)};
  font-size: x-small;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => (theme.lightgrey)};
  outline: none;
  height: 25px;
`;
