import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MostPopularContainer = styled.article`
  width: 300px;
  margin-bottom: 20px;
  height: 250px;
  overflow: hidden;
`;

export const IconContainer = styled.div`
  display: inline-flex;
`;

export const ListenedHistory = styled.span`
  font-size: 14px;
  color: ${({ theme }) => (theme.lightgrey)};
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
  color: ${({ theme }) => (theme.lightgrey)};
  float: right;
  font-size: 14px;
`;

export const ListenedTracksLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 300px;
  height: 25px;
  border-bottom: 1px solid ${({ theme }) => (theme.grey)};
  cursor: pointer;
  :hover ${ViewAll} {
    color: ${({ theme }) => (theme.black)};
  };
`;

export const ListenedTracksContainer = styled.div`
  padding: 10px 10px;
`;

export const ListenedTrack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 10px;
  :hover {
    background: ${({ theme }) => (theme.lightgrey)};
  };
`;

export const ListenedTrackCover = styled.div`
  background: url(${(cover) => (cover.cover)});
  width: 50px;
  height: 50px;
  background-size: 50px
`;

export const ListenedTrackName = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 15px;
`;
