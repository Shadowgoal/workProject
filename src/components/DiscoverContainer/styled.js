import styled from 'styled-components';

export const Container = styled.div`
  height: 800px;
  width: 100%;
  float: right;
  padding-right: 55px;
  border-right: 1px solid ${({ theme }) => (theme.grey)};
`;

export const blank = () => {};
