import styled from 'styled-components';

import Input from './Input';

export const FormContainer = styled.div`

`;

export const ButtonField = styled.div`
  width: 180px;
  position: relative;
  margin-left: calc(50% - 100px);
  padding: 10px;
  margin-top: 20px;
`;

export const CreateAcc = styled.span`
  color: dimgrey;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  position: relative;
  left: calc(50% - 111px);
  font-size: xx-large;
  font-weight: 500;
`;

export const RegisterButton = styled.button`
  background: #f50;
  border: none;
  border-radius: 4px;
  height: 25px;
  width: 75px;
  margin-right: 15px;
  color: white;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  background: #ccc;
  border: none;
  border-radius: 4px;
  height: 25px;
  width: 75px;
  color: black;
  cursor: pointer;
`;

export const RegisterForm = styled.form`
  ${Input}:first-child {
    margin-top: 30px;
  };
`;