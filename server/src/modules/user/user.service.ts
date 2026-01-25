import ApiError from "../../utils/ApiError";
import { User } from "./user.model";
import httpStatus from "http-status"

const getMe = async (userId: string) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};

const updateProfileInDB = async (
  userId: string,
  payload: Partial<{ name: string; profilePhoto: string }>
) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    payload,
    { new: true, runValidators: true }
  ).select("-password");

  if (!updatedUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  return updatedUser;
};

export const UserService = {
  getMe,
  updateProfileInDB
};
