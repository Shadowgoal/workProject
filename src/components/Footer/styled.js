import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  border-top: 1px solid  ${({ theme }) => (theme.grey)};
  padding-top: 20px;
  padding-bottom: 60px;
  color:  ${({ theme }) => (theme.darkgrey)};
`;
