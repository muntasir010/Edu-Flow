import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import Navbar from "@/components/Navbar";
import { useAppSelector } from "@/redux/hook";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { user, loading } = useAppSelector((state) => state.auth);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar
        role={user?.role}
        isLoading={loading}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "md:ml-20" : "md:ml-64"} ml-0`}
      >
        <Navbar />
        <main className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
