import express from "express";
import { auth } from "../../middlewares/auth";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.get("/users", auth("ADMIN"), AdminController.getAllUsers);

router.patch("/users/:id/role", auth("ADMIN"), AdminController.updateUserRole);

router.patch(
  "/users/:id/status",
  auth("ADMIN"),
  AdminController.toggleUserStatus,
);

export const AdminRoutes =  router;
