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
      query: ({ category, searchTerm, limit = 100, page = 1 }) => {
        const searchQuery = searchTerm ? `&searchTerm=${searchTerm}` : "";
        const categoryQuery = category ? `&category=${category}` : "";
        return {
          url: `/service/services?limit=${limit}&page=${page}${searchQuery}${categoryQuery}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllServicesQuery, useGetAllServicesCategoriesQuery } =
  serviceApi;
