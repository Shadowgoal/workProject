import styled, { keyframes } from 'styled-components';

import CloseIcon from 'assets/CloseIcon/closeicon.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const fromTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const ModalWindow = styled.div`
  background-color: ${({ theme }) => (theme.white)};
  position: fixed;
  width: 390px;
  height: 300px;
  padding: 25px;
  top: 30%;
  left: calc(50% - 220px);
  box-shadow: 1px 3px 7px 4px grey;
  z-index: 1000;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  animation: ${({ visible }) => (visible ? fromTop : '')} .5s;
`;

export const ModalWindowShadow = styled.div`
  background-color: ${({ theme }) => (theme.grey)};
  left: 0;
  top: 0;
  opacity: 0.8;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export const CloseModalX = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  background: url(${CloseIcon});
  background-size: 30px;
  right: 2%;
  top: 2%;
  cursor: pointer;
`;

export const Title = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  font-size: 22px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => (theme.grey)};
`;

export const SelectLanguage = styled.div`
  height: 160px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`;

export const Language = styled.button`
  color: ${({ disabled, theme }) => (disabled ? theme.black : theme.blue)};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => (theme.black)};
  };
  padding: 10px 0;
  border: none;
  background: inherit;
`;

export const CloseModal = styled.button`
  margin: 20px 15px 20px 0;
  cursor: pointer;
  float: right;
  border: none;
  background: inherit;
`;
