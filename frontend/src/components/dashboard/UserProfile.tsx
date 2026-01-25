import { useAppSelector } from "@/redux/hook";

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-xl border flex flex-col justify-center items-center">
      <h2 className="text-xl text-center font-semibold mb-4">My Profile</h2>
      <div className="max-w-32 border-2 rounded-full">
        <img
          src={user?.profilePhoto}
          className="border border-amber-500 rounded-full"
          alt=""
        />
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
