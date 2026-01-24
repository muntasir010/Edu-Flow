
export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  profilePhoto?: string;
}

export interface AuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}
