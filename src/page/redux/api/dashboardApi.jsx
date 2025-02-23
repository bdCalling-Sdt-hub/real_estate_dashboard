import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: (clientId) => `/client/upcoming-appointment?clientId=${clientId}`,
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
