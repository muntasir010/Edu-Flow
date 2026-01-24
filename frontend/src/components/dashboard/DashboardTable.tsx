const DashboardTable = () => {
  return (
    <div className="rounded-xl border bg-white dark:bg-slate-900 p-6">
      <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
        My Courses
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 dark:text-slate-400 border-b">
              <th className="py-2">Course</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b last:border-none">
              <td className="py-3 font-medium text-slate-700 dark:text-slate-200">
                React Fundamentals
              </td>
              <td className="text-green-600">Active</td>
              <td>40%</td>
            </tr>
            <tr className="border-b last:border-none">
              <td className="py-3 font-medium text-slate-700 dark:text-slate-200">
                Node.js Mastery
              </td>
              <td className="text-yellow-500">In Progress</td>
              <td>65%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
