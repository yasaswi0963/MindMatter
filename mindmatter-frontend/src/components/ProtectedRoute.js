import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // or wherever you save the JWT

  if (!token) {
    return <Navigate to="/login" />;
  }

  // Optionally: decode token and check expiry here

  return children;
};

export default ProtectedRoute;