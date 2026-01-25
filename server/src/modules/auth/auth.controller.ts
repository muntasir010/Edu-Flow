import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import config from "../../config";

const register = catchAsync(async (req: Request, res: Response) => {
  const user = await AuthService.registerUser(req.body);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});

const login = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body.email, req.body.password);
  const { token, user } = result;

  res.cookie("accessToken", token, {
    secure: config.node_env === "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.cookie("refreshToken", token, {
    secure: config.node_env === "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 90 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: { user, token },
  });
});

const logout = catchAsync(async(req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});


export const AuthController = {
  register,
  login,
  logout
};
