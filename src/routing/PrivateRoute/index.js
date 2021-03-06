import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => (
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/register" />
        )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
