import styled from 'styled-components';

export const Header = styled.header`
  background-image: url(https://a-v2.sndcdn.com/assets/images/home/sc_landing_header_web_a-3bb2d42.jpg);
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