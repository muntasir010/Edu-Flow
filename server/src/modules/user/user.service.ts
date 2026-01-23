import ApiError from "../../utils/ApiError";
import { User } from "./user.model";

const getMe = async (userId: string) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return user;
};

export const UserService = {
  getMe,
};
