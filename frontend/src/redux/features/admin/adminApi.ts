import { baseApi } from "@/redux/api/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["Users"],
    }),

    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/admin/users/${id}/role`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["Users"],
    }),

    toggleUserStatus: builder.mutation({
      query: ({ id, isBlocked }) => ({
        url: `/admin/users/${id}/status`,
        method: "PATCH",
        body: { isBlocked },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useToggleUserStatusMutation,
} = adminApi;
