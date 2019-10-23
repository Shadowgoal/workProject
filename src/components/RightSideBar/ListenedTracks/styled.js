import styled from 'styled-components';

export const MostPopularContainer = styled.article`
  width: 300px;
  margin-bottom: 20px;
  height: 250px;
`;

export const IconContainer = styled.div`
  display: inline-flex;
`;

export const ListenedHistory = styled.span`
  font-size: 14px;
  color: slategray;
`;

export const CalendarIcon = styled.div`
  background: url(https://cdn1.iconfinder.com/data/icons/ui-admin-side-menu-set-16-vol-1/16/Calendar-512.png);
  margin: 2px;
  margin-right: 4px;
  width: 14px;
  height: 14px;
  background-size: 14px 14px;
`;

export const ViewAll = styled.span`
  color: slategray;
  float: right;
  font-size: 14px;
`;

export const ListenedTracksLink = styled.div`
  width: 300px;
  height: 25px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  :hover ${ViewAll} {
    color: black;
  };
`;
