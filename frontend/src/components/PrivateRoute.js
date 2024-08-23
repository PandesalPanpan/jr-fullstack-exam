import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

function PrivateRoute({ element: Component, ...rest }) {
  return isAuthenticated() ? Component : <Navigate to="/login" />;
}

export default PrivateRoute;