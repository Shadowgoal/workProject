import styled from 'styled-components';

export const FormContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonField = styled.div`
  width: 180px;
  position: relative;
  margin-left: calc(50% - 100px);
  padding: 10px;
  margin-top: 20px;
`;

export const LogIn = styled.span`
  color: dimgrey;
  margin: 0 auto;
  text-align: center;
  left: calc(50% - 111px);
  font-size: xx-large;
  font-weight: 500;
  display: flex;
  padding-bottom: 20px;
  justify-content: center;
`;

export const LogInButton = styled.button`
  background: #f50;
  border: none;
  border-radius: 4px;
  height: 25px;
  width: 75px;
  margin-right: 15px;
  color: ${({ theme }) => (theme.white)};
  cursor: pointer;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => (theme.grey)};
  border: none;
  border-radius: 4px;
  height: 25px;
  width: 75px;
  color: black;
  cursor: pointer;
`;

export const LogInForm = styled.form`
`;
