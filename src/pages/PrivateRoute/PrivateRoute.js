import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redirect to login page if the user is not authenticated
    return <Navigate to="/" />;
  }

  return children; // Render the children if the user is authenticated
};

export default PrivateRoute;
