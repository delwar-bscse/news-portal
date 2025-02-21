import api from "../api/baseApi";

const newsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => ({
        url: "posts?_limit=12",
        method: "GET",
      }),
      providesTags: ["news"],
    }),
    getSingleNews: builder.query({
      query: ( postId :number ) => ({
        url: `posts/${postId}`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
    getSearchNews: builder.query({
      query: (search: string) => ({
        url: `posts?_limit=12&title_like=${search}`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
  }),
});

export const { useGetNewsQuery, useGetSearchNewsQuery, useGetSingleNewsQuery } = newsApi;