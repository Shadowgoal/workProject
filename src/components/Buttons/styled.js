import styled from 'styled-components';

export const SignField = styled.div`
  display: ${({ vision }) => (vision ? 'none' : 'block')};
  width: 200px;
  height: 39px;
  padding: 7px 0 0 9px;
  float: right;
`;

export const SignInBtn = styled.button`
  background: 0 0;
  color: ${({ theme }) => (theme.white)};
  height: 30px;
  width: 60px;
  border: 1px solid ${({ theme }) => (theme.white)};
  border-radius: 6px;
  margin-right: 8px;
  cursor: pointer;
  :hover {
    border: 2px solid ${({ theme }) => (theme.white)};
  };
  outline: none;
`;

export const CreateAccBtn = styled.button`
  height: 30px;
  width: 115px;
  background-color: ${({ theme }) => (theme.orange)};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => (theme.white)};
  cursor: pointer;
  outline: none;
`;
