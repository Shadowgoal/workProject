import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavContainer = styled.div`
  display: ${({ vision }) => (vision ? 'block' : 'none')};
  margin: 0 55px;
`;

export const UserNameContainer = styled.span`
  color: ${({ theme }) => (theme.grey)};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const UserDropDownArrow = styled.div`
  background: url(https://www.bounteous.com/sites/default/files/luna-migrate/down-arrow.png);
  width: 15px;
  height: 9px;
  background-size: 15px,10px;
  margin-right: 10px;
`;

export const DropDownContainer = styled.div`
  color: ${({ theme }) => (theme.dark)};
  z-index: 999;
  position: fixed;
  width: 140px;
  font-size: 14px;
  display: none;
  top: 46px;
`;

export const UserContainer = styled.div`
  background: inherit;
  width: 200px;
  padding: 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  :hover ${DropDownContainer} {
    display: block;
  };
  :hover {
    background: ${({ theme }) => (theme.activeHeaderBtn.background)};
  };
`;

export const DropDownIcon = styled.div`
  background: url(${({ img }) => (img)});
  width: 20px;
  height: 20px;
  background-size: 20px, 20px;
  margin: 0 15px 0 5px;
`;

export const DropDownText = styled.span`
  color: ${({ theme }) => (theme.dark)};
`;

export const DropDownItem = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => (theme.activeHeaderBtn.background)};
  height: 20px;
  padding: 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => (theme.inactiveHeaderBtn.background)};
  };
  :hover ${DropDownText} {
    color: ${({ theme }) => (theme.white)};
  }
`;
