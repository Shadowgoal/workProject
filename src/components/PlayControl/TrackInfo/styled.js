import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  text-align: center;
  margin-left: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImgContainer = styled.div`
  background: url(${(cover) => (cover.cover)});
  width: 40px;
  height: 40px;
  background-size: 40px
`;

export const TrackName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Like = styled.span`
  cursor: pointer;
  color: ${(liked) => (liked.liked ? 'red' : 'black')};
`;
