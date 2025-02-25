import { baseApi } from "./baseApi";
const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServicesCategories: builder.query({
      query: ({ searchTerm = "" } = {}) => {
        const searchQuery = searchTerm ? `?searchTerm=${searchTerm}` : "";
        return {
          url: `/service/get-all-categories${searchQuery}`,
          method: "GET",
        };
      },
    }),
    getAllServices: builder.query({
      query: ({ categoryId, clientId }) => {
        return {
          url: `/service/get-client-service/${clientId}?categoryId=${categoryId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllServicesQuery, useGetAllServicesCategoriesQuery } =
  serviceApi;
