// src/app/routes/index.ts
import { Router } from "express";
import { AuthRoutes } from "../auth/auth.routes";
import { UserRoutes } from "../user/user.routes";
const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
