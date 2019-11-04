import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MainLogo from 'assets/MainLogo/mainlogo.png';

export const Btn = styled(Link)`
  display: inline-flex;
  height: inherit;
  background: ${({ theme }) => (theme.orangeGradient)};
  color: ${({ theme }) => (theme.white)};
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.div`
  background: url(${MainLogo}) no-repeat 12px 11px;
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
  display: ${({ isVisible }) => (isVisible ? 'none' : 'block')};
`;
