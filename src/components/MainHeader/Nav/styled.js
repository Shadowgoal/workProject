import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: inherit;
  background: inherit;
`;

export const NavBtn = styled(Link)`
  width: 100px;
  background: inherit;
  border-right: 1px solid ${({ theme }) => (theme.black)};
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => (theme.grey)};
  padding: 12px 0;
  :hover {
    color: ${({ theme }) => (theme.white)};
  };
  font-size: 14px;
`;
