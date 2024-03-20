import React, { ReactNode } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
};
