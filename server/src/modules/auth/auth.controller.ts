import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";

const register = catchAsync(async (req: Request, res: Response) => {
  const user = await AuthService.registerUser(req.body);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(
    req.body.email,
    req.body.password
  );

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: result,
  });
});

export const AuthController = {
  register,
  login,
};
