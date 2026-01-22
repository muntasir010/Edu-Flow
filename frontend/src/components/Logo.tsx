export const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
      <span className=" italic -rotate-3 group-hover:rotate-0 transition-transform">
        <img src="../assets/Edu flow.png" alt="" />
      </span>
    </div>
    <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
      Edu<span className="text-indigo-600">Flow</span>
    </span>
    <img src="../assets/Edu flow.png" alt="" />
  </div>
);