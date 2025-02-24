import { baseApi } from "./baseApi";
const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClientAgents: builder.query({
      query: (clientId) => `/client/get-client-agent?clientId=${clientId}`,
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/create-order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetClientAgentsQuery, useCreateOrderMutation } = ordersApi;
