import UserProfile from "@/components/dashboard/UserProfile";
import ErrorPage from "@/components/ErrorPage";
import PrivateRoute from "@/components/PrivateRoute";
import AdminLayout from "@/Layouts/AdminLayout";
import PublicLayout from "@/Layouts/PublicLayouts";
import UserLayout from "@/Layouts/UserLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageCourses from "@/pages/admin/ManageCourses";
import ManageUsers from "@/pages/admin/ManageUser";
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
    element: (
      <PrivateRoute role="USER">
        <UserLayout />
      </PrivateRoute>
    ),
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
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "users", element: <ManageUsers /> },
      { path: "courses", element: <ManageCourses /> },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
]);
