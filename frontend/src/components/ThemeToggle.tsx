/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeProvider";
import { Sun, Moon, Laptop, ChevronDown, Check } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themes = [
    { id: "light", label: "Light", icon: <Sun size={16} /> },
    { id: "dark", label: "Dark", icon: <Moon size={16} /> },
    { id: "system", label: "System", icon: <Laptop size={16} /> },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
     {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 shadow-sm group"
      >
        <div className="text-indigo-600 dark:text-indigo-400">
          {theme === "dark" && <Moon size={18} />}
          {theme === "light" && <Sun size={18} />}
          {theme === "system" && <Laptop size={18} />}
        </div>
        <ChevronDown 
          size={14} 
          className={`opacity-50 transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
        />
      </button>

      {/* Drop Down Menu*/}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in duration-200">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id as any);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                theme === t.id 
                  ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center gap-3">
                {t.icon}
                {t.label}
              </div>
              {theme === t.id && <Check size={14} className="animate-in zoom-in" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;