import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login/Login";
import { ProtectedRoute } from "../Components/Helper/ProtectedRoute";
import { User } from "../Components/User/User";
import { Photo } from "../Components/Photo/Photo";
import { UserProfile } from "../Components/User/UserProfile";
import { NotFound } from "../Components/NotFound";

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
