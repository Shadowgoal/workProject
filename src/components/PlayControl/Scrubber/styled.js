import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;

export const Scrubber = styled.input`
  -webkit-appearance: none;
  width: 400px;
  margin: 0 25px;
  background: ${({ theme, progress }) => (`linear-gradient(to right, ${theme.orange} 0%, ${theme.orange} ${progress}%,
    ${theme.grey} ${progress}%, ${theme.grey} 100%)`)};
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
    background: ${({ theme }) => (theme.orange)};
  };
  :focus {
    outline: none;
  };
`;

export const CurrentTime = styled.span`
  color: ${({ theme }) => (theme.orange)};
  margin-left: 40px;

  width: 35px;
  min-width: 35px;
`;

export const Duration = styled.span`
`;
