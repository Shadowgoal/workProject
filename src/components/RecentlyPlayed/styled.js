import styled from 'styled-components';

import PlayIcon from 'assets/PlayControlIcons/play.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0px;
  border-bottom: 1px solid #ccc;
  margin: 0px 45px;
  font-size: 20px;
`;

export const RecentlyPlayedContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-left: 40px;
  :first-child {
    padding-left: 0;
  }
`;

export const Shadow = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(to top, black, initial);
  height: 200px;
`;

export const Play = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f50;
  :hover {
    background: #eb4f34;
  };
`;

export const PlayImg = styled.div`
  background: url(${PlayIcon});
  width: 40px;
  height: 40px;
  background-size: 40px;
  margin-left: 3px;
`;

export const CoverContainer = styled.div`
  background-image: url(${(cover) => (cover.cover)});
  background-size: 200px;
  width: 200px;
  height: 200px;
  :hover ${Shadow} {
    display: flex;
  };
`;

export const TrackArtist = styled.span`
  font-size: 14px;
  padding: 3px 0 0 2px;
`;

export const TrackName = styled.span`
  font-size: 14px;
  color: #ccc;
  padding: 3px 0 0 2px;
`;
