import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;

export const Scrubber = styled.input`
  -webkit-appearance: none;
  // background: #ffffff;
  width: 400px;
  margin: 0 25px;
  background: linear-gradient(to right, #f50 0%, #f50 ${(color) => (color.progress)}%,
  #ccc ${(color) => (color.progress)}%, #ccc 100%);
  border-radius: 3px;
  cursor: pointer;
  ::-webkit-slider-runnable-track {
    width: 350px;
    height: 3px;
    border: none;
    border-radius: 3px;
  };
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 6px;
    width: 6px;
    margin-top: -1px;
    border-radius: 50%;
    background: #f50;
  };
  :focus {
    outline: none;
  };
`;

export const CurrentTime = styled.span`
  color: #f50;
  margin-left: 40px;

  width: 35px;
  min-width: 35px;
`;

export const Duration = styled.span`
`;
