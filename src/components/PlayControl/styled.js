import styled from 'styled-components';

export const PlayControlContainer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #f2f2f2;
  border-top: 1px solid #cecece;
  visibility: ${(vision) => (vision.visible ? 'visible' : 'hidden')};
`;

export const blanc = () => ('smth');
