/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useToggleUserStatusMutation,
} from "@/redux/features/admin/adminApi";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";

const Users = () => {
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  const [updateRole] = useUpdateUserRoleMutation();
  const [toggleStatus] = useToggleUserStatusMutation();

  if (isLoading) return <p className="flex justify-center items-center"><Loader/></p>;

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      <table className="w-full border-2 border-gray-800 shadow-xl rounded-2xl ">
        <thead>
          <tr className="bg-muted">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.data.map((user: any) => (
            <tr key={user._id} className="text-center border-t">
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <select
                  value={user.role}
                  onChange={(e) =>
                    updateRole({ id: user._id, role: e.target.value })
                      .unwrap()
                      .then(() => toast.success("Role updated"))
                  }
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </td>

              <td>{user.isBlocked ? "Blocked" : "Active"}</td>

              <td>
                <button
                  onClick={() =>
                    toggleStatus({
                      id: user._id,
                      isBlocked: !user.isBlocked,
                    })
                      .unwrap()
                      .then(() => toast.success("Status updated"))
                  }
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  {user.isBlocked ? "Unblock" : "Block"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
