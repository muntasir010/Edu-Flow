/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useGetAllUsersQuery } from "@/redux/features/admin/adminApi";
import { useAppDispatch } from "@/redux/hook";
import { setAdminStats } from "@/redux/features/admin/adminSlice";

const AdminDashboard = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.data) {
      const totalUsers = data.data.length;
      const totalAdmins = data.data.filter(
        (u: any) => u.role === "ADMIN"
      ).length;
      const totalBlockedUsers = data.data.filter(
        (u: any) => u.isBlocked
      ).length;

      dispatch(
        setAdminStats({
          totalUsers,
          totalAdmins,
          totalBlockedUsers,
        })
      );
    }
  }, [data, dispatch]);

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 shadow">
          <p className="text-sm text-muted-foreground">Total Users</p>
          <h2 className="text-3xl font-bold">{data?.data.length}</h2>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 shadow">
          <p className="text-sm text-muted-foreground">Admins</p>
          <h2 className="text-3xl font-bold">
            {data?.data.filter((u: any) => u.role === "ADMIN").length}
          </h2>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 shadow">
          <p className="text-sm text-muted-foreground">Blocked Users</p>
          <h2 className="text-3xl font-bold">
            {data?.data.filter((u: any) => u.isBlocked).length}
          </h2>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="mt-10 p-6 bg-white dark:bg-slate-900 rounded-xl shadow">
        <p className="text-lg font-semibold mb-2">User Statistics</p>
        <p className="text-sm text-muted-foreground">
          Chart integration (Bar / Pie) will be added in next step.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
