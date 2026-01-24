import Navbar from "@/components/Navbar";
import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">
        {/* SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 bg-white dark:bg-slate-900 rounded-xl border p-4 h-fit">
          <nav className="space-y-2 text-sm">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded bg-indigo-600 text-white"
                  : "block px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/users"
              className="block px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Manage Users
            </NavLink>

            <NavLink
              to="/admin/courses"
              className="block px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Manage Courses
            </NavLink>
          </nav>
        </aside>

        {/* CONTENT */}
        <main className="col-span-12 md:col-span-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
