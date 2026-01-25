import httpStatus from "http-status";
import { User } from "../user/user.model";
import ApiError from "../../utils/ApiError";

const getAllUsersFromDB = async () => {
  const users = await User.find().select("-password");
  return users;
};

const updateUserRoleInDB = async (
  userId: string,
  role: "USER" | "ADMIN"
) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  ).select("-password");

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};

const toggleUserStatusInDB = async (
  userId: string,
  isBlocked: boolean
) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { isBlocked },
    { new: true }
  ).select("-password");

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};

export const AdminService = {
  getAllUsersFromDB,
  updateUserRoleInDB,
  toggleUserStatusInDB,
};
