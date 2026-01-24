import { useAppSelector } from "@/redux/hook";

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="max-w-xl bg-white dark:bg-slate-900 p-6 rounded-xl border">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>
      <div>
        <img src={user?.profilePhoto} alt="" />
      </div>
      <div className="space-y-3 text-sm">
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Role:</strong> {user?.role}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
