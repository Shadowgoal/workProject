import styled from 'styled-components';

export const Container = styled.div`
  width: 1240px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadContainer = styled.div`
  display: ${({ visible }) => (visible ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => (theme.grey)};
  padding: 0 100px;
  height: 300px;
`;

export const UploadTitle = styled.span`
  color: black;
  font-size: 24px;
  padding: 20px 0;
`;

export const UploadBtn = styled.button`
  color: white;
  width: 100%;
  cursor: pointer;
  height: 40px;
  background: #f50;
  border-radius: 5px;
  border: none;
`;

export const UploadFooter = styled.span`
  padding: 20px 0;
  font-size: 12px;
  font-weight: 400;
`;

export const ButtonField = styled.div`
  width: 180px;
  position: relative;
  margin-left: calc(50% - 100px);
  padding: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
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

export const Form = styled.form`
`;
