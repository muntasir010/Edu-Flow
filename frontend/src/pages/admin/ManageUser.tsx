const ManageUsers = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Manage Users</h2>

      <table className="w-full text-sm">
        <thead className="border-b text-left text-slate-500">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>Asif</td>
            <td>admin@email.com</td>
            <td>ADMIN</td>
            <td>
              <button className="text-red-500">Block</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
