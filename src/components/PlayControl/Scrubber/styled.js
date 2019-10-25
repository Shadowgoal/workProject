import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;

export const Scrubber = styled.div`
  width: 350px;
  min-width: 350px;
  height: 2px;
  background: #ccc;
  margin: 0 25px;
  display: flex;
`;

export const ProgressScrubber = styled.div`
  background: #f50;
  max-width: 100%;
  min-width: 0%;
  width: ${(progress) => (progress.updateScrubber)}%;
  height: 2px;
  display: flex;
`;

export const CurrentTime = styled.span`
  color: #f50;
  margin-left: 40px;

  width: 35px;
  min-width: 35px;
`;

export const Duration = styled.span`
`;
