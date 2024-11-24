import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the custom hook for authentication

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Use the hook to check authentication status

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
