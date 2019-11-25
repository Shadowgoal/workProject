import styled from 'styled-components';

import volumeOnIcon from 'assets/PlayControlIcons/volumeOn.png';
import volumeOffIcon from 'assets/PlayControlIcons/volumeOff.png';

export const Container = styled.div`
  margin: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  background: ${({ theme, rangeValue }) => (`linear-gradient(to right, ${theme.orange} 0%,
    ${theme.orange} ${+rangeValue * 100}%,
    ${theme.grey} ${+rangeValue * 100}%,
    ${theme.grey} 100%)`)};
  border-radius: 3px;
  cursor: pointer;
  ::-webkit-slider-runnable-track {
    width: 300px;
    height: 3px;
    border: none;
    border-radius: 3px;
  };
  ::-webkit-slider-thumb {
    visibility: hidden;
    -webkit-appearance: none;
    border: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${({ theme }) => (theme.orange)};
    margin-top: -3px;
  };
  :focus {
    outline: none;
  };
  :hover::-webkit-slider-thumb {
    visibility: visible;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 20px;
  margin-left: 5px;
`;

export const SliderValue = styled.span`

`;

export const Volume = styled.div`
  background: url(${({ rangeValue }) => (+rangeValue ? volumeOnIcon : volumeOffIcon)});
  background-size: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
