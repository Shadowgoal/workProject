import React, { useState } from 'react';
import Slider from 'react-input-slider';

const VolumeSlider = () => {
  const [state, setState] = useState({ x: 30 });
  return (
    <div>
      <Slider axis="x" x={state.x} onChange={({ x }) => setState(() => ({ ...state, x }))} />
    </div>
  );
};

export default VolumeSlider;
