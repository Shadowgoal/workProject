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
  position: absolute;
  width: 440px;
  height: 350px;
  top: 30%;
  left: calc(50% - 220px);
  box-shadow: 1px 3px 7px 4px grey;
  z-index: 1000;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  animation: ${({ visible }) => (visible ? fromTop : '')} .5s;
`;

export const ModalWindowShadow = styled.div`
  background-color: ${({ theme }) => (theme.grey)};
  opacity: 0.8;
  position: absolute;
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
