import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  text-align: center;
  position: relative;
  right: -9%;
  display: flex;
  justify-content: center;
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
  padding: 0 60px;
`;

export const Like = styled.span`
  cursor: pointer;
  color: ${(liked) => (liked.liked ? 'red' : 'black')};
`;
