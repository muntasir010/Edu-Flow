import ErrorPage from "@/components/ErrorPage";
import PrivateRoute from "@/components/PrivateRoute";
import AdminLayout from "@/Layouts/AdminLayout";
import PublicLayout from "@/Layouts/PublicLayouts";
import UserLayout from "@/Layouts/UserLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
    
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/user",
    element: (
      <PrivateRoute role="USER">
        <UserLayout />
      </PrivateRoute>
    ),
    children: [
      // Example user routes
      { path: "dashboard", element: <div>User Dashboard</div> },
      { path: "profile", element: <div>User Profile</div> },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute role="ADMIN">
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      //  admin routes
      { path: "dashboard", element: <div>Admin Dashboard</div> },
      { path: "manage-users", element: <div>Manage Users</div> },
    ],
  },
]);
