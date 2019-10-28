import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const VolumeSlider = ({ updateRange, rangeValue }) => {
  const update = (e) => {
    updateRange(e.target.value);
  };

  const onVolume = () => {
    if (+rangeValue > 0) {
      updateRange('0');
    } else if (+rangeValue === 0) {
      updateRange('0.3');
    }
  };

  return (
    <S.Container>
      <S.Volume onClick={onVolume} rangeValue={rangeValue} />
      <S.SliderContainer>
        <S.Slider
          value={rangeValue}
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={update}
          rangeValue={rangeValue}
        />
        <S.SliderValue />
      </S.SliderContainer>
    </S.Container>
  );
};

VolumeSlider.propTypes = {
  updateRange: PropTypes.func.isRequired,
  rangeValue: PropTypes.string.isRequired,
};

export default VolumeSlider;
