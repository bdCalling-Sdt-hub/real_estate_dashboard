import { baseApi } from "./baseApi";

const invoiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInvoice: builder.query({
      query: ({ page = 1, limit = 10, clientId = "" }) => {
        const params = new URLSearchParams();
        params.append("page", page);
        params.append("limit", limit);
        params.append("clientId", clientId);
        return {
          url: `/invoice/get-client-invoice?${params.toString()}`,
          method: "GET",
        };
      },
    }),
    payInvoice: builder.mutation({
      query: ({ invoiceId }) => {
        return {
          url: `/invoice/create-checkout-session?invoiceId=${invoiceId}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useGetInvoiceQuery, usePayInvoiceMutation } = invoiceApi;
