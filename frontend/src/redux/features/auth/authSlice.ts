/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./auth.types";

interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  loading: true,
};

export const fetchMe = createAsyncThunk<IUser, void, { rejectValue: string }>(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const rawBaseUrl = (import.meta as any).env.VITE_BASE_URL || "http://localhost:5000/api/v1";
      
      const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
      const fullUrl = `${baseUrl}/users/me`;

      const res = await fetch(fullUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message || "Unauthorized access");
      }

      return data.data || data; 
      
    } catch (err: any) {
      console.error("FetchMe Error:", err);
      return rejectWithValue("Network error. Please check your connection.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload || "Unauthorized";
      });
  },
});

export const { setCredentials, logout, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
