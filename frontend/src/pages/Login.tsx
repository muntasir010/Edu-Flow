/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();

      dispatch(
        setCredentials({
          user: res.data.user,
          token: res.data.token,
        })
      );

      toast.success("Login successful");
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 shadow"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
