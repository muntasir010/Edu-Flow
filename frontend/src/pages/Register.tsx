/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRegisterMutation } from "../redux/api/authApi";
import toast from "react-hot-toast";

const Register = () => {
  const [register] = useRegisterMutation();

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
    } catch (err: any) {
      toast.error(err?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 shadow"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded mb-3"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
