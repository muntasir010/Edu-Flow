import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  profilePhoto: string;
  isBlocked: boolean;
}
