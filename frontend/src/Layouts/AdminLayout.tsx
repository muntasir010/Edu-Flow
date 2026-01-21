import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <header className="bg-red-900 text-white p-4">Admin Navbar</header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
