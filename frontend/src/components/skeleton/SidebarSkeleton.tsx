/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";

const SidebarSkeleton = ({ isCollapsed = false }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-50 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } p-4`}
    >
      {/* Logo Section Skeleton */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="min-w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
        {!isCollapsed && (
          <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded-md animate-pulse" />
        )}
      </div>

      {/* Navigation Items Skeleton */}
      <div className="flex-1 space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center gap-3 px-3 py-2">
            {/* Icon Skeleton */}
            <div className="min-w-5 h-5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            
            {/* Text Skeleton */}
            {!isCollapsed && (
              <div 
                className="h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" 
                // eslint-disable-next-line react-hooks/purity
                style={{ width: `${Math.floor(Math.random() * (60 - 40 + 1) + 40)}%` }} 
              />
            )}
          </div>
        ))}
      </div>

      {/* Logout Button Skeleton */}
      <div className="mt-auto flex items-center gap-3 px-3 py-3 border-t border-slate-100 dark:border-slate-900">
        <div className="min-w-5 h-5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
        {!isCollapsed && (
          <div className="h-4 w-20 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default SidebarSkeleton;