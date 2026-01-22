import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LayoutDashboard, User as UserIcon, LogOut, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);

  const user = {
    isLoggedIn: true,
    role: "ADMIN", // "ADMIN" or "USER"
    profilePhoto: "https://i.pravatar.cc/100",
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <Link to="/"><Logo /></Link>

        {/* Center: Desktop NavItems */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className={`text-sm font-medium ${activeClass(item.path)}`}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block"></div>

          {/* Profile & Auth Section */}
          <div className="relative" ref={profileRef}>
            {!user.isLoggedIn ? (
              <Link to="/login" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20">
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <div 
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <img
                    src={user.profilePhoto}
                    alt="profile"
                    className="w-9 h-9 rounded-full border-2 border-indigo-500/20 object-cover"
                  />
                  <ChevronDown size={14} className={`text-slate-500 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
                </div>

                {/* Dropdown Menu */}
                {profileOpen && (
                  <div className="absolute right-0 mt-12 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-3 border-b border-slate-50 dark:border-slate-800 mb-2">
                      <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Signed in as</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">{user.role}</p>
                    </div>

                    <button
                      onClick={() => {
                        navigate(user.role === "ADMIN" ? "/admin/dashboard" : "/user/dashboard");
                        setProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      <LayoutDashboard size={18} className="text-indigo-500" /> Dashboard
                    </button>

                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      <UserIcon size={18} className="text-emerald-500" /> Profile
                    </Link>

                    <div className="h-[1px] bg-slate-50 dark:bg-slate-800 my-2"></div>

                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600 dark:text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 p-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)} className={`block text-lg font-semibold ${activeClass(item.path)}`}>
              {item.name}
            </Link>
          ))}
          {!user.isLoggedIn && (
             <Link to="/login" className="block w-full bg-indigo-600 text-white text-center py-3 rounded-xl font-bold">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;