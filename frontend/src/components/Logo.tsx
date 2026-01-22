import logo from "../assets/edu-flow.png"

export const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative flex items-center justify-center w-14 h-14 rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
      <img src={logo} alt="" />
    </div>
    <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
      Edu<span className="text-indigo-600">Flow</span>
    </span>
  </div>
);