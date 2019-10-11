import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
  display: inline-flex;
  height: inherit;
  background: linear-gradient(#f70,#f30);
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.div`
  background: url(https://a-v2.sndcdn.com/assets/images/header/cloud-e365a47.png) no-repeat 12px 11px;
  background-size: 48px 22px;
  height: 46px;
  width: 69px;
`;

export const TextLogo = styled.span`
  top: 12px;
  position: relative;
  height: 20px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: ${(logo) => (logo.isVisible ? 'none' : 'block')};
`;
