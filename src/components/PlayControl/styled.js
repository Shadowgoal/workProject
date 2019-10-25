import styled from 'styled-components';

import playIcon from 'assets/PlayControlIcons/play.png';
import pauseIcon from 'assets/PlayControlIcons/pause.png';
import skipIcon from 'assets/PlayControlIcons/skip.png';

export const PlayControlContainer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #f2f2f2;
  border-top: 1px solid #cecece;
  display: ${(vision) => (vision.visible ? 'block' : 'none')};
`;

export const PlayControlElements = styled.div`
  width: 1180px;
  padding: 0 30px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

export const PlayBtn = styled.button`
  padding: 0;
  border: none;
  outline: none;
  background: url(${(track) => (track.isPlaying
    ? pauseIcon
    : playIcon)});
  background-size: 32px;
  width: 32px;
  height: 32px;
  margin: 0px 10px 0px 12px;
  cursor: pointer;
`;

export const NextBtn = styled.button`
  background: url(${skipIcon});
  padding: 0;
  border: none;
  outline: none;
  background-size: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const PrevBtn = styled.button`
  background: url(${skipIcon});
  padding: 0;
  border: none;
  outline: none;
  background-size: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const CurrentTime = styled.span`
  color: #f50;
  margin-left: 40px;

  width: 35px;
  min-width: 35px;
`;

export const Duration = styled.span`
`;

export const blank = () => {};
