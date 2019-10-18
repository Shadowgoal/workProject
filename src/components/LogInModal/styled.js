import styled, { keyframes } from 'styled-components';

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
  background-color: white;
  position: absolute;
  width: 440px;
  height: 350px;
  top: 30%;
  left: calc(50% - 220px);
  box-shadow: 1px 3px 7px 4px grey;
  z-index: 1000;
  visibility: ${(vision) => (vision.visible ? 'visible' : 'hidden')};
  animation: ${(vision) => (vision.visible ? fromTop : '')} .5s;
`;

export const ModalWindowShadow = styled.div`
  background-color: aliceblue;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  visibility: ${(vision) => (vision.visible ? 'visible' : 'hidden')};
`;

export const CloseModalX = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  font-weight: 500;
  font-size: -webkit-xxx-large;
  right: 2%;
  cursor: pointer;
`;
