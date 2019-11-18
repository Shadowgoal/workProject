import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => (theme.grey)};
  opacity: 0.5;
`;

export const MainContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  z-index: 1001;
`;

export const LoadingHelper = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  };
  :nth-child(2) {
    animation-delay: -0.3s;
  };
  :nth-child(3) {
    animation-delay: -0.15s;
  };

`;
