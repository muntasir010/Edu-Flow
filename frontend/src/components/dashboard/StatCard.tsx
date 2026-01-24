import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon: ReactNode;
}

const StatCard = ({ title, value, icon }: Props) => {
  return (
    <div className="rounded-xl border bg-white dark:bg-slate-900 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            {value}
          </h3>
        </div>
        <div className="text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
