import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 24px;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-inline-start: 0;
  margin: 0px 45px;
`;

export const NavBarElement = styled.li`
  margin-left: 20px;
  :first-child {
    margin: 0;
  };
  cursor: pointer;
  color: ${(el) => (el.pathname ? '#f50' : 'black')};
  border-bottom: ${(el) => (el.pathname ? '2px solid #f50' : 'none')};
`;

export const blank = () => {};
