import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 24px;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => (theme.grey)};
  padding-inline-start: 0;
  margin: 0px 45px;
`;

export const NavBarElement = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
  :first-child {
    margin: 0;
  };
  cursor: pointer;
  color: ${({ elcolor, theme }) => (elcolor ? theme.orange : theme.black)};
  border-bottom: ${({ elcolor, theme }) => (elcolor ? `2px solid ${theme.orange}` : 'none')};
`;

export const blank = () => {};
