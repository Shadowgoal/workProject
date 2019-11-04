import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 46px;
  background: ${({ theme }) => (theme.inactiveHeaderBtn.background)};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: inherit;
  background: inherit;
  position: absolute;
  width: 1240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
