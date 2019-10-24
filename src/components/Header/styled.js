import styled from 'styled-components';
import HeaderBackground from 'assets/HeaderBackground/headerbackground.jpg';

export const Header = styled.header`
  background-image: url(${HeaderBackground});
  position: absolute;
  width: inherit;
  height: 381px;
  border-top: 4px solid #f50;
  display: flex;
  justify-content: center;
`;

export const LogoBtnContainer = styled.div`
  width: 90%;
  height: 50px;
  padding: 20px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const blank = () => {};
