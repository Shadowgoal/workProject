import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
`;

export const Container = styled.div`
  height: 46px;
  display: inline-flex;
`;

export const UploadBtn = styled(Link)`
  width: 60px;
  height: 46px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  line-height: 42px;
  background: ${({ pathname, theme }) => (pathname ? theme.activeHeaderBtn.background
    : theme.inactiveHeaderBtn.background)};
  color: ${({ pathname, theme }) => (pathname ? theme.activeHeaderBtn.color
    : theme.inactiveHeaderBtn.color)};
`;

export const Circles = styled.div`
  display: inline-flex;
  padding: 18px 11px;
`;

export const Circle = styled.div`
  width: 9px;
  height: 9px;
  background: ${({ theme }) => (theme.grey)};
  border-radius: 50%;
  margin-left: 1px;
`;

export const DropDown = styled.div`
  z-index: 2;
  display: none;
  background: #111;
  position: absolute;
  top: 46px;
  width: 160px;
  right: 22px;
  border-top: 1px solid ${({ theme }) => (theme.lightgrey)};
  transition: all .5s ease;
`;

export const DropDownBox = styled.div`
  border-bottom: 1px solid ${({ theme }) => (theme.lightgrey)};
`;

export const DropDownElem = styled.div`
  color: ${({ theme }) => (theme.grey)};
  font-size: 14px;
  padding: 8px;
  :hover {
    background: ${({ theme }) => (theme.lightgrey)};
    color: ${({ theme }) => (theme.white)};
  };
`;

export const DropDownLogOut = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  color: ${({ theme }) => (theme.grey)};
  font-size: 14px;
  padding: 8px;
  :hover {
    background: ${({ theme }) => (theme.lightgrey)};
    color: ${({ theme }) => (theme.white)};
  };
`;

export const MoreBtn = styled.div`
  width: 52px;
  height: inherit;
  display: inline-flex;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => (theme.activeHeaderBtn.background)};
  };
  :hover ${DropDown} {
    transform: translateY(0);
    display: block;
  };
`;
