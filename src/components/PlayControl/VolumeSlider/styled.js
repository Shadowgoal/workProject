import styled from 'styled-components';

import volumeIcon from 'assets/PlayControlIcons/volume.png';

export const Container = styled.div`
  position: relative;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  background: #ffffff;
  ::-webkit-slider-runnable-track {
    width: 300px;
    height: 7px;
    background: #ddd;
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
  :focus::-webkit-slider-runnable-track {
    background: #ccc;
  };
  ::-ms-fill-upper {
    background: #f50;
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
  background: url(${volumeIcon});
  background-size: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const blank = () => {};
