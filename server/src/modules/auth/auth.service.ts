import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../user/user.model";
import ApiError from "../../utils/ApiError";

const registerUser = async (payload: any) => {
  const user = new User(payload);
  await user.save();
  return user;
};

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ApiError(401, "Invalid credentials");

  if (!process.env.JWT_SECRET) {
    throw new ApiError(500, "JWT secret not configured");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user, token };
};

export const AuthService = {
  registerUser,
  loginUser,
};
