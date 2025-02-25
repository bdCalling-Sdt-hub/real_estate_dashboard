import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUpcomingAppointment: builder.query({
      query: (clientId) => `/client/upcoming-appointment?clientId=${clientId}`,
    }),
    getRecentOrder: builder.query({
      query: (clientId) => `/client/recent-deliver-order?clientId=${clientId}`,
    }),
  }),
});

export const { useGetUpcomingAppointmentQuery, useGetRecentOrderQuery } =
  dashboardApi;
