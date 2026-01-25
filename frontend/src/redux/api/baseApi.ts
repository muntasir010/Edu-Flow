/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: (import.meta as any).env.VITE_BASE_URL || "http://localhost:5000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Auth", "Users"],
  endpoints: () => ({}),
});
