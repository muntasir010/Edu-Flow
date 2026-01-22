import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, loading } = useSelector(
    (state: RootState) => state.auth
  );

  return {
    user,
    loading,
    isAuthenticated: !!user,
    role: user?.role,
  };
};
