import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { JSX } from "react";
import type { RootState } from "../redux/store";

interface PrivateRouteProps {
  children: JSX.Element;
  role?: "USER" | "ADMIN";
}

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.token) {
    return <Navigate to="/login" replace />;
  }

  if (role && auth.user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
