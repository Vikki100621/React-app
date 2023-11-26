import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const API_KEY = '5732271fa4144cc39aba70d0ac3a56ff';

export const recipeAPI = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes' }),
  tagTypes: ['recipes'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  endpoints: (builder) => ({
    fetchAllRecipes: builder.query({
      query: ({ query, limit, page }) => ({
        url: '/complexSearch',
        params: {
          apiKey: API_KEY,
          query,
          number: limit,
          offset: page,
        },
      }),
      providesTags: () => ['recipes'],
    }),
    fetchRecipe: builder.query({
      query: (id) => ({
        url: `/${id}/information`,
        params: {
          apiKey: API_KEY,
        },
      }),
    }),
  }),
});

export const {
  useFetchRecipeQuery,
  useFetchAllRecipesQuery,
  util: { getRunningQueriesThunk },
} = recipeAPI;
export const { fetchAllRecipes, fetchRecipe } = recipeAPI.endpoints;
