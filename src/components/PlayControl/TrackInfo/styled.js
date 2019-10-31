import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  text-align: center;
  position: relative;
  right: -9%;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  background: url(${(cover) => (cover.cover)});
  width: 30px;
  height: 30px;
  background-size: 30px;
`;

export const TrackName = styled.span`
  font-size: 14px;
  font-weight: 500;
  padding: 0 55px 0 20px;
  color: #595959;
`;

export const Like = styled.span`
  cursor: pointer;
  color: ${(liked) => (liked.liked ? 'red' : 'black')};
  margin-right: 10px;
`;

export const Playlist = styled.span`
  cursor: pointer;
  color: ${(el) => (el.isPlaylistsOpened ? '#f50' : 'black')};
`;

export const PlaylistModal = styled.div`
  visibility: ${(el) => (el.isPlaylistsOpened ? 'visible' : 'hidden')};
  height: 55%;
  width: 375px;
  position: fixed;
  bottom: 6%;
  right: 11%;
  box-shadow: 1px 0px 3px 1px grey;
  background-color: #f2f2f2;
`;

export const NextUpContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 9px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
`;

export const NextUpTitle = styled.div`
  flex-grow: 1;
  line-height: 46px;
  font-size: 16px;
  text-align: start;
`;

export const BtnContainer = styled.div`
`;

export const ClearBtn = styled.button`
  margin-right: 30px;
  border: 1px solid #ccc;
  background: inherit;
  width: 60px;
  height: 22px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ClosePlaylists = styled.img`
  width: 18px;
  margin: -4px 0;
  cursor: pointer;
`;

export const PlaylistContainer = styled.div`

`;

export const TrackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 24px;
  cursor: pointer;
  :hover {
    background: lightgray;
  }
`;
