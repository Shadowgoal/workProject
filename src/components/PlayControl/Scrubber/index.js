import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Scrubber = ({ updateScrubber }) => (
  <S.Scrubber>
    <S.ProgressScrubber updateScrubber={updateScrubber} />
  </S.Scrubber>
);

Scrubber.propTypes = {
  updateScrubber: PropTypes.func.isRequired,
};

export default Scrubber;
