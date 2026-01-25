/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRegisterMutation } from "../redux/api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register(formData).unwrap();
      toast.success("Registration successful");
      navigate("/login")
    } catch (err: any) {
      toast.error(err?.data?.message || "Registration failed");
    }
  };

  return (
  <div className="w-full max-w-md mx-auto relative z-10">
    <div className="bg-[#1e293b] backdrop-blur-lg border border-slate-700 p-10 rounded-3xl shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Register</h2>
        <p className="text-slate-400 mt-3 font-medium">Start your coding journey with us</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Full Name</label>
          <input
            name="name"
            placeholder="Enter your name..."
            className="w-full bg-[#0f172a]/50 border border-slate-600 p-3.5 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="user@email.com"
            className="w-full bg-[#0f172a]/50 border border-slate-600 p-3.5 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full bg-[#0f172a]/50 border border-slate-600 p-3.5 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 transform active:scale-95 mt-4"
        >
          Join Now
        </button>
      </form>

      <div className="mt-8 text-center text-slate-400">
        Already a member? <a href="/login" className="text-blue-400 font-bold hover:text-blue-300">Sign In</a>
      </div>
    </div>
  </div>
  );
};

export default Register;
