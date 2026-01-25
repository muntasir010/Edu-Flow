import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminState {
  totalUsers: number;
  totalAdmins: number;
  totalBlockedUsers: number;
  selectedUserId: string | null;
}

const initialState: AdminState = {
  totalUsers: 0,
  totalAdmins: 0,
  totalBlockedUsers: 0,
  selectedUserId: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminStats: (
      state,
      action: PayloadAction<{
        totalUsers: number;
        totalAdmins: number;
        totalBlockedUsers: number;
      }>
    ) => {
      state.totalUsers = action.payload.totalUsers;
      state.totalAdmins = action.payload.totalAdmins;
      state.totalBlockedUsers = action.payload.totalBlockedUsers;
    },

    setSelectedUser: (state, action: PayloadAction<string | null>) => {
      state.selectedUserId = action.payload;
    },
  },
});

export const { setAdminStats, setSelectedUser } = adminSlice.actions;
export default adminSlice.reducer;
