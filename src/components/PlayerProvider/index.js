import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import PlayControl from 'components/PlayControl';

const PlayerProvider = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <>
      {children}
      {isLoggedIn && <PlayControl />}
    </>
  );
};

PlayerProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default React.memo(PlayerProvider);
