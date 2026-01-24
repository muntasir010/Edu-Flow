import { Users, BookOpen, DollarSign } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Total Users" value="120" icon={<Users />} />
        <StatCard title="Total Courses" value="18" icon={<BookOpen />} />
        <StatCard title="Revenue" value="$3,500" icon={<DollarSign />} />
      </div>

      {/* RECENT USERS */}
      <div className="bg-white dark:bg-slate-900 border rounded-xl p-6">
        <h2 className="font-semibold mb-4">Recent Users</h2>

        <table className="w-full text-sm">
          <thead className="border-b text-left text-slate-500">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Asif</td>
              <td>asif@email.com</td>
              <td className="text-indigo-600">ADMIN</td>
            </tr>
            <tr>
              <td className="py-2">User One</td>
              <td>user@email.com</td>
              <td>USER</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
