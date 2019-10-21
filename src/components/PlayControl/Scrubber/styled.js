import styled from 'styled-components';

export const Scrubber = styled.div`
  width: 35%;
  height: 2px;
  background: #ccc;
  margin: 0 25px;
`;

export const ProgressScrubber = styled.div`
  background: #f50;
  max-width: 100%;
  min-width: 0%;
  width: ${(progress) => (progress.updateScrubber)};
  height: 2px;
`;
