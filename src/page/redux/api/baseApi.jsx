import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  // prepareHeaders: (headers) => {
  //   const token = localStorage.getItem("accessToken");
  //   console.log(token);
  //   if (token) {
  //     headers.set("Authorization", `${token}`);
  //   }
  //   // if (refreshToken) {
  //   //   headers.set("Authorization", `Bearer ${refreshToken}`);
  //   // }
  //   return headers;
  // },
  
  prepareHeaders: (headers, { getState }) => {
    const token = getState().logInUser.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["overview", "host"],
  endpoints: () => ({}),
});

export const imageUrl = import.meta.env.VITE_BASE_URL;
