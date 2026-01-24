import UserProfile from "@/components/dashboard/UserProfile";
import ErrorPage from "@/components/ErrorPage";
import PrivateRoute from "@/components/PrivateRoute";
import AdminLayout from "@/Layouts/AdminLayout";
import PublicLayout from "@/Layouts/PublicLayouts";
import UserLayout from "@/Layouts/UserLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserDashboard from "@/pages/user/UserDashboard";
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
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
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
