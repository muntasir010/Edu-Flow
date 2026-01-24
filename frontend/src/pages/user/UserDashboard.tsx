import DashboardTable from "@/components/dashboard/DashboardTable";
import StatCard from "@/components/dashboard/StatCard";
import { useAppSelector } from "@/redux/hook";
import { BookOpen, GraduationCap, Clock } from "lucide-react";

const UserDashboard = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          Welcome back, {user?.name}
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Here is your learning overview
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Enrolled Courses"
          value="5"
          icon={<BookOpen />}
        />
        <StatCard
          title="Completed"
          value="2"
          icon={<GraduationCap />}
        />
        <StatCard
          title="In Progress"
          value="3"
          icon={<Clock />}
        />
      </div>

      {/* TABLE */}
      <DashboardTable />
    </div>
  );
};

export default UserDashboard;
