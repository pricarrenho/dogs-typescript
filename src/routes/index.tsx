import React from "react";
import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login/Login";
import { ProtectedRoute } from "../Components/ProtectedRoute";
import { User } from "../pages/User/User";
import { Photo } from "../pages/Photo/Photo";
import { UserProfile } from "../pages/User/UserProfile";
import { NotFound } from "../pages/NotFound";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route
        path="conta/*"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </RouteLib>
  );
};
