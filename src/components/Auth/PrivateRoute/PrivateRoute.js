import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Redirect to="/login" />;
}

export default PrivateRoute;
