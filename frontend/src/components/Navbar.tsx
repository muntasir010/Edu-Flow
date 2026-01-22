import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type User = {
  isLoggedIn: boolean;
  role: "user" | "admin";
  profilePhoto?: string;
};

const mockUser: User | null = {
  isLoggedIn: true,
  role: "user", // change to "admin" to test
  profilePhoto: "https://i.pravatar.cc/40",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = mockUser;

  const dashboardRoute =
    user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard";

  return (
    <nav className="bg-[#1e293b] border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          EduFlow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600">
            Courses
          </Link>

          {/* Auth Section */}
          {!user?.isLoggedIn ? (
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <img
                src={user.profilePhoto}
                alt="avatar"
                className="w-9 h-9 rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg">
                  <button
                    onClick={() => navigate(dashboardRoute)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </button>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/courses" className="block">
            Courses
          </Link>

          {!user?.isLoggedIn ? (
            <Link
              to="/login"
              className="block bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          ) : (
            <>
              <Link to={dashboardRoute} className="block">
                Dashboard
              </Link>
              <Link to="/profile" className="block">
                Profile
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
