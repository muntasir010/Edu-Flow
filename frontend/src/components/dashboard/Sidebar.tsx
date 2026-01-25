/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  LogOut,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import SidebarSkeleton from "../skeleton/SidebarSkeleton";
import { Dispatch, SetStateAction, useState } from "react";

interface SidebarProps {
  role?: string;
  isLoading?: boolean;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({
  role = "USER",
  isLoading = false,
  isCollapsed,
  setIsCollapsed,
}: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems =
    role === "ADMIN"
      ? [
          {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: <LayoutDashboard size={20} />,
          },
          {
            name: "Manage Users",
            path: "/admin/users",
            icon: <Users size={20} />,
          },
          {
            name: "Users",
            path: "/admin/user",
            icon: <Users size={20} />,
          },
          {
            name: "Manage Courses",
            path: "/admin/courses",
            icon: <BookOpen size={20} />,
          },
          {
            name: "My Profile",
            path: "/admin/profile",
            icon: <UserCircle size={20} />,
          },
          {
            name: "Settings",
            path: "/admin/settings",
            icon: <Settings size={20} />,
          },
        ]
      : [
          {
            name: "My Learning",
            path: "/user/dashboard",
            icon: <LayoutDashboard size={20} />,
          },
          {
            name: "My Profile",
            path: "/user/profile",
            icon: <UserCircle size={20} />,
          },
          {
            name: "My Courses",
            path: "/user/my-courses",
            icon: <BookOpen size={20} />,
          },
          {
            name: "Settings",
            path: "/user/settings",
            icon: <Settings size={20} />,
          },
        ];

  if (isLoading) return <SidebarSkeleton isCollapsed={isCollapsed} />;

  return (
    <>
      {/* Mobile Toggle Button */}
      {!isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="fixed top-16 left-0 z-[70] md:hidden p-2 bg-indigo-600 text-white rounded-lg shadow-lg"
        >
          <Menu size={16} />
        </button>
      )}

      {/* Sidebar Aside */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? "80px" : "260px",
          x: isMobileOpen ? 0 : window.innerWidth < 768 ? -260 : 0,
        }}
        className="fixed left-0 top-0 h-screen bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-[60] transition-colors shadow-xl md:shadow-none"
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden absolute right-4 top-4 p-2 text-slate-500"
        >
          <X size={20} />
        </button>

        {/* Desktop Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex absolute -right-3 top-10 bg-indigo-600 text-white rounded-full p-1 shadow-lg hover:bg-indigo-700 z-[70]"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        <div className="flex flex-col h-full p-4">
          <div className="flex items-center gap-3 px-2 mb-10 overflow-hidden">
            <div className="min-w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 dark:shadow-none">
              {role === "ADMIN" ? "A" : "U"}
            </div>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col truncate"
              >
                <span className="font-extrabold text-sm text-indigo-600 tracking-wider uppercase">
                  {role === "ADMIN" ? "Admin" : "User"}
                </span>
                <span className="font-bold text-lg text-orange-500 leading-tight">
                  Dashboard
                </span>
              </motion.div>
            )}
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.path}
                item={item}
                isCollapsed={isCollapsed}
                active={location.pathname === item.path}
                onClick={() => setIsMobileOpen(false)}
              />
            ))}
          </nav>

          <button className="flex items-center gap-3 px-3 py-3 mt-auto text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all group font-semibold">
            <LogOut size={20} />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

const SidebarItem = ({ item, isCollapsed, active, onClick }: any) => (
  <Link
    to={item.path}
    onClick={onClick}
    className="relative group flex items-center"
  >
    <div
      className={`flex items-center w-full gap-3 p-3 rounded-xl transition-all duration-200 ${active ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`}
    >
      <div className={`${active ? "scale-110" : ""}`}>{item.icon}</div>
      {!isCollapsed && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium truncate"
        >
          {item.name}
        </motion.span>
      )}
    </div>
    {isCollapsed && (
      <div className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[100]">
        {item.name}
      </div>
    )}
  </Link>
);
