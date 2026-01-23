import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.service";

const getMe = catchAsync(async (req, res) => {
  const userId = req.user?.id;

  const user = await UserService.getMe(userId as string);

  res.status(200).json({
    success: true,
    data: user,
  });
});

export const UserController = {
  getMe,
};
