import Axios from 'axios';

export const getDataFromApi = async (
  query: string,
  limit: number,
  page: number
) => {
  try {
    const API_KEY = 'e4c03a7b1cab40598e87de5d64d5eff0';
    const response = await Axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          apiKey: API_KEY,
          query,
          number: limit,
          offset: page,
        },
      }
    );
    return response.data;
  } catch (e) {
    return undefined;
  }
};
