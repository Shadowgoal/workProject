import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: inherit;
  background: inherit;
`;

export const NavBtn = styled(Link)`
  width: 100px;
  background: inherit;
  border-right: 1px solid black;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: #ccc;
  padding: 12px 0;
  :hover {
    color: white;
  };
  font-size: 14px;
`;
