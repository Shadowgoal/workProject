import styled from 'styled-components';

import volumeOnIcon from 'assets/PlayControlIcons/volumeOn.png';
import volumeOffIcon from 'assets/PlayControlIcons/volumeOff.png';

export const Container = styled.div`
  position: relative;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  // background: #ffffff;
  background: linear-gradient(to right, #f50 0%, #f50 ${(color) => (+color.rangeValue * 100)}%,
  #ccc ${(color) => (+color.rangeValue * 100)}%, #ccc 100%);
  border-radius: 3px;
  cursor: pointer;
  ::-webkit-slider-runnable-track {
    width: 300px;
    height: 7px;
    border: none;
    border-radius: 3px;
  };
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #f50;
    margin-top: -4px;
  };
  :focus {
    outline: none;
  };
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
  background: url(${(icon) => (icon.rangeValue === '0' ? volumeOffIcon : volumeOnIcon)});
  background-size: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const blank = () => {};
