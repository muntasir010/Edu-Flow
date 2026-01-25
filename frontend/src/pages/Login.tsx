/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      const userData = res.data?.user || res.user;
      const token = res.data?.token || res.token;

      dispatch(
        setCredentials({
          user: userData,
          token: token,
        }),
      );

      toast.success("Login successful");
      if (userData?.role === "ADMIN") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/user/dashboard", { replace: true });
      }
    } catch (err: any) {
      console.error("Login Error:", err);
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto relative z-10">
      <div className="bg-[#1e293b] backdrop-blur-xl border border-slate-700 p-10 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Login
          </h2>
          <p className="text-slate-400 mt-3 font-medium">
            Access your learning dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="user@email.com"
              className="w-full bg-[#0f172a]/50 border border-slate-600 p-3.5 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#0f172a]/50 border border-slate-600 p-3.5 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300 transform active:scale-95 mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400">
            New student?{" "}
            <a
              href="/register"
              className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
