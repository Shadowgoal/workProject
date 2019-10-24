import styled from 'styled-components';

export const UserNavContainer = styled.div`
  display: ${(userNavigation) => (userNavigation.vision ? 'block' : 'none')};
`;

export const UserNameContainer = styled.span`
  color: #ccc;
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
  color: #999;
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
    background: #111;
  };
`;

export const DropDownIcon = styled.div`
  background: url(${(icon) => (icon.img)});
  width: 20px;
  height: 20px;
  background-size: 20px, 20px;
  margin: 0 15px 0 5px;
`;

export const DropDownText = styled.span`
  color: #999;
`;

export const DropDownItem = styled.div`
  background-color: #111;
  height: 20px;
  padding: 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  :hover {
    background: #333;
  };
  :hover ${DropDownText} {
    color: white;
  }
`;
