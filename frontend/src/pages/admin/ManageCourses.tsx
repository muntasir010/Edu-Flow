const ManageCourses = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Manage Courses</h2>

      <button className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded">
        + Add Course
      </button>

      <table className="w-full text-sm">
        <thead className="border-b text-left text-slate-500">
          <tr>
            <th>Title</th>
            <th>Instructor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React Fundamentals</td>
            <td>Asif</td>
            <td className="space-x-2">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;
