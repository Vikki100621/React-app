import Axios from 'axios';

// const API_KEY = 'e4c03a7b1cab40598e87de5d64d5eff0';
const API_KEY = '90dfeb15cbf5498cba82065bdd18d126';
export const getDataFromApi = async (
  query: string,
  limit: number,
  page: number
) => {
  try {
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

export const getReciepFromApi = async (id: number) => {
  try {
    const response = await Axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
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
