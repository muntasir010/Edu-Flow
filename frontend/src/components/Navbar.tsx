import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  User,
  Menu,
  X,
} from "lucide-react";
import { Logo } from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Theme Toggle Logic
  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClass = (path: string) =>
    location.pathname === path
      ? "text-indigo-600 dark:text-indigo-400 font-bold"
      : "text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Center: Desktop NavItems */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium ${activeClass(item.path)}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button (Light/Dark Only) */}
          {/* Theme Toggle */}
        <ThemeToggle/>

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block"></div>

          {/* Profile Section */}
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all"
              onClick={() => setProfileOpen(!profileOpen)}
            />
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 animate-in fade-in zoom-in duration-200">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <LayoutDashboard size={18} /> Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <User size={18} /> Profile
                </Link>
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2"></div>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-colors">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 p-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-semibold ${activeClass(item.path)}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
