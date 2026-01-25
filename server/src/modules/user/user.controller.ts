import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status"
import { UserService } from "./user.service";

const getMe = catchAsync(async (req, res) => {
  const userId = req.user?.id;

  const user = await UserService.getMe(userId as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully",
    data: user,
  });
});

const updateProfile = catchAsync(async (req, res) => {
   const userId = req.user!.id;

  const result = await UserService.updateProfileInDB(
    userId,
    req.body
  );

 sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile updated successfully",
    data: result,
  });
});

export const UserController = {
  getMe,
  updateProfile
};
