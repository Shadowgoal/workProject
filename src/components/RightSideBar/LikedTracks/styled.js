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

export const LikeIcon = styled.div`
  margin: 2px;
  margin-right: 4px;
  width: 14px;
  height: 14px;
  background: url(http://www.myiconfinder.com/uploads/iconsets/256-256-37ca743a29e155658596b7f6310b8d53-heart.png);
  background-size: 14px 14px;
`;

export const LikeCounter = styled.span`
  font-size: 14px;
  color: ${({ theme }) => (theme.lightgrey)};
`;

export const ViewAll = styled.span`
  color: ${({ theme }) => (theme.lightgrey)};
  float: right;
  font-size: 14px;
`;

export const LikedTracksLink = styled(Link)`
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

export const LikedTracksContainer = styled.div`
  padding: 10px 10px;
`;

export const LikedTrack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 10px;
  :hover {
    background: ${({ theme }) => (theme.lightgrey)};
  };
`;

export const LikedTrackCover = styled.div`
  background: url(${({ cover }) => (cover)});
  width: 50px;
  height: 50px;
  background-size: 50px
`;

export const LikedTrackName = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 15px;
`;
