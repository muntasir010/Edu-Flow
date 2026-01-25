import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AdminService } from "./admin.service";

const getAllUsers = catchAsync(async (_req, res) => {
  const result = await AdminService.getAllUsersFromDB();

  res.status(200).json({
    success: true,
    data: result,
  });
});

const updateUserRole = catchAsync(async (req, res) => {
  const { role } = req.body;
  const id = req.params.id as string;

  const result = await AdminService.updateUserRoleInDB(id, role);

  res.status(200).json({
    success: true,
    message: "User role updated",
    data: result,
  });
});

const toggleUserStatus = catchAsync(async (req, res) => {
  const { isBlocked } = req.body;
  const id = req.params.id as string;

  const result = await AdminService.toggleUserStatusInDB(id, isBlocked);

  res.status(200).json({
    success: true,
    message: "User status updated",
    data: result,
  });
});

export const AdminController = {
  getAllUsers,
  updateUserRole,
  toggleUserStatus,
};
