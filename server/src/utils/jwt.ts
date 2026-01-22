import jwt, { SignOptions } from "jsonwebtoken";
import config from "../config";

export const createToken = (payload: object, expiresIn: string) => {
  return jwt.sign(payload, config.jwt_access_secret as string, {
    expiresIn: expiresIn as SignOptions["expiresIn"],
  });
};
