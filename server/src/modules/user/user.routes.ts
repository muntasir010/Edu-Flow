import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { UserController } from "./user.controller";

const router = Router();

router.get("/me", auth("USER", "ADMIN"), UserController.getMe);

router.patch("/me", auth("USER", "ADMIN"), UserController.updateProfile);

export const UserRoutes = router;
