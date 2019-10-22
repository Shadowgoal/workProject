import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Scrubber = ({ progress }) => (
  <S.Scrubber>
    <S.ProgressScrubber updateScrubber={progress} />
  </S.Scrubber>
);

Scrubber.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Scrubber;
