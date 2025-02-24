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
    getAllOrders: builder.query({
      query: ({ clientId, searchTerm, filter }) => {
        const queryParams = new URLSearchParams();
        if (clientId) queryParams.append("clientId", clientId);
        if (searchTerm) queryParams.append("searchTerm", searchTerm);
        if (filter) queryParams.append("filter", filter);
        return {
          url: `/client/get-all-orders?${queryParams.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetClientAgentsQuery,
  useCreateOrderMutation,
  useGetAllOrdersQuery,
} = ordersApi;
