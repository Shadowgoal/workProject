import styled from 'styled-components';

export const SignField = styled.div`
  display: ${(field) => (field.vision ? 'none' : 'block')};
  width: 200px;
  height: 39px;
  padding: 7px 0 0 9px;
  float: right;
`;

export const SignInBtn = styled.button`
  background: 0 0;
  color: white;
  height: 30px;
  width: 60px;
  border: 1px solid white;
  border-radius: 6px;
  margin-right: 8px;
  cursor: pointer;
  :hover {
      border: 2px solid white;
  };
  outline: none;
`;

export const CreateAccBtn = styled.button`
  height: 30px;
  width: 115px;
  background-color: #f50;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  outline: none;
`;
