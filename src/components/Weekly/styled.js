import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

export const TitleText = styled.span`
  color: ${({ theme }) => (theme.grey)};
  margin-top: 5px;
`;

export const SelectionPlaylistContainer = styled.div`
  height: 220px;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgb(184, 148, 129) 0%, rgb(116, 83, 83) 100%);
  position: relative;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

export const CoverContainer = styled.img`
  width: 180px;
  height: 180px;
  background-size: 180px;
`;

export const TrackContainer = styled.div`
  float: right;
  margin-left: 20px;
  width: 546px;;
  height: 180px;
  display: flex;
  flex-direction: column;
`;

export const Track = styled.div`
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: bisque;
    opacity: 0.5;
  };
`;

export const TrackName = styled.span`
  color: white;
`;

export const TrackArtist = styled.span`
  color: hsla(0,0%,100%,.7);;
`;
