// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import type { JSX } from "react";
// import type { RootState } from "../redux/store";

// interface PrivateRouteProps {
//   children: JSX.Element;
//   role?: "USER" | "ADMIN";
// }

// const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
//   const auth = useSelector((state: RootState) => state.auth);

//   if (!auth.token) {
//     return <Navigate to="/login" replace />;
//   }

//   if (role && auth.user?.role !== role) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { JSX } from "react";
import type { RootState } from "../redux/store";

interface PrivateRouteProps {
  children: JSX.Element;
  role?: "USER" | "ADMIN";
}

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;