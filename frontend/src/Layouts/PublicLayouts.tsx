import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4">Public Navbar</header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-10">Public Footer</footer>
    </div>
  );
};

export default PublicLayout;
