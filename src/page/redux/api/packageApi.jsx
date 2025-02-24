import { baseApi } from "./baseApi";

const packageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPackage: builder.query({
      query: ({ limit = 100, page = 1, searchTerm }) => {
        const searchQuery = searchTerm ? `&searchTerm=${searchTerm}` : "";
        return {
          url: `/service/packages?limit=${limit}&page=${page}${searchQuery}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllPackageQuery } = packageApi;
