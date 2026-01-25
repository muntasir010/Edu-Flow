import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { User } from "./user.model";
import { UserService } from "./user.service";

const getMe = catchAsync(async (req, res) => {
  const userId = req.user?.id;

  const user = await UserService.getMe(userId as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User retrieved successfully",
    data: user,
  });
});

const updateProfile = catchAsync(async (req, res) => {
  const userId = req.user?.id;

  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  }).select("-password");

  return res.status(200).json({
    success: true,
    message: "Profile updated",
    data: updatedUser,
  });
});

export const UserController = {
  getMe,
  updateProfile
};
