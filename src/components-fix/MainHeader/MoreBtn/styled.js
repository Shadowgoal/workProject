import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background: ${(upload) => (upload.background ? '#111' : '#inherit')};
  color: ${(upload) => (upload.background ? 'white' : '#ccc')};
`;

export const Circles = styled.div`
  display: inline-flex;
  padding: 18px 11px;
`;

export const Circle = styled.div`
  width: 9px;
  height: 9px;
  background: #ccc;
  border-radius: 50%;
  margin-left: 1px;
`;

export const DropDown = styled.div`
  z-index: 2;
  display: none;
  background: #111;
  color: red;
  position: absolute;
  top: 46px;
  width: 160px;
  right: 22px;
  border-top: 1px solid #333;
`;

export const DropDownElem = styled.div`
  color: #ccc;
  font-size: 14px;
  padding: 8px;
  :hover {
    background: #333;
    color: white;
  };
`;

export const MoreBtn = styled.div`
  width: 52px;
  height: inherit;
  display: inline-flex;
  cursor: pointer;
  :hover {
    background: #111;
  };
  :hover ${DropDown} {
    display: block;
  };
`;