
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  
    // prepareHeaders: (headers) => {
    //   const token =
    //     localStorage.getItem("authenticationToken") ||
    //     sessionStorage.getItem("authenticationToken");

    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
  tagTypes: ["news"],
});

export const { reducer } = api;
export default api;