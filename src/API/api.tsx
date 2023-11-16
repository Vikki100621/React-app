import Axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const API_KEY = '5732271fa4144cc39aba70d0ac3a56ff';
// export const getDataFromApi = async (
//   query: string,
//   limit: number,
//   page: number
// ) => {
//   try {
//     const response = await Axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch`,
//       {
//         params: {
//           apiKey: API_KEY,
//           query,
//           number: limit,
//           offset: page,
//         },
//       }
//     );
//     return response.data;
//   } catch (e) {
//     return undefined;
//   }
// };
export const recipeAPI = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes' }),
  tagTypes: ['recipes'],
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
        url: `/recipes/${id}/information`,
        params: {
          apiKey: API_KEY,
        },
      }),
    }),
  }),
});

export const { useFetchRecipeQuery, useFetchAllRecipesQuery } = recipeAPI;

export const getReciepFromApi = async (id: number) => {
  try {
    const response = await Axios.get(
      `https://api.spoonacular.com/recipes/${id}/information/?apiKey=5732271fa4144cc39aba70d0ac3a56ff`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (e) {
    return undefined;
  }
};
