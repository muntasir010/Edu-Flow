import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <header className=" text-white p-4">User Navbar</header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
