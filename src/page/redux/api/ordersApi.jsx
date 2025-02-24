import { baseApi } from "./baseApi";
const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClientAgents: builder.query({
      query: (clientId) => `/client/get-client-agent?clientId=${clientId}`,
    }),
  }),
});

export const { useGetClientAgentsQuery } = ordersApi;
