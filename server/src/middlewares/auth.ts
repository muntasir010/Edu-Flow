import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../config";

export const auth =
  (...roles: ("USER" | "ADMIN")[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token",
      });
    }

    try {
      const decoded = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as any;

      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden",
        });
      }

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
  };
